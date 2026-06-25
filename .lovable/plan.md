## Global Interactive Polish

Add four global layers on top of the existing single-page portfolio.

### 1. Momentum Smooth Scroll
- Install `lenis` (`bun add lenis`).
- New `src/components/site/SmoothScroll.tsx`: initializes Lenis on mount, drives it via `requestAnimationFrame`, syncs with Framer Motion's `ScrollTrigger`-equivalent via `useEffect` cleanup. Disabled on touch devices (`lenis.options.smoothTouch = false`).
- Mount inside `src/routes/__root.tsx`, wrapping the existing `relative z-10` content container.
- Keep `scroll-behavior: smooth` removed from `html` (Lenis replaces it). Anchor nav in `Navbar.tsx` switches to `lenis.scrollTo('#id')` via a small `useLenis` hook context.

### 2. Smart Custom Cursor
- New `src/context/CursorContext.tsx` exposing `setHovering(boolean)`.
- New `src/components/site/CustomCursor.tsx`: a `motion.div` (28px hollow circle, `border-2 border-[var(--primary-accent)]`) positioned with `useMotionValue` x/y driven by `useSpring` (stiffness ~300, damping ~30) for trailing delay. Listens to `window` mousemove. Scales to `1.5` and switches to filled/thicker border when `hovering` is true. Hidden on touch / when pointer leaves window.
- Global mouseover delegation: a single listener checks `e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')` and toggles hover state — no per-component wiring needed.
- Update `src/styles.css`: `html, body { cursor: none }` on pointer:fine; restore default for pointer:coarse via media query.

### 3. Ambient Spotlight
- New `src/components/site/Spotlight.tsx`: fixed `inset-0 pointer-events-none z-30` div. Tracks mouse via `useMotionValue` and applies `background: radial-gradient(600px circle at ${x}px ${y}px, color-mix(in oklab, var(--primary-accent) 10%, transparent), transparent 60%)` through a `motion` style update (rAF-throttled). Reuses the same global mousemove listener emitted from `CursorContext` to avoid duplicate handlers.
- Mounted in `__root.tsx` above background effects, below cursor.

### 4. Universal Interactive Card Borders
- Add a utility class `.interactive-card` in `src/styles.css`:
  - `border: 1px solid rgb(255 255 255 / 0.10)`
  - `transition: border-color 300ms ease, box-shadow 300ms ease`
  - `&:hover { border-color: color-mix(in oklab, var(--primary-accent) 40%, transparent) }`
- Apply to existing card containers in:
  - `ExperienceSection.tsx` / `Timeline.tsx` rows
  - `EducationSection.tsx` rows
  - `ProjectsSection.tsx` cards
  - `Hero.tsx` stat/quote cards
  - LeetCode stats card (in Hero/AboutSection)
  - `ContactSection.tsx` tiles
  - `ControlRail.tsx` buttons (border variant only)

### Layering (z-index)
```text
z-50  Navbar, ControlRail, CustomCursor
z-30  Spotlight overlay
z-10  Page content (sections)
z-0   (unused)
-z-10 BackgroundFx (Starfield / ColdFlakes / MatrixRain)
```

### Files touched
- New: `src/components/site/SmoothScroll.tsx`, `CustomCursor.tsx`, `Spotlight.tsx`, `src/context/CursorContext.tsx`
- Edit: `src/routes/__root.tsx`, `src/styles.css`, `src/components/site/Navbar.tsx`, `Hero.tsx`, `ExperienceSection.tsx`, `EducationSection.tsx`, `ProjectsSection.tsx`, `ContactSection.tsx`, `ControlRail.tsx`
- Dependency: `lenis`

### Out of scope
- Replacing Framer Motion scroll-linked animations (none currently used).
- Per-element magnetic cursor effects (only global scale-on-hover).
