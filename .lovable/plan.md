# Portfolio Plan

A dark, space-themed multi-page developer portfolio inspired by the reference, built with TanStack Start + Tailwind v4. All content uses placeholders you can edit later.

## Visual direction

- **Theme**: Deep navy/near-black background (`#040814`) with subtle starfield, soft radial glow behind hero
- **Accent**: Cyan/teal (`#22d3ee` → `#06b6d4`) for headings, links, buttons
- **Typography**: Outfit (display, bold) for headings, Figtree (body) for text — via `@fontsource`
- **Effects**: Glow halos, gradient text, marquee ticker, subtle parallax stars, framer-motion fade/slide-ins
- **Layout**: Fixed top nav (logo left, links right), floating side icon rail (decorative), bottom-right "Download CV" pill

## Pages (separate routes, each with unique head metadata)

```text
/              Home — hero, marquee ticker, "What I Create" cards
/about         Bio + skills cards (Frontend, Backend, Mobile, Games)
/experience    Vertical timeline of roles
/education     Education & certifications timeline
/projects      Filterable project grid (All / Mobile / Desktop / Websites / Extensions / Other)
/contact       Social/contact cards (WhatsApp, GitHub, LinkedIn, Twitter, Instagram, Email)
/lets-talk     Contact form (name, email, message) — frontend only, shows toast
```

## Sections / components

- `StarfieldBackground` — animated CSS dots layer reused across routes
- `Navbar` — sticky, highlight active route
- `SideRail` — decorative icon column (right side)
- `Marquee` — infinite horizontal ticker (DEVELOPER ◆ 2026 ◆ FRONTEND ◆ …)
- `Hero` (home) — "Welcome to my world" eyebrow, big "Hi, I'm [Name]" with gradient accent, role line, blurb, quote, 2 stat cards, 2 CTAs, scroll cue
- `SkillCard` — clickable card with icon, title, blurb, tech chips
- `TimelineItem` — role/cert with company + date
- `ProjectCard` — image, title, blurb, GitHub + Live Demo links, category tag
- `ContactCard` — platform, handle, arrow
- `Footer` — minimal, copyright + socials
- `DownloadCvButton` — floating bottom-right pill linking to placeholder `/cv.pdf`

All content (name, roles, projects, links, stats) lives in a single `src/data/portfolio.ts` placeholder file so you can edit in one place.

## Technical details

- Stack: TanStack Start (existing), Tailwind v4 via `src/styles.css`, framer-motion, lucide-react icons
- Fonts: `bun add @fontsource/outfit @fontsource/figtree`, imported in `src/main.tsx`; set on `--font-display` / `--font-body` CSS vars in `src/styles.css`
- Design tokens (background, foreground, primary cyan, glow, gradient, shadow) added as semantic CSS variables in `src/styles.css` — no hardcoded colors in components
- Routes: one file per page under `src/routes/`, each exporting `head()` with unique title + description
- Replace `src/routes/index.tsx` placeholder with real home
- Project images: use placeholder gradient blocks (no external image URLs from the reference)
- Form: client-side only with toast confirmation; no backend wired up

## Out of scope (for now)

- Real backend / email sending on contact form
- CMS or database (Lovable Cloud)
- Light theme toggle, music player, language switcher (the reference's side rail icons are decorative only here)
- Per-project detail pages

Once you approve, I'll build it and you can swap placeholder text/links for your real info.
