## Fix: Background effects invisible

**Root cause:** `body { background-color: #040814 }` in `src/styles.css` paints over fixed layers using `-z-10`, so Starfield / MatrixRain / ColdFlakes draw but are hidden behind the body fill.

### Changes

1. **`src/styles.css`** — keep `#040814` on `html`; set `body` to `background-color: transparent` so negative-z fixed layers remain visible.

2. **`src/routes/__root.tsx`**
   - Wrap `BackgroundFx` div with `fixed inset-0 w-full h-full pointer-events-none -z-10` and apply the focus opacity there.
   - Wrap Navbar / `<main>` / Footer in a `relative z-10` container so content sits above the canvas; keep ControlRail and DownloadCv at their existing fixed/higher z.
   - Only render `<Starfield />` when `effect === "stars"` to avoid stacking conflicts with the canvas effects.

3. **`src/components/site/effects/MatrixRain.tsx`** — change canvas wrapper class to `pointer-events-none fixed inset-0 -z-10` (remove `-z-[5] opacity-50`) so glyphs are legible above the now-transparent body.

4. **`src/components/site/effects/ColdFlakes.tsx`** — change wrapper to `pointer-events-none fixed inset-0 -z-10 overflow-hidden` (was `-z-[5]`).

5. **`src/components/site/Starfield.tsx`** — already `-z-10`; no change.

6. **Section spot-check** — scan `Hero`, `AboutSection`, `ExperienceSection`, `EducationSection`, `ProjectsSection`, `ContactSection`, `LetsTalkSection`, `WhatICreate`, `Marquee` for any full-bleed opaque `bg-background` / `bg-[#040814]` wrappers; swap to `bg-transparent` or `bg-[#040814]/70` so the animated layer shows through.

### Verification
Run Playwright on `localhost:8080`, switch effects via the right rail popover, and screenshot to confirm Stars, Cold Flakes, and Matrix Rain all render behind content.
