# Contact Form Email Setup

The contact form is configured to send submissions to:

```bash
info@sanjitamhrzn.com
```

It currently uses browser-side FormSubmit as the email delivery service, so no SMTP password is required.

Important: the first submission may send an activation email to `info@sanjitamhrzn.com`. Open that email and confirm activation once. After activation, later submissions should arrive normally.

Current `.env.local` setup:

```bash
CONTACT_TO=info@sanjitamhrzn.com
ENABLE_FORMSUBMIT_FALLBACK=true
API_EMAIL_DELIVERY=false
```

If you later get real SMTP credentials for `info@sanjitamhrzn.com`, you can fill in the SMTP values in `.env.local` for direct mailbox delivery.
