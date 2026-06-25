
# Exact-Clone Portfolio Plan

## Scope note
I'll match the reference site's **visual design, layout, routes, components, animations, and micro-interactions exactly**. Personal content (name, bio, project list, links, phone, email, CV) will be placeholders you replace in one file (`src/data/portfolio.ts`). I won't copy the reference owner's name, photos, projects, or contact details verbatim.

## Routes (multi-page, not single-page)
The reference is a multi-route site. Replace the current single-page build with:

```
src/routes/
  __root.tsx       global shell: starfield bg, navbar, floating control rail, "Download CV" pill, footer
  index.tsx        / — Hero ("Welcome to my world", name, role, quote, 2 stat cards, View Details + Let's Talk), Marquee ticker, "What I Create" 4 cards
  about.tsx        /about — Biography + "My Skills" 4 expandable category cards (Frontend/Backend/Mobile/Game)
  experience.tsx   /experience — vertical timeline of roles
  education.tsx    /education — vertical timeline of diplomas/certs
  projects.tsx     /projects — filter tabs (All/Mobile/Desktop/Websites/Extensions/Other) + project grid
  contact.tsx      /contact — 6 contact platform cards (WhatsApp, GitHub, LinkedIn, Twitter, Instagram, Email)
  lets-talk.tsx    /lets-talk — Name / Email / Message form + Send button
```

Each route gets its own `head()` with unique title + description + og tags.

## Global shell (every page)
- **Starfield background**: client-only twinkling dot field (already in place — keep).
- **Top navbar**: rounded pill, glass blur, brand wordmark left, route links right with active underline.
- **Floating right-edge control rail** (fixed, vertical): 7 circular icon buttons — focus mode, sound toggle, music toggle, snow/effects toggle, dark/light toggle, accent-color palette, language. Each opens a small popover; the accent button drives a global `--primary-accent` CSS variable via React Context (theme switcher already partially built — extend it).
- **Bottom-left orb**: small glowing accent dot (decorative).
- **Bottom-right "Download CV" pill**: fixed, links to a placeholder PDF.
- **Footer**: minimal, centered, year + small credit line.

## Page-by-page detail

### Home (`/`)
- Hero block left-aligned, large radial cyan glow behind the name.
- "WELCOME TO MY WORLD" eyebrow with sparkle icon.
- Massive headline `Hi, I'm <Name>` (name in accent color).
- Role line with waving-hand icon.
- 3-line tagline paragraph.
- Italic quote with left accent bar.
- 2 stat cards (Years Experience / Projects Completed) — bordered glass tiles with icons.
- Two CTAs: solid accent "View Details" → `/projects`, outlined "Let's Talk" → `/lets-talk`.
- "SCROLL ↓" indicator.
- **Marquee**: infinite horizontal ticker, tokens separated by `◆` (DEVELOPER, 2026, FRONTEND, BACKEND, MOBILE, GAME DEV, REACT, UNITY, TYPESCRIPT), duplicated for seamless loop.
- **"What I Create"** section: heading + subtitle + 4 cards (Frontend / Backend / Mobile / Games), each linking to `/about`. CTA `About Me →`.

### About (`/about`)
- "About Me" headline + 2-paragraph biography.
- "My Skills" 4 cards (Frontend / Backend / Mobile / Game Dev) with hover-flip or click-expand to reveal a tech list per card.

### Experience (`/experience`)
- Vertical timeline (left rail with dots), 6 placeholder roles with title / company / date range.

### Education (`/education`)
- Same timeline pattern as Experience, 3 placeholder entries.

### Projects (`/projects`)
- Filter tab bar: All · Mobile · Desktop · Websites · Extensions · Other.
- Responsive grid of project cards: image cover, title, 1-line description, GitHub + Live Demo buttons, "View Details" overlay on hover.
- Cards animate in with framer-motion; filtering animates with `AnimatePresence`.

### Contact (`/contact`)
- Heading + intro line.
- 6 platform tiles in a grid: WhatsApp, GitHub, LinkedIn, Twitter, Instagram, Email — each shows platform name, placeholder handle, and a `→` arrow on hover.

### Let's Talk (`/lets-talk`)
- Centered heading + intro.
- Form: Name, Email, Message (textarea), Send Message button. Client-side validation only; on submit shows a toast (no backend wired).

## Visual system
- Background: deep navy `#040814` with subtle radial cyan glows.
- Default accent: cyan `#22d3ee`, swappable through control rail.
- Typography: Outfit (display) + Figtree (body) — already installed.
- Glass surfaces: `bg-white/[0.02]` + `border-white/10` + backdrop blur.
- All colors via semantic CSS tokens in `src/styles.css`; no hardcoded `text-white` / `bg-black` in components.
- Animations: framer-motion for hero fade-in, card hover lifts, marquee, route transitions, filter changes.

## Technical changes
- Convert current single-page `index.tsx` into the multi-route structure above; move section components from `src/components/sections/` into the appropriate routes; keep reusable ones (`Marquee`, `Hero`).
- Extend `AccentContext` to also expose theme (dark/light) and a "focus mode" flag the rail toggles.
- Centralize all editable content (name, role, bio, stats, skills, experience, education, projects, contacts) in `src/data/portfolio.ts` so you only edit one file to make it yours.
- Add per-route `head()` metadata (title + description + og:title + og:description; og:image only on leaf routes).
- Keep starfield client-only fix already in place.

## Out of scope (until you ask)
- Real backend for the contact form.
- Real CV PDF (will link to a placeholder).
- Light theme polish beyond the toggle plumbing.
- Pulling real project images — placeholders (solid gradients + title) until you provide assets.
