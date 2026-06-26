## Scope

A polish pass across navigation, sections, hover physics, modals, and a global scroll-reveal system. No backend changes.

## 1. Cleanup & Section Order

- Delete `src/components/sections/WhatICreate.tsx` and remove all imports/usages.
- Rewrite `src/routes/index.tsx` to stack sections in this order:
  Hero → About → Skills → Education (+Certifications) → Problem Solver → Projects → Contact → Let's Talk.
- Update `navSections` in `src/data/portfolio.ts` so the top navbar reflects the same order (no "Certifications" item; it lives inside Education).

## 2. Skills Section Polish

- Fix the eyebrow in `SkillsSection.tsx` to `MY SKILLS` (uppercase + tracking already handled by `PageHeader`).
- Build a small `SpotlightCard` wrapper component (`src/components/site/SpotlightCard.tsx`) that:
  - Tracks pointer X/Y via `onMouseMove` and writes them to CSS vars (`--mx`, `--my`).
  - Overlays a `radial-gradient(circle at var(--mx) var(--my), color-mix(in oklab, var(--primary-accent) 12%, transparent), transparent 40%)` that fades in on hover.
- Wrap each of the 4 Skills category buttons in `SpotlightCard`.

## 3. Premium Skill Modal Cards

- In the Skills modal, restyle each item as a glass mini-card: `bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4` (use semantic equivalents so light mode still works: `bg-foreground/5 border-foreground/10`).
- Logo on the left (Devicon/Lucide), name + description stacked on the right.

## 4. Control Rail Hover States

- In `src/components/site/ControlRail.tsx`, update each icon button to transition smoothly to:
  `hover:bg-[var(--primary-accent)]/10 hover:text-[var(--primary-accent)] hover:border-[var(--primary-accent)]/30`
  with `transition-colors duration-300`.

## 5. Education & Certifications

- Rename the section heading to `Education` in `EducationSection.tsx`.
- Add a `Certifications` sub-heading below the timeline.
- Build a 3-column grid (`grid-cols-1 md:grid-cols-3 gap-6`) with 3 dummy `CertificateCard`s:
  - `aspect-video bg-muted/20` placeholder image area.
  - Title, Issuer, Date.
  - Glass styling consistent with the rest of the site.
- Dummy data inline for now (AWS Certified Developer / Meta Frontend / Google Cloud Associate) — easy to swap later.

## 6. Global Scroll Reveal System

- Create `src/components/site/Reveal.tsx`:
  - Props: `delay?`, `y?`, `as?`.
  - Uses `motion.div` with `initial={{ opacity: 0, y: 40 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-100px" }}`, `transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}`.
- Apply to every section's header (via `PageHeader` getting an internal `Reveal` wrap) and to major content blocks in About, Education, Problem Solver, Contact, Let's Talk.
- Staggered grids: in Skills, Projects, and Certifications, wrap each card in `<Reveal delay={index * 0.15}>` so they cascade in.

## Files Touched

- Delete: `src/components/sections/WhatICreate.tsx`
- New: `src/components/site/SpotlightCard.tsx`, `src/components/site/Reveal.tsx`
- Edit: `src/routes/index.tsx`, `src/data/portfolio.ts`, `src/components/site/Navbar.tsx` (only if it reads order from a different source), `src/components/site/PageHeader.tsx`, `src/components/site/ControlRail.tsx`, `src/components/sections/SkillsSection.tsx`, `src/components/sections/EducationSection.tsx`, `src/components/sections/ProjectsSection.tsx`, `src/components/sections/AboutSection.tsx`, `src/components/sections/ProblemSolverSection.tsx`, `src/components/sections/ContactSection.tsx`, `src/components/sections/LetsTalkSection.tsx`

## Out of Scope

- No data/content changes besides the dummy certifications.
- No accent-palette or theme-token changes.
