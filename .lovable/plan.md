The user wants the About Me section rebuilt to match the attached reference screenshot (from ybz.vercel.app) and the entire Work Experience section removed.

### Changes

1. **Remove Work Experience from the page**
   - In `src/routes/index.tsx`, remove the `<Section id="experience"><ExperienceSection /></Section>` line and its import.
   - In `src/data/portfolio.ts`, remove `{ id: "experience", label: "Experience" }` from `navSections`.

2. **Rebuild `src/components/sections/AboutSection.tsx`**
   - Replace the current content with a layout matching the reference:
     - **Header**: "About Me" title with **Me** in `var(--primary-accent)`. Subtitle: "I'm a software developer focused on execution. Less talk, more shipped products."
     - **Card**: One large full-width glass card (`interactive-card`, `rounded-2xl`, `bg-[var(--glass-bg)]`, `border-[var(--glass-border)]`, `shadow-[var(--glass-shadow)]`, `backdrop-blur-sm`) containing a two-column layout.
     - **Left side (~55-60%)**:
       - Heading: "Biography" in `font-display text-2xl font-semibold`.
       - Bio paragraphs from `src/data/portfolio.ts` (Ayush's real text), rendered as `text-foreground/70` with relaxed line-height.
     - **Right side (~40-45%)**:
       - A CSS-only 3D atom/orbit visualization: a central glowing nucleus (`var(--primary-accent)`) and three elliptical orbital rings tilted at different angles, each with a small orbiting electron dot. Built with absolute positioning, `border`, `border-radius: 50%`, `rotateX`/`rotateY`, and CSS `@keyframes` animations.
   - Remove the existing skills accordion grid entirely.

3. **Update `src/components/site/PageHeader.tsx`**
   - Change the `title` prop type from `string` to `ReactNode` so inline accent spans can be passed through.

### Result
The page will scroll: Hero → Marquee → What I Create → About (new card layout) → Education → Projects → Contact → Let's Talk. No Work Experience section. The About section will visually mirror the reference screenshot's single glass card with biography text on the left and the animated atom graphic on the right.