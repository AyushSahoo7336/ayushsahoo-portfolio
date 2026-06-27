## Scroll polish, rail tooltips, progress bar, remove marquee

### 1. Section scroll offsets + Hero fit
- `src/routes/index.tsx`: change `Section` wrapper's `scroll-mt-24` → `scroll-mt-28`. Reorder sections so `ProjectsSection` comes before `ProblemSolverSection`. Remove `<Marquee />`.
- `src/components/sections/Hero.tsx`: change root `<section>` classes to `min-h-screen flex flex-col justify-center pt-24` (keep existing horizontal layout/max-width). Drop the bottom Scroll indicator's extra `mt-16` if it pushes overflow; keep but ensure it stays inside viewport.
- `src/components/site/Navbar.tsx`: simplify `scrollToId` to native `el.scrollIntoView({ behavior: "smooth", block: "start" })` and `window.scrollTo({top:0})` for Home — remove the −100px math. Native CSS `scroll-mt-28` handles the offset.

### 2. Nav order
- `src/data/portfolio.ts`: update `navSections` to: Home, About, Education, Skills, Projects, LeetCode, Contact (move Projects before LeetCode; keep Let's Talk handling unchanged).

### 3. Control Rail tooltips
- `src/components/site/ControlRail.tsx`: in `RailBtn`, add `relative group` to the button and render `<span class="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--glass-bg)] border border-[var(--glass-border)] text-foreground backdrop-blur-md shadow-[var(--glass-shadow)]">{label}</span>`. `label` prop already exists.

### 4. Global scroll progress bar
- `src/routes/__root.tsx`: add a top-level `<ScrollProgress />` component (new file `src/components/site/ScrollProgress.tsx`) placed above Navbar in the tree.
- New component uses framer-motion `useScroll` + `useSpring`, renders `<motion.div className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left" style={{ scaleX, backgroundColor: "var(--primary-accent)" }} />`.

### 5. Cleanup
- Delete `src/components/sections/Marquee.tsx` (no other importers).

### Out of scope
No data/content changes beyond `navSections` reorder. No theming, no modal changes.
