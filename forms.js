/* ============================================================
   HAZELNART: Enquiry delivery (send.php → company inbox)

   Enquiries are sent in the background: the visitor never leaves
   the page and sees the confirmation straight away.

   Every enquiry needs Google's "I'm not a robot" tick, which
   send.php checks on the server before emailing the inbox.
   The inbox address is never on the site or in this code.
   ============================================================ */
(function () {
  const ENDPOINT = 'send.php';

  const MIN_FILL_MS = 4000;   // humans take longer than this to fill a form
  const COOLDOWN_MS = 30000;  // one enquiry per 30 seconds per browser
  const LAST_KEY    = 'hazelnart-last-enquiry';
  const loadedAt    = Date.now();

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, v) { try { localStorage.setItem(key, v); } catch (e) { /* ignore */ } },
  };

  const fail = message => ({ ok: false, reason: 'failed', message });
  const needTick = { ok: false, reason: 'captcha', message: 'Please tick "I\'m not a robot" first.' };

  /**
   * Send an enquiry without leaving the page.
   * fields:  key/value pairs shown in the email (in order)
   * opts:    { subject, replyTo, honeypot, files: [{ blob, name }] }
   * Resolves { ok: true, attached } |
   *          { ok: false, reason: 'cooldown'|'captcha'|'failed', message }
   */
  async function submit(fields, opts = {}) {
    // Bots: filled the hidden field, or submitted impossibly fast: pretend it worked
    if (opts.honeypot || Date.now() - loadedAt < MIN_FILL_MS) return { ok: true };

    const wait = COOLDOWN_MS - (Date.now() - parseInt(store.get(LAST_KEY) || '0', 10));
    if (wait > 0) {
      return { ok: false, reason: 'cooldown', message: `Please wait ${Math.ceil(wait / 1000)} seconds before sending another message.` };
    }

    if (!window.grecaptcha || !window.grecaptcha.getResponse) return fail('The "I\'m not a robot" check didn\'t load. Please refresh the page.');
    const token = window.grecaptcha.getResponse();
    if (!token) return needTick;

    const data = new FormData();
    data.append('g-recaptcha-response', token);
    data.append('_subject', opts.subject || 'New enquiry from the Hazelnart website');
    if (opts.replyTo) data.append('_replyto', opts.replyTo);
    Object.entries(fields).forEach(([k, v]) => { if (v) data.append(k, String(v)); });

    const attached = !!(opts.files && opts.files.length);
    if (attached) opts.files.forEach(f => data.append('attachment', f.blob, f.name));

    try {
      const res  = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (json.message === 'captcha') return needTick;
      if (!res.ok || !json.success) return fail('Your message couldn\'t be sent right now.');
    } catch (e) {
      return fail('Your message couldn\'t be sent. Please check your connection.');
    } finally {
      window.grecaptcha.reset();   // each tick is valid for one message only
    }

    store.set(LAST_KEY, String(Date.now()));
    return { ok: true, attached };
  }

  window.HazelnartForms = { submit };
})();
