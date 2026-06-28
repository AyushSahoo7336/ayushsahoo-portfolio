## Hero Social Row + Remove Let's Talk

### 1. `src/components/sections/Hero.tsx`
Add a new row below the View Details / Let's Talk button group:

- Container: `mt-8 flex flex-row flex-wrap items-center gap-4`
- Three circular icon buttons (`h-11 w-11 grid place-items-center rounded-full`):
  - Mail → `mailto:ayush733695@gmail.com`
  - Github → GitHub profile URL (from `src/data/portfolio.ts`)
  - Linkedin → LinkedIn profile URL (from `src/data/portfolio.ts`)
- One pill button: `Code2` icon + `LeetCode` text + `ExternalLink` icon → LeetCode profile URL (from portfolio data)
- All buttons: `bg-white/5 border border-white/10 text-muted-foreground transition-all duration-300 hover:border-[color:var(--primary-accent)] hover:text-[color:var(--primary-accent)] hover:scale-105`
- All open in new tab with `target="_blank" rel="noreferrer"` (except mailto)
- Icons from `lucide-react`: `Mail`, `Github`, `Linkedin`, `Code2`, `ExternalLink`

Use the existing profile/contact links already defined in `src/data/portfolio.ts` (Email, GitHub, LinkedIn, LeetCode are already present from earlier work). I'll view that file to grab the exact field names before editing.

### 2. Remove "Let's Talk" section
- `src/routes/index.tsx`: remove the `LetsTalkSection` import and its `<Section id="lets-talk">` block.
- Delete `src/components/sections/LetsTalkSection.tsx`.
- `src/components/site/Navbar.tsx`: remove any `lets-talk` nav link / scroll target if present (will verify and clean up).
- Hero's existing "Let's Talk" CTA button: leave as-is (it scrolls to contact instead — repoint `scrollTo("lets-talk")` → `scrollTo("contact")`).

### Notes
- No new dependencies.
- Accent color hover uses the existing `--primary-accent` CSS var so it follows the theme switcher.
- No changes to business logic or data.
