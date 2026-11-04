# Product Backlog — Celebration In A Box

**Status:** Initial scaffolding. Stack: Astro 5 + React 19 + Tailwind 3 (via `@astrojs/tailwind`).

**Goal:** Get the site working end-to-end locally and on GitHub Pages (base path `/CelebrationInABox_Website`), with working navigation, styles, and conversion flow.

**Working rule:** Fix one epic at a time. Each item below should land in its own small PR/commit. Do not batch epics.

---

## Priority legend
- **P0** — blocks everything else / site is broken without it
- **P1** — core functionality / visible defect
- **P2** — polish / non-blocking
- **P3** — nice-to-have

## Sprint 0 — Stop the bleeding (do first)

### Epic: Repo hygiene
- [x] **BL-01 (P0)** Removed stray `dark-disk/` folder.
- [x] **BL-02 (P0)** `.gitignore` covers `dist/`, `.astro/`, `node_modules/`.
- [x] **BL-03 (P2)** `dist/` is not tracked (`git ls-files dist` empty).
- [ ] **BL-04 (P3)** Update `CLAUDE.md` "Current State" once an epic ships (keep docs honest).

---

## Sprint 1 — Environment & deployment parity

### Epic: Base-path & config consistency
- [x] **BL-05 (P0)** `astro.config.mjs` `base` reverted to `/CelebrationInABox_Website`.
- [ ] **BL-06 (P0)** Set `site` to the real GitHub Pages URL once known (currently `https://your-username.github.io`).
- [x] **BL-07 (P0)** `SITE_CONFIG.basePath` now derives from `import.meta.env.BASE_URL` (handles / and /CelebrationInABox_Website/).
- [x] **BL-08 (P0)** Hardcoded `/CelebrationInABox_Website/` strings in `CelebrationFlow.jsx` back links replaced with base-aware `BACK_HREF`; `Gateway.jsx` uses `SITE_CONFIG.basePath`.
- [x] **BL-09 (P1)** `npm run build -- --base /CelebrationInABox_Website` succeeds; asset URLs and gateway links are correctly prefixed.
- [ ] **BL-10 (P1)** Add a smoke check in CI (build succeeds) — already present; consider adding `astro check`.

Acceptance: `npm run build -- --base /CelebrationInABox_Website` yields asset URLs prefixed correctly and all internal links resolve.

---

## Sprint 2 — Styling foundation

### Epic: CSS actually loads
- [x] **BL-11 (P0)** `src/styles/global.css` now imported in both layouts; inline `@tailwind` directives removed.
- [ ] **BL-12 (P1)** Confirm Tailwind content scan covers `.jsx`/`.astro` (it does) and classes used dynamically via `bg-current` etc. are not purged. (Audit for missed classes.)
- [ ] **BL-13 (P1)** Add a favicon asset (`/public/favicon.svg`) referenced by `Layout.astro` — currently missing, will 404.
- [x] **BL-14 (P1)** Global CSS now provides `body { margin:0 }` fallback via imported stylesheet.
- [ ] **BL-15 (P2)** Define design tokens (accent colors per celebration) as CSS variables instead of scattered Tailwind palette names.

Acceptance: Both home and `/birthday` render with full Tailwind styling in local preview at base path.

---

## Sprint 3 — Gateway works

### Epic: Home gateway navigation
- [ ] **BL-16 (P0)** Fix gateway item links to use base-aware URLs (`${BASE_URL}${id}/`).
- [ ] **BL-17 (P1)** Add keyboard accessibility: focusable anchors, visible focus ring, Enter/Space activation (anchors already handle Enter, add focus styles).
- [ ] **BL-18 (P1)** Add `aria-label`/heading semantics; ensure hover glow does not cause layout shift.
- [ ] **BL-19 (P2)** Guard against `SITE_CONFIG` undefined on SSR (React island hydrates client-side; verify no SSR mismatch).
- [ ] **BL-20 (P2)** Smooth entry animation respected under `prefers-reduced-motion`.

Acceptance: Clicking each of Birthday / Anniversary / Congratulations navigates to the correct page on GitHub Pages with no 404.

---

## Sprint 4 — Celebration flow

### Epic: Questionnaire → reveal → inquire
- [ ] **BL-21 (P0)** Fix all "Back to Start" links to use base-aware URL.
- [ ] **BL-22 (P1)** Replace `window.location.href = 'mailto:...'` button with a real `<a href="mailto:...">` for accessibility and right-click support.
- [ ] **BL-23 (P1)** Reset questionnaire state on back-navigation (or persist selections per `type`).
- [ ] **BL-24 (P1)** Include selected `detail` in the outcome reveal (currently only mood + scale used).
- [ ] **BL-25 (P2)** Make price / kit contents configurable (not hardcoded in component).
- [ ] **BL-26 (P2)** Handle unknown `type` gracefully (fallback or 404) instead of silently defaulting to birthday.
- [ ] **BL-27 (P2)** Add a "Restart" / "Try another vibe" action after reveal.

Acceptance: Full happy path birthday → 3 questions → reveal → inquire email opens correctly on prod.

---

## Sprint 5 — Polish & conversion

### Epic: UX, content, SEO
- [ ] **BL-28 (P1)** Add `<title>`, meta description, Open Graph / Twitter tags per page.
- [ ] **BL-29 (P2)** Responsive typography check on small screens (questions fit, CTA reachable).
- [ ] **BL-30 (P2)** Color contrast audit for `bg-current` buttons (text-white on colored currentColor).
- [ ] **BL-31 (P3)** Add analytics (optional, with consent).
- [ ] **BL-32 (P3)** Loading state while React islands hydrate.

---

## Sprint 6 — Quality & guardrails

### Epic: Tests & developer experience
- [ ] **BL-33 (P1)** Add `astro check` to CI and `package.json` scripts.
- [ ] **BL-34 (P2)** Add component smoke tests (Vitest + Testing Library) for `Gateway` and `CelebrationFlow`.
- [ ] **BL-35 (P2)** Add Playwright E2E covering home → birthday → reveal → mailto.
- [ ] **BL-36 (P2)** Run `npm audit` / dependency updates; pin versions reviewed.
- [ ] **BL-37 (P3)** Document local-dev commands & base-path gotcha in README.

---

## Recommended next slice (do NOT do all at once)
Start with **Sprint 0 (BL-01, BL-03) → Sprint 1 (BL-05, BL-07, BL-08)**. That single slice (base-path consistency + remove stray folder) is what makes the app actually deployable; everything else assumes it works.

## Sprint 7 — Deployment hygiene (added after CI run)
- [x] **BL-38 (P1)** GitHub Actions `node-version` bumped to `"22"`.
- [x] **BL-39 (P1)** Favicon href now base-aware (`/CelebrationInABox_Website/favicon.svg` in build); `public/favicon.svg` exists.

## Open questions for the owner
1. Final GitHub username/org + repo name for `site` and base path (currently placeholders).
2. Is `/CelebrationInABox_Website` the final published slug, or will this move to a custom domain?
3. Budget scope: is the "kit" real commerce (Stripe) or inquiry-only for v1? (Affects Epic 4 price/inquire item.)
4. Do we keep the gateway's 3-option model, or expand occasions?
