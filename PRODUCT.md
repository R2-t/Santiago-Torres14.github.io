# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and employers screening Santiago Torres Aragon for senior software
engineering roles. They arrive from a CV, LinkedIn, or GitHub link and decide in seconds
whether to make contact.

Secondary (site direction): prospective consulting clients evaluating whether to hire him.
The user stated the site should ultimately be a personal brand / landing surface for
consulting work, while the primary visitor remains the recruiter. When the two audiences
conflict, the recruiting visitor wins the first viewport.

No other audience is confirmed. Peers and readers of future blog posts are assumed, not
established.

## Product Purpose

A personal site at santiagotorres.me that presents who Santiago is, what he has actually
shipped, and how to reach him. Success = a visitor forms an accurate, strong impression of
his seniority and range, and contacts him.

Requested direction of travel (user's words): redesign the page to have a blog and show off
future projects. Today both are unbuilt placeholders.

## Positioning

Depth of real production systems, told plainly: Rust and Python services at scale (Dynata,
EPAM, Mercado Libre), plus the entrepreneurial framing in his own position line. The
differentiator is verifiable engineering history in `src/data/personal-info.ts`, not claims.

## Operating Context

Static Astro 5 + Tailwind 4 site, deployed to GitHub Pages (`CNAME`, `_config.yml`) and
served at https://santiagotorres.me/. All person data lives in one module,
`src/data/personal-info.ts`, imported by the pages. Existing routes: `/` (CV card layout),
`/linktree` (empty stub), `/blog` (empty file). Dev: `pnpm dev`. Build: `pnpm build`
(runs `astro check` + `tsc --noEmit`). No tests, no CI config found, no backend, no CMS.

## Capabilities and Constraints

- Content is hand-authored TypeScript constants; there is no content pipeline, frontmatter
  collection, or admin. A blog needs a real mechanism (Markdown collection or equivalent)
  before any post can exist.
- Projects to showcase do not exist yet as written-up work. Any project area must handle an
  empty or forthcoming state honestly rather than filling it.
- Hosting is GitHub Pages: static output only, no server-side rendering requirements, no
  database, no auth.
- English-language site today; no i18n machinery. Spanish is plausible (Bogotá-based) but
  was not established.
- Deliberately undecided, asked and unanswered: which durable rules future work must never
  break. Nothing here is invented to fill that answer.
- Open decision: whether `/linktree` stays, gets folded into the main page, or goes.
- Open decision: whether hiring status ("open to work", consulting availability) is stated
  on the site. Not currently claimed anywhere; do not add it without confirmation.

## Brand Commitments

- Name as authored: "Santiago Torres Aragon"; position line as authored: "Entrepreneur -
  Senior Software Engineer".
- Real contact assets: contact@santiagotorres.me, github.com/R2-t, LinkedIn profile URL,
  location "Bogotá, Colombia". One photograph on hand:
  `public/images/IMG_PROFILE.JPG`.
- Incumbent visual identity (evidence, not a pinned brief): navy `#153448`, beige `#dfd0b8`,
  white, black; Arial body type; grey-200 page background with card panels. A redesign may
  replace this look; the name, copy facts, and links stay.
- Voice in existing copy is direct, technical, first-person-free résumé prose.

## Evidence on Hand

- Five real roles with detailed bullets and named technologies: EPAM Systems, Dynata,
  Mercado Libre, TechGenies, Casurid (`src/data/personal-info.ts`).
- Summary description paragraph (~4 years experience, distributed systems, real-time data,
  AWS/Kubernetes, SQL/NoSQL) — same file.
- Profile photo: `public/images/IMG_PROFILE.JPG`.
- Absences that future work must not fabricate: no blog posts, no project case studies,
  screenshots or repos beyond the CV text, no testimonials, no client logos, no metrics or
  awards outside the CV bullets, no pricing or availability statement. Also missing:
  `/favicon.svg` is referenced by the layout but does not exist in `public/`.

## Product Principles

1. A recruiter's six-second pass decides the layout; depth comes after the signal, not before.
2. Every claim on the site traces to something in `personal-info.ts` or to work Santiago
   actually supplies. Placeholder beats invented.
3. The blog ships as a working mechanism with zero posts, not as decorative "article" cards.
4. One source of truth for personal data; presentation changes, the data module stays.
5. Consulting positioning is built from demonstrated engineering range, not from marketing
   assertions.

## Accessibility & Inclusion

No product-specific requirement was established. Baseline applies: readable body text,
sufficient contrast, keyboard-navigable links, meaningful alt text on the profile photo.
