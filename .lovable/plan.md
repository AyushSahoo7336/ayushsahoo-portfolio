## Goal
Make Light mode actually flip the background, glass surfaces, and canvas effects — not just the text.

## Steps

1. **`src/styles.css` — semantic tokens**
   - Keep current `:root` dark tokens, but also add `--glass-bg: rgba(255,255,255,0.03)` and `--glass-border: rgba(255,255,255,0.1)`.
   - Add a `html.light` block overriding `--background: #f8fafc`, `--foreground: #0f172a`, `--card: #ffffff`, `--glass-bg: rgba(0,0,0,0.03)`, `--glass-border: rgba(0,0,0,0.1)`, plus matching muted/border tokens (extend existing light block).
   - Update `.interactive-card` utility to use `var(--glass-border)` instead of hardcoded `rgb(255 255 255 / 0.10)`.
   - Update preloader sweep stops to use `currentColor`/foreground-alpha so it works on both themes.

2. **Strip hardcoded dark colors**
   - `src/components/site/Preloader.tsx`: `bg-[#040814]` → `bg-background`.
   - `src/components/site/Starfield.tsx`: replace the radial gradient that hardcodes `#040814` with one using `var(--background)` (and reduce star alpha in light mode — see step 4).
   - `src/components/sections/ProjectsSection.tsx`: `text-white/90` → `text-foreground/90`.
   - Sweep nav/control-rail/cards/hero/sections for any remaining `bg-white/…`, `bg-black/…`, `border-white/…` used as glass and swap to `bg-[var(--glass-bg)]` / `border-[var(--glass-border)]`. (Scan: Navbar, ControlRail, DownloadCv, Footer, Hero, AboutSection, ContactSection, Experience/Education/Timeline, ProjectsSection, WhatICreate, LetsTalkSection, Marquee, LeetStats if present.)

3. **Glassmorphism unification**
   - Navbar pill, ControlRail buttons + popovers, DownloadCv pill, and all card containers use `bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur`.

4. **Canvas effects respect theme**
   - `Starfield.tsx`: read `document.documentElement.classList.contains('light')` on mount + observe via `MutationObserver` on `<html>` class. In light mode, render stars in `#94a3b8` at ~0.25 max opacity; in dark, keep current white/cyan. Re-init on theme change.
   - `src/components/site/effects/MatrixRain.tsx`: same pattern — in light mode use `#cbd5e1` glyphs and change the trail-fade `fillStyle` from `rgba(4,8,20,0.05)` to `rgba(248,250,252,0.08)` so the fade matches the light background. In dark, keep existing values.
   - `ColdFlakes.tsx`: same conditional — light mode flakes `#94a3b8` at lower opacity.

## Out of scope
No new animations, no new components, no logic changes to theme toggle (already wired in `EffectsContext`).
