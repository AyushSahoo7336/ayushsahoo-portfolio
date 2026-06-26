## Plan: LeetCode Dashboard + Bento Projects Grid

### 1. New "Problem Solver" Dashboard section

Create `src/components/sections/ProblemSolverSection.tsx`:
- Full-width glass container (`interactive-card rounded-3xl p-8 md:p-12 bg-[var(--glass-bg)] border-[var(--glass-border)] shadow-[var(--glass-shadow)] backdrop-blur-sm`).
- Two-column grid (`md:grid-cols-2 gap-10`):
  - **Left**: Eyebrow "LeetCode", H2 "Algorithmic Problem Solver" (Space Grotesk / `font-display`), subtext, and a small CTA link to the LeetCode profile (`https://leetcode.com/AyushSahoo1`).
  - **Right**: Metrics block —
    - Huge "341" counter (`text-7xl font-display`) with "Solved" label, accent-colored.
    - Three thin glowing progress bars: Easy (163), Medium (153), Hard (25), each with label, count, and a bar using `var(--primary-accent)` with `box-shadow` glow; widths proportional to totals.
    - "296-Day Max Streak" badge pill with a pulsing accent dot (`animate-ping` over a solid dot).

Add LeetCode stats to `src/data/portfolio.ts`:
```ts
export const leetcode = {
  total: 341, easy: 163, medium: 153, hard: 25,
  streak: 296, profile: "https://leetcode.com/AyushSahoo1",
};
```

Wire into `src/routes/index.tsx` between About and Education (before Projects, per request — currently order is About → Education → Projects; will insert between About and Education so it sits before Projects as specified):
```
About → ProblemSolver → Education → Projects
```

Add nav entry `{ id: "leetcode", label: "LeetCode" }` to `navSections` in `portfolio.ts`.

### 2. Refactor `ProjectsSection.tsx` — Asymmetrical Bento Grid

- Remove the existing uniform 3-column grid + category filter chips (keep the data, drop the filter UI to commit to the bento layout; or keep filter row above grid — will keep filter row since it was previously requested).
- New grid:
  - Row 1: VidMeet — `col-span-2` full-width feature card, taller (`h-[420px]`).
  - Row 2: GitVerse + StockFlow — two cards side-by-side (`md:grid-cols-2`, `h-[340px]`).
- Container: `mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2`.

### 3. 3D Parallax Tilt + Hover Reveal

Create `src/components/site/TiltCard.tsx`:
- Wraps children in a `motion.div` with `style={{ transformStyle: "preserve-3d", perspective: 1000 }}`.
- Tracks pointer with `useMotionValue(x,y)` → `useSpring` → `useTransform` to `rotateX` (±8deg) and `rotateY` (±8deg).
- Resets on `onPointerLeave`.

Project card interior (inside TiltCard):
- Full-bleed dark gradient background using project `accent` (`bg-gradient-to-br ...`) plus an inner radial accent glow.
- Always visible: large title (`font-display text-3xl md:text-5xl`) bottom-left, small category eyebrow top-left.
- Hover-only overlay (absolute inset-0, dark scrim) containing description, tech chips, and GitHub / Live Demo buttons:
  - Uses `group-hover:` + Framer Motion `motion.div` with `initial={{ y: 20, opacity: 0 }}` and `whileHover` driven via parent group state (use a local `useState hovered`).
- Tech chips: derive a short list per project (add `tech?: string[]` to project type in `portfolio.ts` and populate for the 3 projects).

### Files touched

- **New**: `src/components/sections/ProblemSolverSection.tsx`, `src/components/site/TiltCard.tsx`.
- **Edit**: `src/data/portfolio.ts` (add `leetcode`, `tech` per project, nav entry), `src/routes/index.tsx` (insert section), `src/components/sections/ProjectsSection.tsx` (bento + tilt + hover reveal), `src/components/site/Navbar.tsx` only if needed (it reads `navSections` already, so no change).

### Notes

- All colors via semantic tokens + `var(--primary-accent)` so light/dark + accent switcher keep working.
- Tilt respects existing custom cursor (no `cursor` overrides).
- Hover reveal uses Framer Motion `AnimatePresence` keyed on local hover state for smooth y/opacity transition.
