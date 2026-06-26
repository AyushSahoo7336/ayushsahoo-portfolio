## Plan: Live LeetCode + Skill Modals + Flip Projects

### 1. Live LeetCode in `ProblemSolverSection.tsx`

- Add `useEffect` + `useState` to fetch `https://leetcode-stats-api.herokuapp.com/api/v1/AyushSahoo1` on mount.
- States: `data | null`, `loading: boolean`. On failure or non-OK response, fall back to the static object in `src/data/portfolio.ts` (`{ total: 341, easy: 163, medium: 153, hard: 25, streak: 296 }`).
- Map API fields → UI: `totalSolved → total`, `easySolved → easy`, `mediumSolved → medium`, `hardSolved → hard`. Streak stays static (API doesn't expose it).
- While `loading`, render skeleton placeholders (using existing `Skeleton` from `src/components/ui/skeleton.tsx`) for the big counter, the three progress bars, and the streak badge — same layout slots so nothing shifts.
- Animate the final count up on load with a short framer transition; bars animate to their `pct` width once data arrives.

### 2. Interactive Skill Modals — new `SkillsSection.tsx`

- New file `src/components/sections/SkillsSection.tsx`, inserted in `src/routes/index.tsx` between `WhatICreate` and `AboutSection` (replacing nothing; `WhatICreate` stays). Add nav entry `{ id: "skills", label: "Skills" }` to `navSections` in `portfolio.ts`, between `about` and `leetcode`.
- Extend `src/data/portfolio.ts` with a new `skillCategories` array (keeps existing `skills` untouched to avoid breaking anything that reads it):
  ```ts
  type Proficiency = "Expert" | "Advanced" | "Intermediate";
  skillCategories: {
    id, title, blurb, icon, accent,
    items: { name, description, level: Proficiency }[]
  }[]
  ```
  Four categories: Frontend, Backend, AI, IoT. Populate with realistic tech for Ayush (React/Next/TS/Tailwind; Node/Express/WebSockets/Postgres; Python/PyTorch/LangChain/OpenAI API; Arduino/ESP32/MQTT/Raspberry Pi). Proficiency tuned per item.
- UI:
  - Section uses existing `PageHeader` ("My Skills" / "Tech I work with").
  - 2x2 responsive grid (`grid-cols-1 md:grid-cols-2 gap-5`) of `interactive-card` category tiles. Each tile: lucide icon in accent, title, blurb, item count, and a bottom-right "Click to explore →" chip that animates on hover.
  - On click, open a modal using shadcn `Dialog` (`src/components/ui/dialog.tsx`) with glass styling: `bg-[var(--glass-bg)] backdrop-blur-xl` + accent border.
  - Modal body: 2-column responsive grid of mini-cards per technology — name, short description, and a proficiency badge color-coded via `var(--primary-accent)` only for one swatch; level colors fixed:
    - Expert → emerald (`bg-emerald-500/15 text-emerald-300 border-emerald-500/30`)
    - Advanced → purple (`bg-purple-500/15 text-purple-300 border-purple-500/30`)
    - Intermediate → amber (`bg-amber-500/15 text-amber-300 border-amber-500/30`)
  - In light mode, swap text shades to `-700` variants via `dark:` prefix logic.

### 3. Horizontal 3D Flip Projects — rewrite `ProjectsSection.tsx`

- Discard bento + tilt. New layout: `grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6`. Each card fixed height (`h-[420px]`).
- New component `src/components/site/FlipCard.tsx`:
  - Outer wrapper: `style={{ perspective: 1000 }}`, `group h-full w-full`.
  - Inner `motion.div`: `transformStyle: "preserve-3d"`, `whileHover={{ rotateY: 180 }}`, `transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}`, `className="relative h-full w-full"`.
  - Front face: `absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden`, dark gradient via `bg-gradient-to-br ${project.accent}` + dark scrim + accent glow blob, project title (`font-display text-4xl`) bottom-left, category eyebrow top-left.
  - Back face: `absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-6 bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-xl flex flex-col gap-4`. Contents: title, description, tech chips, GitHub + Live Demo buttons (same styling as before).
- `ProjectsSection` becomes thin: header + grid of `<FlipCard project={p} />`.
- Delete `src/components/site/TiltCard.tsx` (no longer referenced).

### Files

- **New**: `src/components/sections/SkillsSection.tsx`, `src/components/site/FlipCard.tsx`.
- **Edit**: `src/data/portfolio.ts` (add `skillCategories`, add `skills` nav entry), `src/routes/index.tsx` (mount Skills section), `src/components/sections/ProblemSolverSection.tsx` (live fetch + skeleton + fallback), `src/components/sections/ProjectsSection.tsx` (horizontal flip grid).
- **Delete**: `src/components/site/TiltCard.tsx`.

### Notes / caveats

- The Heroku LeetCode API is third-party and frequently rate-limits or sleeps; the static fallback is the user-visible safety net.
- All styling stays on semantic tokens + `var(--primary-accent)` so theme + accent switcher keep working in both light and dark.
