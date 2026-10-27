<?php
/* ============================================================
   HAZELNART: Enquiry delivery (website → info@hazelnart.com)

   Checks Google reCAPTCHA ("I'm not a robot") on the server,
   then emails the enquiry. Called in the background by forms.js,
   so visitors never leave the page.

   This file runs on the server: the secret key and the inbox
   address are never sent to visitors' browsers.
   ============================================================ */

require __DIR__ . '/send-config.php';   // RECAPTCHA_SECRET (kept out of git)
const INBOX            = 'info@hazelnart.com';
const SITE_HOST        = 'hazelnart.com';
const MAX_FIELD        = 5000;              // characters per field
const MAX_FILE         = 6 * 1024 * 1024;   // sketch attachment size

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function reply($ok, $message = '', $code = 200) {
    http_response_code($code);
    echo json_encode(['success' => $ok, 'message' => $message]);
    exit;
}

function clean_line($s) {
    return trim(preg_replace('/[\r\n\t]+/', ' ', (string) $s));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(false, 'Method not allowed', 405);

// Only accept enquiries sent from the website itself
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== SITE_HOST) reply(false, 'Forbidden', 403);

// Bots fill the hidden field: pretend it worked
if (!empty($_POST['_honey'])) reply(true);

// ── reCAPTCHA ───────────────────────────────────────────────
$token = $_POST['g-recaptcha-response'] ?? '';
if ($token === '') reply(false, 'captcha', 400);

$ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => http_build_query(['secret' => RECAPTCHA_SECRET, 'response' => $token, 'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '']),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 10,
]);
$check = json_decode((string) curl_exec($ch), true);
curl_close($ch);
if (empty($check['success']) || ($check['hostname'] ?? '') !== SITE_HOST) reply(false, 'captcha', 400);

// ── Build the email ─────────────────────────────────────────
$subject = clean_line($_POST['_subject'] ?? 'New enquiry from the Hazelnart website');
$replyTo = filter_var(clean_line($_POST['_replyto'] ?? ''), FILTER_VALIDATE_EMAIL) ?: '';

$rows = '';
$text = '';
foreach ($_POST as $key => $value) {
    if ($key[0] === '_' || $key === 'g-recaptcha-response' || !is_string($value) || trim($value) === '') continue;
    $label = clean_line(str_replace('_', ' ', $key));
    $value = mb_substr(trim($value), 0, MAX_FIELD);
    $rows .= '<tr><th align="left" valign="top" style="padding:8px 14px;background:#f4f4f4;border-bottom:1px solid #e5e5e5;white-space:nowrap">'
           . htmlspecialchars($label) . '</th><td style="padding:8px 14px;border-bottom:1px solid #e5e5e5">'
           . nl2br(htmlspecialchars($value)) . '</td></tr>';
    $text .= "$label: $value\n";
}
if ($rows === '') reply(false, 'Empty message', 400);

$html = '<html><body style="font-family:Arial,sans-serif;font-size:14px;color:#222">'
      . '<h2 style="font-size:18px">' . htmlspecialchars($subject) . '</h2>'
      . '<table cellspacing="0" style="border:1px solid #e5e5e5;border-collapse:collapse">' . $rows . '</table>'
      . '</body></html>';

$file = $_FILES['attachment'] ?? null;
$hasFile = $file && $file['error'] === UPLOAD_ERR_OK && $file['size'] <= MAX_FILE
        && in_array(mime_content_type($file['tmp_name']), ['image/png', 'image/jpeg'], true);

$boundary = 'hz' . bin2hex(random_bytes(12));
$alt      = 'alt' . bin2hex(random_bytes(12));

$headers = [
    'From: Hazelnart Website <' . INBOX . '>',
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];
if ($replyTo) $headers[] = 'Reply-To: ' . $replyTo;

$body  = "--$boundary\r\nContent-Type: multipart/alternative; boundary=\"$alt\"\r\n\r\n";
$body .= "--$alt\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n" . chunk_split(base64_encode($text)) . "\r\n";
$body .= "--$alt\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n" . chunk_split(base64_encode($html)) . "\r\n";
$body .= "--$alt--\r\n";
if ($hasFile) {
    $name = preg_replace('/[^A-Za-z0-9._-]/', '-', basename($file['name'])) ?: 'sketch.png';
    $type = mime_content_type($file['tmp_name']);
    $body .= "--$boundary\r\nContent-Type: $type; name=\"$name\"\r\nContent-Transfer-Encoding: base64\r\n"
           . "Content-Disposition: attachment; filename=\"$name\"\r\n\r\n"
           . chunk_split(base64_encode(file_get_contents($file['tmp_name']))) . "\r\n";
}
$body .= "--$boundary--\r\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$sent = mail(INBOX, $encodedSubject, $body, implode("\r\n", $headers), '-f' . INBOX);

$sent ? reply(true, '', 200) : reply(false, 'Mail failed', 500);
