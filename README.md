# Snow Creator Studio — Web

The complete source for the browser version. Plain HTML, CSS and JavaScript; no Python, framework, CDN, or build step.

## Run locally

Install Node.js 18 or newer. Open a terminal in this folder:

```sh
npm start
```

Open http://127.0.0.1:4173/ in your browser. No `npm install` is needed; there are no external dependencies. Use a web server rather than double-clicking index.html because the app uses JavaScript modules.

```sh
npm test
```

## Add to Git

See **GIT_SETUP.md** for commands for new and existing repositories.

## Project layout

- `dist/index.html` — markup
- `dist/styles.css` — styling and responsive layout
- `dist/app.js` — controls, text/PNG editing, dragging, scene saving, presentation and exports
- `dist/engine.js` — simulation, accumulation, presets and validation
- `dist/icon.svg` — app icon
- `tests/engine.test.js` — automated tests
- `scripts/serve.mjs` — dependency-free local server
- `VALIDATION.md` — verification results and remaining checks

**Keep `dist/` in Git.** It contains editable source, not disposable build output.

## Deploy on your website

Publish the **contents of `dist/`** on static HTTPS hosting. No build command is required. Relative assets support a subdirectory, too. The local server is for development only.

On your own hosting, the editor does not require ChatGPT login. The private review site's sign-in screen belongs to its hosting access settings, not this code.

## Features

Three presets, Random, immediate sliders, up to ten draggable text/PNG layers, never-melt or gradual melt, buildup controls, local draft autosave, named scenes, scene file import/export, PNG capture, video recording, and fullscreen with an in-page fallback.

Data stays in the browser's IndexedDB. Clearing site data removes saved scenes. Export a scene file to back up a design. Saved scenes retain configuration, not accumulated snow. Video formats and fullscreen support depend on the browser.

## Payment integration is not included

This is the complete editor source, not a payment platform. Charging $9.99 requires a payment provider/account, chosen currency, server-side payment verification and customer access controls. No checkout secrets or fake payment links are included.

The package excludes Git history, credentials, and platform-specific project identity. SOURCE_VERSION.txt identifies the original source commit.
