# Samiul Islam — Portfolio

[![QA](https://github.com/samiul501/MyPortfolio/actions/workflows/qa.yml/badge.svg)](https://github.com/samiul501/MyPortfolio/actions/workflows/qa.yml)

**Live:** https://samiul501.github.io/MyPortfolio/

Personal portfolio of Samiul Islam, Junior SQA Engineer at AKIJ iBOS Limited. Plain HTML, CSS and JavaScript with no build step, hosted on GitHub Pages.

## Tested like a product

Every push to `main` runs the **QA** workflow in GitHub Actions:

| Check | What it covers |
|---|---|
| **Playwright E2E** (`tests/portfolio.spec.js`) | 31 tests × 2 projects (Desktop Chrome, Pixel 7): page loads with no JS errors, all 8 sections, nav and scroll tracking, 20 project cards and filters, CV download, safe external links, social-preview tags, contact form (validation, success, failure fallback, honeypot), theme toggle, responsive layout, scroll reveal, and the motion layer (boot sequence, skip, reduced motion, smooth scroll, split text, timeline draw, custom cursor, card scan/click) |
| **Lighthouse CI** (`lighthouserc.json`) | Performance ≥ 85 (warn), Accessibility, Best Practices and SEO ≥ 95 (fail) |

Latest local audit (mobile): Performance 90 · Accessibility 100 · Best Practices 100 · SEO 100.

## Run locally

```bash
npm install
npx playwright install chromium   # CI uses Playwright's Chromium; locally the config uses installed Google Chrome
npm test                          # runs the suite against a local static server
npm run serve                     # http://localhost:4173
```

## Motion layer

`animations.js` + `animations.css`, loaded after the page with `defer`:

- Boot sequence (a terminal "test run" intro) — once per session, skippable, never for reduced motion or automated browsers (`?boot` forces it)
- Lenis smooth scroll (mouse/trackpad only) synced with GSAP ScrollTrigger
- SplitText headings, hero name entrance, decoding kickers, self-drawing experience timeline, parallax
- Custom cursor and magnetic buttons (fine pointers only), scan-line hover on project cards

GSAP 3.15 (free standard license) and Lenis 1.3 (MIT) are self-hosted in `vendor/`. To update them: `npm i -D gsap lenis` and copy the files from `node_modules/*/dist`.
If the scripts fail to load, the site still renders fully without motion.

## Notes

- After changing `style.css` or `script.js`, bump the `?v=N` in `index.html` so browsers don't keep the old file from cache.
- The contact form posts to Web3Forms (`api.web3forms.com`) and falls back to a `mailto:` link if the service fails.
