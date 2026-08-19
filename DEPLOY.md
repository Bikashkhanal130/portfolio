# Deploying to babbal.host (cPanel "Setup Node.js App")

This project ships with a small custom server ([`server.js`](server.js)) that's built specifically
for cPanel's Node.js Selector (Phusion Passenger) — this is the standard way to run a Next.js app
on shared/cPanel hosting. `npm run build` + `npm run start` (which runs `node server.js`) is exactly
what Passenger will run.

## 1. Get the code onto the server

Pick whichever your cPanel offers:

**Option A — cPanel "Git Version Control" (easiest, and keeps future updates a one-click "Pull")**
1. cPanel → *Git Version Control* → *Create*.
2. Clone URL: `https://github.com/Bikashkhanal130/portfolio.git`
3. Repository Path: pick a folder **outside** `public_html`, e.g. `/home/yourusername/portfolio`.

**Option B — manual upload**
1. On GitHub, download the repo as a ZIP (Code → Download ZIP).
2. cPanel → *File Manager* → upload the ZIP into a folder outside `public_html` (e.g. `portfolio`) → Extract.

## 2. Create the Node.js App

cPanel → **Setup Node.js App** → *Create Application*:

| Field | Value |
|---|---|
| Node.js version | **20.x or newer** (this project requires Node ≥ 20.9) |
| Application mode | Production |
| Application root | the folder from step 1, e.g. `portfolio` |
| Application URL | your domain or subdomain (e.g. `bikashkhanal1.com.np`) |
| Application startup file | `server.js` |

Don't click Create yet if you plan to set environment variables — see step 3 first (or add them
after and just rebuild).

## 3. Environment variables (for the contact form to actually send email)

The contact form is handled entirely by your own server — a Next.js API route
([`app/api/contact/route.ts`](app/api/contact/route.ts)) sends mail via Gmail SMTP using
[Nodemailer](https://nodemailer.com/). No third-party service, no signup, no paid plan.

**Get a Gmail App Password first** (takes 2 minutes, completely free):
1. On the Gmail account you want to send from (e.g. `bikashkhanal.official1@gmail.com`), turn on
   **2-Step Verification**: https://myaccount.google.com/security
2. Then go to **App Passwords**: https://myaccount.google.com/apppasswords
3. Create one (name it anything, e.g. "Portfolio Contact Form") — Google gives you a 16-character
   password. Copy it.

In the "Setup Node.js App" screen there's an **Environment Variables** section. Add:

```
SMTP_USER=bikashkhanal.official1@gmail.com
SMTP_APP_PASSWORD=the_16_character_app_password
CONTACT_TO_EMAIL=bikashkhanal.official1@gmail.com
```

(`CONTACT_TO_EMAIL` is where messages get delivered — same address as `SMTP_USER` unless you want
them sent to a different inbox.)

Unlike the old EmailJS setup, these are **server-only** variables (no `NEXT_PUBLIC_` prefix), so
they're read at runtime, not baked in at build time — you can add or change them any time and just
**Restart** the app (no rebuild needed).

Click **Create**.

## 4. Install dependencies

On the app's page in cPanel, click **Run NPM Install**. This installs everything from
`package.json` (Next.js, React, framer-motion, etc.) into the app's own isolated Node environment.

## 5. Build the app

cPanel's UI doesn't have a "run build" button, so this step needs a terminal. Most cPanel accounts
have one under **Terminal** in the sidebar. If yours doesn't, ask babbal.host support to enable it
(it's a standard cPanel feature).

The "Setup Node.js App" page shows a command like this near the top (copy the exact one shown for
your app — the path and Node version number will match your setup):

```bash
source /home/yourusername/nodevenv/portfolio/20/bin/activate && cd /home/yourusername/portfolio
```

Run that, then:

```bash
npm run build
```

This produces the `.next` production build that `server.js` serves.

## 6. Restart

Back on the "Setup Node.js App" page, click **Restart**. Then open your Application URL — the
site should load.

## Updating the site later

1. Pull the latest code:
   - Git Version Control: click **Pull** (or `git pull` in Terminal inside the app folder).
   - Manual: re-upload and re-extract the changed files.
2. If `package.json` changed: **Run NPM Install** again.
3. Rebuild: `npm run build` (in the activated terminal, as in step 5).
4. **Restart** the app.

## Troubleshooting

- **App won't start / "Application root does not contain server.js"** — double-check the
  Application startup file is exactly `server.js` and the Application root points at the folder
  containing it.
- **Blank page or old content after a change** — you likely skipped the rebuild step. `git pull`
  alone does not rebuild; you must run `npm run build` and then **Restart**.
- **Contact form says "not configured yet"** — `SMTP_USER` / `SMTP_APP_PASSWORD` aren't set. Add
  them (step 3) and **Restart** (no rebuild needed, they're read at runtime).
- **Contact form fails with an auth error** — double-check you used an **App Password**, not your
  regular Gmail password (Gmail rejects normal passwords for SMTP). Regenerate one at
  https://myaccount.google.com/apppasswords if needed.
- **Node version errors during install/build** — this project needs Node ≥ 20.9. If cPanel only
  offers older versions, ask babbal.host support to add a newer Node.js version to the selector.
