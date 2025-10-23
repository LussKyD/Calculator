# DRACO iNC Calculator — Web-first (Windows & Android wrappers)

 calculator web app that displays current time & date and is ready for cloud testing via **GitHub Pages**. It is intentionally web-first so you can test in the browser, then wrap for desktop/mobile.

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


## Notes & security
- The calculator uses a light eval pattern for expressions; it's sanitized to accept only digits, operators and parentheses. Do not paste untrusted code.
- Feel free to extend: add history, theming, scientific mode, camera math capture, or i18n.

## License
MIT — DRACO iNC Techs
