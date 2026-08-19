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

## 3. Environment variables (only if you've set up the EmailJS contact form)

In the same "Setup Node.js App" screen there's an **Environment Variables** section. Add:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** because these are `NEXT_PUBLIC_*` variables, Next.js bakes them into the built
JavaScript at **build time**, not read at runtime. Set them here *before* you run `npm run build`
in step 5. If you add/change them later, you must rebuild (step 5) and restart (step 6) again.

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
- **Contact form says "not configured yet"** — the `NEXT_PUBLIC_EMAILJS_*` env vars weren't set
  before the last build. Set them in step 3, rebuild, restart.
- **Node version errors during install/build** — this project needs Node ≥ 20.9. If cPanel only
  offers older versions, ask babbal.host support to add a newer Node.js version to the selector.
