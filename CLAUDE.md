@AGENTS.md

# MindCherry website — session handoff

This file is checked-in project context for both humans and Claude. The
top line above pulls in `AGENTS.md` (Next.js 16 agent rules). Everything
below is the project-specific scope and state.

## What this is

A complete rebuild of `mindcherry.com` — moving from a dated WordPress
site to a Next.js 16 + Tailwind v4 + Sanity CMS marketing site. The brief:
**"WOW WHAT AN AMAZING WEBSITE" — modern, SEO-friendly, editorial.**

The agency: MindCherry, a small Pakistan-based software house (Lahore,
seven people, est. 2018). Founding engineer is **Adeel**. Real services
are **Custom Software & MVP Development**, **Architecture & Design**,
**Software Consultancy**. Real case studies are **Arcadia** (real-estate
classifieds) and **Mindwell** (HIPAA telehealth). Real testimonials are
from Oscar R. and Kurt Schmidt, both referencing Adeel.

The previous WordPress site is preserved in `previousweb/` for content
reference — do not delete; it's the source of truth for copy, the logo
SVG, and the actual positioning the brand uses.

## Stack and conventions

- **Next.js 16.2.4** with App Router and Turbopack. **Read the bundled
  docs in `node_modules/next/dist/docs/` before writing Next-specific
  code** — APIs differ from training data.
- **Tailwind v4** via `@tailwindcss/postcss`. Theme is in CSS via
  `@theme { ... }` in `app/globals.css` — there is **no
  `tailwind.config.ts`** (deliberately deleted).
- **Sanity CMS** for the blog. Embedded studio at `/studio`; falls back
  to a friendly setup guide when `NEXT_PUBLIC_SANITY_PROJECT_ID` is unset.
- **Pexels API** for image sourcing. Key in `.env` as `PEXEL_API_KEY`
  (typo of canonical `PEXELS_API_KEY` — `.env.example` documents the
  rename if you want to adopt the canonical name).
- Fonts: **Fraunces** (variable serif, opsz axis only — italic too) +
  **Instrument Sans** (400/500) + **JetBrains Mono** (400). All via
  `next/font/google`. Fraunces uses `display: 'optional'` for LCP.

## Design system (locked — do not drift)

Defined in `app/globals.css` `@theme` block.

```
--color-ink           #0B0B0F   near-black text
--color-paper         #F5F2EA   warm cream — the editorial base
--color-paper-deep    #ECE7DA   layered card / muted band
--color-bone          #E6E0D4   inset surface (process stage etc.)
--color-ash           #5A5648   muted body text on paper (AA-passing)
--color-ash-soft      #807B6C   secondary mute (AA on paper)
--color-cherry        #E91E46   brand red — fills, decoration only
--color-cherry-text   #B8112F   USE FOR TEXT on paper (4.7:1)
--color-cherry-deep   #960B27   pressed / hover-deep
--color-moss          #2A3D2F   sparing secondary accent
```

Type scale uses `clamp()` fluid sizes (`--text-xs` … `--text-7xl`).
Decorative motifs: editorial `eyebrow`, `mono-chip`, `live-dot`,
`marquee-track`, `kinetic-word` — all in `globals.css`.

Animation keyframes are **transform/opacity only** (no `filter:`) so
they stay composited.

## Scope — what was done

- [x] Redesigned **homepage** (`app/page.tsx`) with the editorial
      direction agreed in brainstorm: kinetic morph headline + sticky
      scroll-tied process + nine other sections (`components/home/*`).
- [x] Rewrote **navbar** + **footer** (`components/Navbar.tsx`,
      `components/Footer.tsx`) with the new SVG `Wordmark` component.
- [x] Set up **Sanity CMS** end-to-end: schemas (`sanity/schemas/`),
      `sanity.config.ts`, `next-sanity` studio at `/studio`, lazy
      proxy client that doesn't throw at import-time, safe queries
      with fallbacks.
- [x] Replaced placeholder `lib/data/*` with the **real previous-site
      content**: services, case studies, testimonials, principles, team.
- [x] Pulled **17 carefully picked Pexels images** to `public/images/`
      with attribution at `public/images/ATTRIBUTION.json`. Avoided
      stock cliches (no handshakes, no laptop-pointing, no fake teams).
- [x] Redesigned all remaining pages: `/about`, `/services`,
      `/portfolio`, `/contact`, `/blog`, `/blog/[slug]`. Same locked
      design system; each page has its own personality within it.
- [x] Security headers wired into `next.config.ts` (CSP, HSTS, COOP,
      Permissions-Policy). Studio route gets a looser CSP.
- [x] Animations made composited; opacity-reduced text mostly cleaned
      up for WCAG AA.

## Scope — what remains

- [ ] **Lighthouse Performance to 100/100 under default throttling.**
      We deferred this. Current state with Lighthouse default Slow-4G
      + 4× CPU: ~78 perf, 96 a11y, 100 best-practices, 100 SEO. With
      `--throttling-method=provided`: **100 perf** (page is genuinely
      fast). The remaining LCP cost is the Fraunces font + the kinetic
      headline animation. Trade-offs documented when we resume.
- [ ] **Real Sanity project ID** — set
      `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`, then visit
      `/studio` to publish the real blog posts. Blog index falls back
      to placeholders meanwhile.
- [ ] **Real team headshots / bios** — `lib/data/team.ts` currently
      uses anonymous-by-role names (Adeel + six roles). Swap when
      ready. Or move to Sanity `author` schema.
- [ ] **Real case-study imagery** — Arcadia and Mindwell currently
      show atmospheric Pexels stand-ins. Replace with actual product
      screenshots when available.
- [ ] **Other pages** that may be desired later: privacy/terms (footer
      links exist but routes don't), 404 page styling, loading.tsx.

## Known gotchas

- **WSL vs Windows**: project files live on the Windows filesystem
  (`/mnt/c/...`) but `npm install` was run from WSL. **Switching shells
  may invalidate the binaries.** If `next` or `lightningcss` complain
  about missing native modules, reinstall in the shell you're using:
  `rm -rf node_modules && npm install`. The `lightningcss-linux-x64-gnu`
  optional dep was already missing once and had to be re-installed
  manually.
- **Turbopack route cache**: when adding new files (especially new
  routes or `@layer` rules), HMR sometimes serves stale CSS — restart
  with `rm -rf .next && npm run dev`.
- **`@layer base { … }`**: any custom CSS for `html`/`body`/`a` MUST be
  inside `@layer base` so Tailwind utilities (in `@layer utilities`)
  can win the cascade. Unlayered rules silently beat utilities. Bug
  was hit twice — see `globals.css` comment.
- **`require-trusted-types-for 'script'`** in CSP breaks Next's
  runtime chunk loading. We removed it; do not re-add until Next has
  first-class Trusted Types support.
- **Sanity Studio route**: `app/studio/[[...tool]]/page.tsx` must NOT
  be a client component directly — wrap a server `page.tsx` around a
  client `StudioClient.tsx`, otherwise Turbopack returns 404 on
  `/studio` (Next 16 quirk). See current implementation.

## Quick start (next session)

```bash
# Cold start (after a git clone or a node_modules wipe)
npm install
npm run dev          # http://localhost:3000

# Production-build verify (the one that matters)
npm run build && npm run start

# Type-check
npm run type-check
```

Pages: `/`, `/about`, `/services`, `/portfolio`, `/contact`, `/blog`,
`/blog/[slug]`, `/studio` (when env is set).

## Useful files map

```
app/
  layout.tsx                  Fonts + metadata + paper noise
  globals.css                 @theme tokens + base + utilities
  page.tsx                    Homepage assembly
  about/page.tsx              Studio page
  services/page.tsx           Engagements deep-dive
  portfolio/page.tsx          Selected work (Arcadia + Mindwell)
  contact/page.tsx            Editorial split + form
  blog/page.tsx               Journal index (SSR + Sanity)
  blog/[slug]/page.tsx        Magazine reading layout
  studio/[[...tool]]/page.tsx Sanity Studio embed
components/
  Wordmark.tsx                Brand SVG component
  Navbar.tsx, Footer.tsx      Site chrome
  ContactForm.tsx             Client form for /contact
  BlogIndex.tsx               Client search/filter for /blog
  PortableTextRenderer.tsx    Editorial Sanity body renderer
  home/*.tsx                  9 homepage sections
lib/data/                     Real content (services, work, team, etc.)
sanity/                       Client + queries + schemas
next.config.ts                Image hosts + security headers + CSP
.env / .env.example           Pexels key + Sanity vars (latter unset)
public/images/ATTRIBUTION.json  Pexels photographer credits
previousweb/                  The old WordPress site — content reference
```

## User preferences observed

- **Direct, concise answers.** Skip long preambles.
- **Don't pinball between rebuilds when stuck.** Stop, summarize the
  trade-offs, let the user pick a direction. Lighthouse performance
  push was the failure mode — we kept rebuilding without aligning.
- Works from PowerShell on Windows by default; WSL is available too.
  Always confirm shell when sharing CLI snippets.
- Wants real positioning, not placeholder content. Replaced the
  generic 6-service / 6-case-study stubs the previous developer left
  with the actual previousweb material on day one.

## Resuming tomorrow — recommended order

1. Pick up the **Lighthouse 100/100** push if that's still wanted —
   the blocker is LCP under throttle. Trade-off options A/B/C are
   captured in the chat history; ask the user which to take before
   coding.
2. Otherwise, tackle the open items above (Sanity project ID, team
   headshots, real case-study imagery), which are all content-level.
3. The design system is **locked**. New pages should reuse the
   `eyebrow`, `mono-chip`, headline grid pattern, and the cream/ink/
   cherry palette. Don't reach for new fonts or colours.
