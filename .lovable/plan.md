## Swap Hero Photo to photohd.png

1. Upload the new image via `lovable-assets` and write `src/assets/photohd.png.asset.json`.
2. Delete the old `src/assets/photo3.png.asset.json`.
3. In `src/components/sections/Hero.tsx`:
   - Replace photo3 import with photohd asset.
   - Remove `scale-[1.15]` upscaling.
   - Remove the bottom-fade mask (image is already clean waist-up).
   - Adjust container sizing so it fits naturally (no excess space above/below).
   - Keep floating animation; reposition the accent glow to sit centered behind the shoulders/head of the new framing.