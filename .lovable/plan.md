Add the user's profile photo to the Hero section on the right side, similar to the Prashant Kumar reference (photo only — no other layout changes).

## What I'll do

1. **Upload photo as CDN asset**
   - Run `lovable-assets create` on `/mnt/user-uploads/profile.jpeg` → write `src/assets/profile.jpeg.asset.json`.

2. **Update `src/components/sections/Hero.tsx`**
   - Convert the hero into a two-column layout on `md+` screens:
     - Left column: existing content (greeting, name, typewriter, tagline, quote, stats, buttons) — unchanged.
     - Right column: the profile photo, anchored bottom-right, with:
       - Soft accent-colored radial glow behind it (uses `var(--primary-accent)`).
       - Subtle floating animation via framer-motion (gentle y-axis loop).
       - Rounded/feathered bottom edge fade for a clean blend with the dark background.
       - Responsive: photo hidden on small screens (`hidden md:block`) so mobile stays as-is.
   - Keep `min-h-screen`, scroll arrow, and all other elements unchanged.

## Files touched
- `src/assets/profile.jpeg.asset.json` (new)
- `src/components/sections/Hero.tsx` (layout update only)

Nothing else in the site changes.
