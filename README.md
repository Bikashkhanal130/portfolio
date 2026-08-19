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

Each project's `liveHref` is still empty — add a live-demo link per project as they go online.

## Setting up the contact form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages straight to your
inbox from the browser, with no backend required.

1. Create a free account at https://www.emailjs.com/.
2. Add an **Email Service** (e.g. connect your Gmail — `bikashkhanal.official1@gmail.com`) and
   note the **Service ID**.
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

**To babbal.host (cPanel "Setup Node.js App"):** see [DEPLOY.md](DEPLOY.md) for the full
step-by-step guide. This repo includes a [`server.js`](server.js) built specifically for that
setup (cPanel's Node.js Selector runs on Phusion Passenger, which needs a custom server entry
point rather than the default `next start`).

Any other Node.js host works the same way: `npm install`, set the `NEXT_PUBLIC_EMAILJS_*` env
vars, `npm run build`, then `npm run start`. [Vercel](https://vercel.com/new) is the simplest
option if you'd rather not manage a server at all — import the repo, add the three env vars, and
deploy.
