## Portfolio Rebuild Plan

Rebuild the portfolio as a single-page app following the exact spec. Replace current multi-route structure with one scrolling page on `/`.

### 1. Fonts & Tokens (`src/styles.css`, `src/routes/__root.tsx`)
- Add `<link>` tags in root head for Space Grotesk, JetBrains Mono, Geist (Google Fonts).
- Define `--font-display`, `--font-mono`, `--font-body` in `@theme`.
- Define `--primary-accent` CSS variable on `:root` (default Cyan `#06b6d4`).
- Background `#0a0a0a`, hairline border token `border-white/10`.

### 2. Theme Context (`src/context/AccentContext.tsx`)
- React Context exposing `accent` + `setAccent`.
- On change, mutate `document.documentElement.style.setProperty('--primary-accent', hex)`.
- Provider wraps app in `__root.tsx`.

### 3. Floating Accent Switcher (`src/components/site/AccentSwitcher.tsx`)
- Fixed right-edge vertical panel (`fixed right-4 top-1/2 -translate-y-1/2 z-50 ...`).
- 3 circular swatch buttons: Forest `#22c55e`, Cyan `#06b6d4`, Ember `#f97316`.
- Active swatch gets ring outline.

### 4. Sticky Navbar (`src/components/site/Navbar.tsx` — replace)
- `sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10`.
- Left: "AYUSH" in mono. Center: smooth-scroll anchors (Home, About, Experience, Projects) using `#hash` + `scrollIntoView`. Right: "Let's Talk" button with accent bg.

### 5. Hero (`src/components/sections/Hero.tsx`)
- Two-column flex. Left: massive Space Grotesk H1 "Hi, I'm <span accent>Ayush</span> Sahoo", subtitle "Software Developer" gray, body line.
- Radial blurred glow behind text (`absolute blur-3xl opacity-20 bg-[var(--primary-accent)]`).
- Right: 256×256 circular placeholder `w-64 h-64 rounded-full border border-white/10 bg-white/5`.

### 6. Marquee (`src/components/sections/Marquee.tsx` — replace)
- Framer Motion infinite `animate={{ x: [0, -1000] }}` with `repeat: Infinity`, linear easing.
- Content "DEVELOPER ◆ FRONTEND ◆ BACKEND ◆ MERN ◆ WEBRTC ◆ SOCKET.IO" duplicated, JetBrains Mono uppercase tracked.

### 7. LeetCode Stats (`src/components/sections/LeetStats.tsx`)
- Glass card. Large "341" + "Problems Solved". Sub-badges "153 Medium", "25 Hard". Green pulsing dot (`animate-ping` halo) + "296-Day Max Streak". All numerals JetBrains Mono.

### 8. About + Experience sections
- Simple anchored sections (`#about`, `#experience`) with placeholder bios/timeline so nav anchors resolve.

### 9. Projects Grid (`src/components/sections/Projects.tsx`)
- `grid-cols-1 md:grid-cols-3 gap-6`. Three cards: StockFlow, VidMeet, GitVerse.
- Framer Motion 3D flip: outer `style={{ perspective: 1000 }}`, inner `motion.div` with `whileHover={{ rotateY: 180 }}`, `transformStyle: 'preserve-3d'`.
- Front face: title (Space Grotesk) + outlined mono tech chips.
- Back face: `rotateY-180 backface-hidden`, 2-line tech summary + GitHub / Live Demo buttons (accent border).

### 10. Page Assembly (`src/routes/index.tsx`)
- Render: Navbar, Hero, Marquee, LeetStats, About, Experience, Projects, Footer, AccentSwitcher.
- Remove old multi-route pages (`about.tsx`, `experience.tsx`, `education.tsx`, `projects.tsx`, `contact.tsx`, `lets-talk.tsx`) since spec is single-page.

### Technical Notes
- Use existing framer-motion install. Add `@fontsource` not needed — using `<link>` per Tailwind v4 rules.
- Backface hidden via inline style `backfaceVisibility: 'hidden'` (no hand-written `-webkit-` prefix).
- Accent applied via `style={{ background: 'var(--primary-accent)' }}` or `bg-[var(--primary-accent)]` arbitrary class.

### File Changes Summary
- New: `AccentContext.tsx`, `AccentSwitcher.tsx`, `Hero.tsx`, `LeetStats.tsx`, `Projects.tsx`, About/Experience section components.
- Replace: `Navbar.tsx`, `Marquee.tsx`, `index.tsx`, `__root.tsx` (head + provider), `styles.css` (fonts + accent var).
- Delete: `about.tsx`, `experience.tsx`, `education.tsx`, `projects.tsx`, `contact.tsx`, `lets-talk.tsx`, `Starfield.tsx`, `PageLayout.tsx`, `DownloadCv.tsx`.
