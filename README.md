# CyberXSolutions

The enterprise website for **CyberXSolutions Inc** — an AI-first technology company building
agentic AI, business automation and AI-powered security systems.

Twenty-seven pages, a hand-built design system, bespoke SVG illustration, and accessibility
and responsive gates that fail the build rather than the launch.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm start            # serve the production build
npm run typecheck    # tsc --noEmit
npm run qa           # typecheck + accessibility + responsive gates
```

Requires Node 20 or later.

---

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 15 (App Router) | Server components, static generation, first-class metadata |
| Language | TypeScript (strict) | Every content module is typed end to end |
| Styling | Tailwind CSS 3.4 + a custom token layer | Design decisions live in `tailwind.config.ts`, not in components |
| Fonts | Plus Jakarta Sans (display), Inter (body), JetBrains Mono | Self-hosted via `next/font`, zero layout shift |
| Motion | CSS transitions + one shared `IntersectionObserver` | No animation library; ~0 kB of motion JavaScript |
| Illustration | Hand-authored inline SVG + HTML | No stock photography, no image payload |

**Every page is statically prerendered.** First Load JS is ~103 kB shared plus 1–5 kB per route.

---

## Architecture

```
src/
├── app/                        One directory per route (27 pages + 2 dynamic segments)
│   ├── layout.tsx              Fonts, global metadata, Organization + WebSite JSON-LD
│   ├── globals.css             Design tokens, glass, aurora, motion primitives
│   ├── api/contact/route.ts    Validated contact endpoint
│   ├── sitemap.ts robots.ts manifest.ts
│   └── …
├── components/
│   ├── ui/                     Primitives: Button, Icon, Section, Reveal, Counter, Accordion…
│   ├── sections/               Composable page sections: PageHero, CTA, FAQ, Blocks
│   ├── layout/                 Header (mega menu), Footer, Logo
│   ├── visuals/                Bespoke SVG/HTML illustration: HeroConsole, Diagrams, Mockups, Panels
│   └── templates/              ServicePage, LegalPage — the shapes reused across many routes
├── content/                    All copy. Typed, no CMS required, trivially portable to one
│   ├── site.ts                 Company details, navigation, route registry
│   ├── company.ts              Mission, vision, values, story, philosophies, roadmap
│   ├── services/               Ten service definitions (copy, stats, FAQs, pricing, stack)
│   ├── industries.ts caseStudies.ts technologies.ts insights.ts people.ts social.ts legal.ts
└── lib/                        seo.ts (metadata), schema.ts (JSON-LD), observer.ts, utils.ts
```

### Content is data, not markup

Every page reads from `src/content/*`. Changing a statistic, a FAQ answer or a service
description means editing one typed object — no JSX, no risk of breaking layout. Adding an
eleventh service is a new entry in `src/content/services/` plus a four-line route file.

If you later move to a CMS, the content modules are the schema you already have.

---

## Design system

Tokens live in `tailwind.config.ts` and `src/app/globals.css`.

- **Colour** — white canvas, `brand` blue through violet to pink, with cyan / emerald /
  indigo / sunset / blossom accents. `ink-400` and `ink-500` are tuned to clear 4.5:1 on
  white, so muted captions stay WCAG AA.
- **Type** — a fluid `clamp()` scale (`text-display-2xl` … `text-eyebrow`). Headlines resize
  with the viewport rather than stepping at breakpoints.
- **Depth** — layered shadows (`shadow-lift*`), never a single flat blur. Glass surfaces use
  `.glass` / `.glass-strong`; navigation panels use `.surface-menu`, which keeps the blur but
  drops the transparency so page content never reads through a menu.
- **Motion** — one house easing curve (`ease-smooth`). Scroll reveals run through a single
  shared `IntersectionObserver` (`src/lib/observer.ts`), so a page with 60 animated elements
  still has one observer.

### Reduced motion

`globals.css` collapses every animation and transition under
`@media (prefers-reduced-motion: reduce)`, and `Reveal`, `Counter` and `ParallaxTilt` each
check the preference in JavaScript before doing any work.

---

## Accessibility

WCAG 2.2 AA is the floor, verified rather than asserted:

- `npm run qa:a11y` runs axe-core over all 31 routes and **exits non-zero on any violation**.
  Current state: zero violations.
- Single `<h1>` per page, ordered headings, landmarks that do not nest.
- Visible focus ring on every interactive element; a skip link ahead of the header.
- Mega menu and mobile drawer support keyboard operation, `aria-expanded`, Escape to close,
  and `inert` on closed panels so hidden links stay out of the tab order.
- Animated counters keep the exact figure in the DOM for assistive technology and crawlers.

## Responsive

`npm run qa:responsive` loads all 31 routes at 320 / 390 / 768 / 1024 / 1280 / 1920 px and
fails on horizontal overflow or any runtime error. Current state: clean across all 186
combinations.

## SEO

- Per-page `title`, `description`, `keywords`, canonical URL, Open Graph and Twitter cards
  via `src/lib/seo.ts`.
- JSON-LD via `src/lib/schema.ts`: `Organization`, `WebSite`, `Service`, `BreadcrumbList`,
  `FAQPage`, `Article`, `CollectionPage`.
- `sitemap.xml`, `robots.txt`, a human-readable `/sitemap` page, and dense internal linking
  (every page carries a "Keep exploring" rail).
- Security headers are set in `next.config.mjs`.

---

## Contact form

`POST /api/contact` validates input server-side (with a honeypot for bots) and forwards the
enquiry to `CONTACT_WEBHOOK_URL`.

**Until that variable is set the endpoint returns 503** with a message directing the visitor
to email instead — it will never accept a submission that goes nowhere. Point it at a Slack
webhook, a CRM intake, an email relay (Resend, Postmark, SendGrid) or an automation platform.

See `.env.example`.

---

## Deployment

Any platform that runs Next.js works. Vercel is the shortest path:

1. Import the repository.
2. Set `CONTACT_WEBHOOK_URL`.
3. Deploy — everything except `/api/contact` prerenders as static HTML.

For a self-hosted target, `npm run build && npm start` behind a reverse proxy is sufficient.
Set `site.url` in `src/content/site.ts` if the production domain ever changes; canonical URLs,
the sitemap and JSON-LD all derive from it.

---

## Before launch

See **[CONTENT-CHECKLIST.md](./CONTENT-CHECKLIST.md)** — the site ships with realistic
illustrative figures, anonymised client references and placeholder social handles that must be
replaced with verified content before it goes live.
