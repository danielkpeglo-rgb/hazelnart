/* ============================================================
   HAZELNART: Enquiry delivery (FormSubmit → company inbox)

   Every enquiry passes Google reCAPTCHA ("I'm not a robot") on
   FormSubmit's server before it is emailed, then the visitor is
   sent back to the page they came from with ?sent=1.

   The inbox address is never shown on the site and never sits
   in the code as readable text, so it can't be clicked, copied
   or harvested by spam bots.

   ★ AFTER ACTIVATION ★
   The first message sent from the live site makes FormSubmit
   email the inbox an activation link. Once activated, FormSubmit
   also sends a random-like code (e.g. "a1b2c3d4e5f6...").
   Paste that code into FORM_ALIAS below: the address is then
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
  const COOLDOWN_MS = 30000;  // one enquiry per 30 seconds per browser
  const LAST_KEY    = 'hazelnart-last-enquiry';
  const PENDING_KEY = 'hazelnart-pending-enquiry';
  const loadedAt    = Date.now();

  const store = {
    get(area, key) { try { return window[area].getItem(key); } catch (e) { return null; } },
    set(area, key, v) { try { window[area].setItem(key, v); } catch (e) { /* ignore */ } },
    del(area, key) { try { window[area].removeItem(key); } catch (e) { /* ignore */ } },
  };

  /**
   * Send an enquiry. Leaves the page for FormSubmit's reCAPTCHA check.
   * fields:  key/value pairs shown in the email (in order)
   * opts:    { subject, replyTo, honeypot, returnTo, pending, files: [{ blob, name }] }
   * Returns  { ok: true, redirecting } | { ok: true, silent } |
   *          { ok: false, reason: 'cooldown'|'unsupported', message }
   */
  function submit(fields, opts = {}) {
    // Bots: filled the hidden field, or submitted impossibly fast: pretend it worked
    if (opts.honeypot || Date.now() - loadedAt < MIN_FILL_MS) return { ok: true, silent: true };

    const wait = COOLDOWN_MS - (Date.now() - parseInt(store.get('localStorage', LAST_KEY) || '0', 10));
    if (wait > 0) {
      return { ok: false, reason: 'cooldown', message: `Please wait ${Math.ceil(wait / 1000)} seconds before sending another message.` };
    }

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `https://formsubmit.co/${target()}`;
    form.enctype = 'multipart/form-data';
    form.acceptCharset = 'UTF-8';
    form.hidden = true;

    const add = (name, value) => {
      if (!value) return;
      const el = document.createElement('textarea');   // keeps line breaks intact
      el.name = name;
      el.value = String(value);
      form.appendChild(el);
    };

    Object.entries(fields).forEach(([k, v]) => add(k, v));
    add('_subject', opts.subject || 'New enquiry from the Hazelnart website');
    add('_template', 'table');
    add('_captcha', 'true');
    add('_blacklist', BLACKLIST);
    add('_replyto', opts.replyTo);

    const next = new URL(opts.returnTo || location.pathname, location.href);
    next.search = ''; next.hash = '';
    next.searchParams.set('sent', '1');
    add('_next', next.href);

    if (opts.files && opts.files.length) {
      const unsupported = { ok: false, reason: 'unsupported', message: 'This browser can\'t attach your sketch automatically.' };
      if (typeof DataTransfer === 'undefined') return unsupported;
      try {
        const dt = new DataTransfer();
        opts.files.forEach(f => dt.items.add(new File([f.blob], f.name, { type: f.blob.type || 'image/png' })));
        const input = document.createElement('input');
        input.type = 'file';
        input.name = 'attachment';
        input.files = dt.files;
        if (!input.files || !input.files.length) return unsupported;
        form.appendChild(input);
      } catch (e) {
        return unsupported;
      }
    }

    store.set('sessionStorage', PENDING_KEY, JSON.stringify(opts.pending || {}));
    store.set('localStorage', LAST_KEY, String(Date.now()));
    document.body.appendChild(form);
    form.submit();
    return { ok: true, redirecting: true };
  }

  /** On the return trip (?sent=1): details saved before leaving, then tidy the URL. */
  function takeSent() {
    if (new URLSearchParams(location.search).get('sent') !== '1') return null;
    let data = {};
    try { data = JSON.parse(store.get('sessionStorage', PENDING_KEY) || '{}') || {}; } catch (e) { data = {}; }
    store.del('sessionStorage', PENDING_KEY);
    history.replaceState(null, '', location.pathname);
    return data;
  }

  window.HazelnartForms = { submit, takeSent };
})();
