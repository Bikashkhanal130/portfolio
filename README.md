# Bikash Khanal — Portfolio

A personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Includes a working
contact form (powered by EmailJS) that emails messages directly to you — no backend server
needed.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All text content (name, contact info, experience, projects, skills, certifications) lives in
one place: [`lib/data.ts`](lib/data.ts). Edit that file to update the site — you shouldn't need
to touch the components for content changes.

Two things to fill in there before you go live:

- `profile.github` and `profile.linkedin` — currently placeholders, replace with your real URLs.
- Each project's `codeHref` / `liveHref` — add real repo and live-demo links as they're ready.

## Setting up the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages straight to your
inbox from the browser, with no backend required.

1. Create a free account at https://www.emailjs.com/.
2. Add an **Email Service** (e.g. connect your Gmail — `Khanalbk18@gmail.com`) and note the
   **Service ID**.
3. Create an **Email Template** with `name`, `email`, `subject`, and `message` variables
   matching the form fields in [`components/Contact.tsx`](components/Contact.tsx), and note the
   **Template ID**.
4. Grab your **Public Key** from Account → API Keys.
5. Copy `.env.local.example` to `.env.local` and fill in the three values:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server. Until these are set, submitting the form shows a friendly
   "not configured yet" message instead of failing silently.

If you deploy to Vercel/Netlify, add the same three variables in the project's environment
variable settings.

## Deploying

The easiest option is [Vercel](https://vercel.com/new) — import this repo, add the three
`NEXT_PUBLIC_EMAILJS_*` environment variables, and deploy. Any host that supports Next.js
(Netlify, your own server, etc.) works too.
