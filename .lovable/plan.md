## Plan

Three small, focused fixes to match the reference site behavior.

### 1. Expand accent palette (theme cycling like reference)

The reference site cycles through ~8 accent colors. Currently only Sea/Forest/Ember exist.

- Update `src/context/AccentContext.tsx` `ACCENTS` map to include: Sea (cyan `#22d3ee`), Forest (`#22c55e`), Ember (`#f97316`), Violet (`#a855f7`), Rose (`#f43f5e`), Sun (`#facc15`), Sky (`#3b82f6`), Magenta (`#ec4899`).
- Update `ControlRail.tsx` `ACCENT_OPTS` to list all 8 in the palette panel as swatch buttons (grid of color dots).

### 2. Hand-wave emoji tinted by accent

In `src/components/sections/Hero.tsx`, the waving `👋` is a colored emoji and doesn't recolor. Make it follow the accent:

- Wrap the emoji in a span with `style={{ color: 'var(--primary-accent)' }}` and apply a CSS mask using a hand SVG so the shape is filled with `currentColor` (var). Simpler approach: replace the emoji with the lucide `Hand` icon (or an inline SVG hand) styled with `color: var(--primary-accent)` and the existing wave animation. This recolors instantly with the theme.

### 3. Slow down Matrix Rain

In `src/components/site/effects/MatrixRain.tsx`:
- Increase frame throttle from `60ms` to `120ms` (about half speed) for a calm, readable rain matching the reference.
- Soften trail fade slightly (`rgba(4,8,20,0.05)` → longer trails) so characters linger.

### Verification

After changes, run Playwright against `localhost:8080`: open palette panel, click each swatch, screenshot Hero to confirm name + hand both recolor. Switch effect to Matrix Rain and capture a screenshot to confirm slower fall.
