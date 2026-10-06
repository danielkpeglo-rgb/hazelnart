/* ============================================================
   HAZELNART — Enquiry delivery (FormSubmit → company inbox)

   The inbox address is never shown on the site and never sits
   in the code as readable text, so it can't be clicked, copied
   or harvested by spam bots.

   ★ AFTER ACTIVATION ★
   The first message sent from the live site makes FormSubmit
   email the inbox an activation link. Once activated, FormSubmit
   also sends a random-like code (e.g. "a1b2c3d4e5f6...").
   Paste that code into FORM_ALIAS below — the address is then
   removed from the code entirely.
   ============================================================ */
(function () {
  const FORM_ALIAS = '';

  // Scrambled fallback, only used until FORM_ALIAS is filled in
  const SCRAMBLED = [112, 117, 109, 118, 71, 111, 104, 129, 108, 115, 117, 104, 121, 123, 53, 106, 118, 116];
  const target = () => FORM_ALIAS || String.fromCharCode(...SCRAMBLED.map(c => c - 7));

  // Phrases that mark a message as spam (FormSubmit drops it)
  const BLACKLIST = 'casino, crypto, bitcoin, forex, viagra, loan offer, seo services, backlinks, porn, betting';

  const MIN_FILL_MS = 4000;   // humans take longer than this to fill a form
  const COOLDOWN_MS = 60000;  // one enquiry per minute per browser
  const LAST_KEY    = 'hazelnart-last-enquiry';
  const loadedAt    = Date.now();

  function lastSent() {
    try { return parseInt(localStorage.getItem(LAST_KEY) || '0', 10); } catch (e) { return 0; }
  }
  function markSent() {
    try { localStorage.setItem(LAST_KEY, String(Date.now())); } catch (e) { /* ignore */ }
  }

  /**
   * Send an enquiry to the company inbox.
   * fields:  plain key/value pairs shown in the email (in order)
   * opts:    { subject, replyTo, honeypot, files: [{ blob, name }] }
   * Resolves to { ok: true } or { ok: false, reason: 'spam'|'cooldown'|'network'|'rejected', message }
   */
  async function send(fields, opts = {}) {
    // Bots: filled the hidden field, or submitted impossibly fast — pretend it worked
    if (opts.honeypot || Date.now() - loadedAt < MIN_FILL_MS) return { ok: true, silent: true };

    const wait = COOLDOWN_MS - (Date.now() - lastSent());
    if (wait > 0) {
      return { ok: false, reason: 'cooldown', message: `Please wait ${Math.ceil(wait / 1000)} seconds before sending another message.` };
    }

    const fd = new FormData();
    Object.entries(fields).forEach(([k, v]) => { if (v) fd.append(k, v); });
    fd.append('_subject', opts.subject || 'New website enquiry — Hazelnart');
    fd.append('_template', 'table');
    fd.append('_captcha', 'false');
    fd.append('_blacklist', BLACKLIST);
    if (opts.replyTo) fd.append('_replyto', opts.replyTo);
    (opts.files || []).forEach(f => fd.append('attachment', f.blob, f.name));

    let res;
    try {
      res = await fetch(`https://formsubmit.co/ajax/${target()}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });
    } catch (e) {
      return { ok: false, reason: 'network', message: 'We could not reach our mail server. Check your connection and try again.' };
    }

    let data = {};
    try { data = await res.json(); } catch (e) { /* non-JSON reply */ }
    const ok = res.ok && (data.success === true || data.success === 'true');
    if (!ok) return { ok: false, reason: 'rejected', message: data.message || 'Your message could not be delivered.' };

    markSent();
    return { ok: true };
  }

  window.HazelnartForms = { send };
})();
