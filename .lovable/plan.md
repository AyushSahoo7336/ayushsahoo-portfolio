## Goal
Convert the current multi-route portfolio into a single scrolling page where the top nav smooth-scrolls to sections, and rebuild the right-side vertical rail with functional popover panels (theme switcher, music player, effects) matching the reference screenshots.

## Changes

### 1. Single-page structure
- Make `src/routes/index.tsx` render all sections stacked, each with an `id`:
  - `#home` (Hero), `#about`, `#experience`, `#education`, `#projects`, `#contact`, `#lets-talk`
- Reuse existing page bodies — extract each route's content into a section component under `src/components/sections/` (AboutSection, ExperienceSection, etc.).
- Delete the standalone route files (`about.tsx`, `experience.tsx`, `education.tsx`, `projects.tsx`, `contact.tsx`, `lets-talk.tsx`) so only `index.tsx` + `__root.tsx` remain.

### 2. Navbar smooth-scroll
- Update `Navbar.tsx`: replace `<Link to="/about">` etc. with anchor buttons that call `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`.
- Add a scroll-spy hook (IntersectionObserver) to highlight the active section in the nav.
- Add `scroll-margin-top` to each section so the sticky navbar doesn't cover headings.

### 3. Right-side control rail (matches screenshots)
Rebuild `ControlRail.tsx` as a fixed vertical column of circular icon buttons. Each button opens a popover panel anchored to its left:

- **Focus** (target icon) — toggles a "focus mode" that dims background effects.
- **Connectivity** (wifi icon) — simple status indicator.
- **Music** (music note) — Music Player panel (screenshot 3): volume slider, track list (Idea 22, Isabella's Lullaby, Jazz Vibes), play/pause state. Uses `<audio>` element; tracks are placeholder entries in `portfolio.ts` (no audio files yet — buttons toggle UI state only).
- **Effects** (snowflake) — panel with two options: "Cold Flakes" (falling snow overlay) and "Matrix Rain" (canvas matrix effect). Selecting one mounts the corresponding background component.
- **Light/Dark** (moon) — toggles a `dark` class on `<html>`.
- **Theme** (palette) — panel (screenshot 2) listing accent presets: Sea (cyan), Forest (green), Ember (orange), with a "Custom Theme" indicator at top. Writes `--primary-accent` via existing `AccentContext`.
- **Language** (globe) — simple EN/FR toggle (UI only).

Panel styling: dark glass card (`bg-card/90 backdrop-blur`, accent border), positioned `right-16` next to each icon, animated in with framer-motion.

### 4. Background effects
- Keep `Starfield.tsx` as the default.
- Add `src/components/site/effects/ColdFlakes.tsx` (CSS-animated falling dots) and `MatrixRain.tsx` (canvas).
- A new `EffectsContext` stores which effect is active; `__root.tsx` renders the active one.

### 5. Data
- Add `tracks` array to `src/data/portfolio.ts` for the music player.
- Add `accentPresets` (Sea / Forest / Ember hex values).

## Technical notes
- All theme/effect/music state lives in React contexts under `src/context/` (AccentContext already exists; add `EffectsContext`, `MusicContext`).
- Popovers built with shadcn `Popover` for accessibility and outside-click handling.
- No new dependencies required.

## Out of scope
- Real audio files for the music player (placeholder tracks only — user can drop MP3s into `public/` later).
- Translations for the language toggle (label-only switch for now).
