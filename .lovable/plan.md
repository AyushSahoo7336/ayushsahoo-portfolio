## Modal Polish, Hero Typewriter & CV Button Rename

### 1. Global scrollbar styles (`src/styles.css`)
Add a `.sleek-scrollbar` utility (webkit + firefox) — 8px width, transparent track, `bg-white/10` thumb, `rounded-full`, hover lights up to `var(--primary-accent)/50`. Apply to scrollable `DialogContent` in both modals.

### 2. Project Modal (`src/components/sections/ProjectsSection.tsx`)
- DialogContent: add `border-[var(--primary-accent)]/20`, ambient shadow `shadow-[0_0_40px_color-mix(in_oklab,var(--primary-accent)_8%,transparent)]`, plus `sleek-scrollbar` class.
- Tech `<Badge>`s: switch to accent-tinted style (`bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] border-[var(--primary-accent)]/20`).
- Replace `<ul class="list-disc">` highlights with a flex layout: each bullet uses `<ChevronRight>` (Lucide) in `text-[var(--primary-accent)]` followed by the text.

### 3. Skills Modal (`src/components/sections/SkillsSection.tsx`)
- DialogContent: same accent border + ambient shadow + sleek-scrollbar.
- Mini bento cards: add `transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-accent)]/50 hover:bg-[var(--primary-accent)]/5 hover:shadow-lg hover:shadow-[var(--primary-accent)]/10`.

### 4. Dialog close button (`src/components/ui/dialog.tsx`)
Update the `DialogPrimitive.Close` element classes so hover state becomes `hover:bg-[var(--primary-accent)]/10 hover:text-[var(--primary-accent)] transition-colors` (and rounded for a nicer hit area).

### 5. Hero typewriter (`src/components/sections/Hero.tsx`)
- Build a small local `Typewriter` component that cycles through: Software Developer → Full-Stack Developer → Real-Time Systems Builder → Problem Solver, with type/delete loop using `useEffect` + `setTimeout` (no extra dependency).
- Render inside the subtitle line; keep the existing font/size/accent color from `profile.role`. Add a blinking cursor `|` styled with `var(--primary-accent)` (CSS keyframe `@keyframes blink` added to `styles.css` if not already present).
- Prevent layout shift: wrap text in a fixed-`min-h` container and a `min-w-[22ch]` (or similar) inline-block so the row reserves space for the longest phrase. Keep the `Hand` icon to the right.

### 6. Download CV → Download Resume (`src/components/site/DownloadCv.tsx`)
Change the button label text from "Download CV" to "Download Resume". Leave file/url binding untouched.

### Out of scope
No content/data changes besides the button label and hero subtitle wording. No structural/route changes.
