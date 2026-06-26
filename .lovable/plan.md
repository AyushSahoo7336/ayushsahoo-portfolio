## Goal
Polish Light mode: borderless glass with soft shadows, cleaner background, contained hero glow, no stray accent dot.

## Steps

1. **`src/styles.css` tokens**
   - `:root` (dark): add `--glass-shadow: none;`. Keep `--glass-bg` / `--glass-border` as-is.
   - `html.light`: set `--background: #f8fafc`, `--card: #ffffff`, `--glass-border: transparent`, `--glass-shadow: 0 8px 32px rgba(0,0,0,0.04)`, and bump `--glass-bg: rgba(255,255,255,0.7)` so cards read as clean white surfaces.
   - Update `.interactive-card` utility: border uses `var(--glass-border)`, default `box-shadow: var(--glass-shadow)`; hover keeps accent ring (already does).

2. **Swap hardcoded glass classes → semantic tokens + shadow**
   Across `Navbar`, `ControlRail`, `DownloadCv`, `Marquee`, `LetsTalkSection`, `AboutSection`, `ContactSection`, `ProjectsSection`, `WhatICreate`, `Hero` stats card and the secondary CTA: replace `border border-white/10 bg-white/[0.02|0.03] …` glass clusters with `border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--glass-shadow)]`. Pill/inline borders that aren't glass surfaces (chips inside cards, divider lines) stay on `border-white/10` since they only show in dark — but switch the most visible ones (Navbar pill, Control Rail buttons + popover, DownloadCv pill, Marquee strip, form inputs) to the semantic trio.
   - Input fields in `LetsTalkSection` use `bg-[var(--glass-bg)] border-[var(--glass-border)]`.
   - `ControlRail` popover container uses `bg-card` (so it's solid white in light, dark in dark) + `shadow-[var(--glass-shadow)]`.

3. **Remove stray accent dot**
   - `src/components/site/Starfield.tsx`: delete the fixed `h-3 w-3` accent dot pinned at `left:1.5rem top:50%` (the floating dot user sees).

4. **Hero glow**
   - `src/components/sections/Hero.tsx`: remove the existing giant `520px` blurred radial behind the section. Wrap the `<h1>` in a `relative` container and add the targeted glow `div` exactly as specified: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full -z-10 pointer-events-none` with `background-color: color-mix(in oklab, var(--primary-accent) 20%, transparent)` and `filter: blur(100px)` (Tailwind arbitrary `blur-[100px]` + accent/20 equivalent).

## Out of scope
No changes to motion, fonts, or layout structure beyond the hero glow swap.
