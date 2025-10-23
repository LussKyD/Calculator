# DRACO iNC Calculator — Web-first (Windows & Android wrappers)

Small, clean calculator web app that displays current time & date and is ready for cloud testing via **GitHub Pages**. It is intentionally web-first so you can test in the browser, then wrap for desktop/mobile.

## Contents
- `index.html` — app shell
- `assets/css/style.css`
- `assets/js/app.js`
- `electron-main.js` — Electron entry (Windows)
- `package.json` — contains scripts for Electron & web
- `capacitor.config.json` — minimal config for Capacitor
- `.github/workflows/pages.yml` — GitHub Actions to deploy to GitHub Pages

## Quick start — test in browser
1. Open `index.html` in a browser (double-click or use a local static server).
2. Or serve locally: `npx http-server .` (install http-server globally if needed).

## GitHub Pages (cloud-ready)
1. Create a repo on GitHub and push this folder.
2. Ensure the `main` branch is configured for GitHub Pages or use the workflow provided in `.github/workflows/pages.yml`.

## Wrap for Windows (Electron)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run Electron (dev):
   ```bash
   npm run electron
   ```
3. Package for Windows using a packager like `electron-packager` or `electron-builder` (not included). See electron-builder docs.

## Wrap for Android (Capacitor)
1. Install Capacitor and initialize:
   ```bash
   npm install @capacitor/cli @capacitor/core
   npx cap init draco-calculator com.draco.calculator
   ```
2. Add Android platform:
   ```bash
   npx cap add android
   ```
3. Build web assets and copy:
   ```bash
   npm run build    # or ensure index.html and assets are ready
   npx cap copy
   npx cap open android
   ```

## Notes & security
- The calculator uses a light eval pattern for expressions; it's sanitized to accept only digits, operators and parentheses. Do not paste untrusted code.
- Feel free to extend: add history, theming, scientific mode, camera math capture, or i18n.

## License
MIT — DRACO iNC Techs
