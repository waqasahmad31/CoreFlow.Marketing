# CoreFlow Marketing Site

The public marketing website for **CoreFlow** — a business ERP (CRM, Inventory, Sales,
Procurement, Finance, Approvals) built for growing SMEs in both local (Pakistan/regional) and
international markets.

This is a standalone static site, intentionally separate from the authenticated product
application (`CoreFlow.Angular`, locked as the sole product frontend per `ADR-0008`). It does not
depend on, and is not depended on by, `CoreFlow.Api` or `CoreFlow.Angular` — it only links out to
the app's login/signup URL. See `04 - CoreFlow_Brand_GTM_Prompts/README.md` in the main CoreFlow
workspace for the architecture decision behind this separation.

## Overview

| | |
|---|---|
| **Framework** | [Astro](https://astro.build) — static output, server-rendered HTML for SEO and fast first paint |
| **Language** | TypeScript (strict) |
| **Styling** | Plain CSS with a token system — no framework dependency |
| **Hosting** | Netlify (free tier) |
| **Forms** | Netlify Forms (free, no separate backend) |
| **Analytics** | Cloudflare Web Analytics (free, cookie-less) |
| **Brand source of truth** | `04 - CoreFlow_Brand_GTM_Prompts/Assets/tokens.json` — Direction A ("Threshold"), locked |

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
src/
├── layouts/
│   └── Layout.astro       # Shared shell: meta/OG tags, Google Fonts, analytics, header/footer
├── components/
│   ├── Header.astro       # Site navigation + primary CTA
│   └── Footer.astro       # Site footer, legal links
├── pages/
│   ├── index.astro        # Home / landing page
│   ├── features.astro     # Capabilities by business function
│   ├── pricing.astro      # Pricing model (no published numbers — see Status)
│   ├── roi-calculator.astro  # Interactive savings estimator
│   ├── case-studies.astro # Case study template (populated only with real, permissioned content)
│   ├── about.astro        # Company info + consultation-request form
│   ├── thank-you.astro    # Post-submission confirmation
│   └── legal/
│       ├── privacy.astro
│       └── terms.astro
├── styles/
│   └── tokens.css         # Brand color/type tokens — light + dark, prefers-color-scheme aware
public/
├── images/                 # Logo and banner assets, sourced from the brand kit
├── favicon.svg
└── robots.txt
```

## Brand system

Colors, typography, and the logo mark are all sourced from the locked brand kit and applied
through CSS custom properties in `src/styles/tokens.css` — no ad-hoc colors or fonts are
introduced anywhere on the site. See `04 - CoreFlow_Brand_GTM_Prompts/Assets/Brand-Usage-Guidelines.md`
for usage rules if extending the design.

## Deployment

Hosting: **Netlify**. Forms: **Netlify Forms** (built in, activates automatically on deploy).
Analytics: **Cloudflare Web Analytics**.

1. Push this repository to GitHub (done) and connect it in Netlify: **Add new site → Import an
   existing project**. `netlify.toml` already defines the build command and publish directory —
   no further configuration is required.
2. The consultation-request form (`src/pages/about.astro`) starts working the moment the site
   deploys on Netlify — submissions appear under the Forms tab in the Netlify dashboard.
3. Point a production domain at the Netlify site once one is registered, then update `site` in
   `astro.config.mjs` — canonical URLs and Open Graph tags follow automatically.
4. Create a free Cloudflare Web Analytics account, register this site (no DNS change required —
   it's a JS beacon), and replace `REPLACE_WITH_REAL_TOKEN` in `src/layouts/Layout.astro` with
   the real beacon token.

## Status

| Area | Status |
|---|---|
| Pages (home, features, pricing, ROI calculator, case studies, about, legal) | ✅ Built |
| Brand kit applied consistently | ✅ Done |
| Accessibility baseline (semantic HTML, alt text, contrast, keyboard nav) | ✅ Done |
| ROI calculator (Phase 3) | ✅ Live — real-time, conservative 40% assumption, disclosed inline |
| Lighthouse / performance audit | ⚠️ Not yet measured — run before going live |
| Analytics wired to a real account | ⚠️ Placeholder token — needs a Cloudflare account |
| Consultation form wired to a real deploy | ⚠️ Activates automatically once live on Netlify |
| Legal pages reviewed by owner | ⚠️ Pending — see inline notices in `privacy.astro` / `terms.astro` |
| Deployed with a production domain | ❌ Not yet |
| Logo raster (PNG) exports | ❌ Not yet — SVGs only; not required by this site, but outstanding for other channels |

**Deliberately not done, by design — not oversights:**
- No pricing numbers are published (only the pricing *model*) — specific numbers need explicit
  owner sign-off.
- No case studies, customer logos, or testimonials appear anywhere — none exist yet with real
  permission, and none will be fabricated.

## License

Proprietary — © CoreFlow. All rights reserved.
