## Plan: Update Hero Profile Photo

### What I'll do

1. **Create the new asset pointer**
   - Write `src/assets/photo3.png.asset.json` from the already-generated CLI output.

2. **Update `src/components/sections/Hero.tsx`**
   - Swap the import from `profile.jpeg.asset.json` to `photo3.png.asset.json`.
   - Strip `rounded-3xl` and `overflow-hidden` from the image container so it is invisible.
   - Apply the exact bottom-fade mask the user specified:
     `maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'`
   - Change the `<img>` to `object-contain object-bottom` and scale it to fit the waist-up framing proportionally inside the right column.
   - Keep the ambient accent-colored radial glow and the gentle floating `y: [0, -10, 0]` animation untouched.

### Files touched
- `src/assets/photo3.png.asset.json` (new)
- `src/components/sections/Hero.tsx` (import + image container edits)

No other files change.