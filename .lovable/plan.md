- Plan: Replace placeholder content with Ayush's real data

### 1. `src/data/portfolio.ts` — single source of truth

- **profile**: name `Ayush Sahoo`, shortName `AYUSH`, role `Software Engineer`, tagline updated, remove old quote (or repurpose), stats become `{ value: "3rd Year", label: "Information Science" }` and `{ value: "3", label: "Projects Shipped" }`.
- **marqueeWords**: refresh to fit the new focus — `SOFTWARE ENGINEER`, `REACT`, `NODE.JS`, `WEBRTC`, `DISTRIBUTED SYSTEMS`, `TYPESCRIPT`, `REAL-TIME`, `2026`.
- **bio**: replace with the two new paragraphs.
- **education**: single entry — `B.E. in Information Science`, `Sir M. Visvesvaraya Institute of Technology`, `2023 – 2027`, extra `CGPA: 8.26 / 10.0`.
- **ProjectCategory**: narrow to `"Web Apps"` only; `projectCategories` becomes `["All", "Web Apps"]`.
- **projects**: replace all 8 with VidMeet, GitVerse, StockFlow (with github + demo links and tasteful accent gradients).
- **contacts**: Email, GitHub, LinkedIn, LeetCode (`Code2` icon), WhatsApp — drop Twitter/Instagram.
- **skills**: tighten to match new focus (Frontend / Backend / Real-Time Systems / Data Structures & Algorithms) so the About section stays relevant.
- **experiences**: replace with project-based "What I've built" entries (VidMeet 2025, GitVerse 2025, StockFlow 2024) so the Experience section isn't fake jobs.

### 2. Component tweaks

- **Hero.tsx**: extend `Timeline`/`education` typing change — add `extra?: string` support so CGPA line renders. Keep quote block but hide it if `profile.quote` is empty (cleaner look). No layout changes otherwise.
- **EducationSection / Timeline.tsx**: read & render the optional `extra` line under each item (small accent-colored text for CGPA).
- **ProjectsSection.tsx**: no logic change; categories array shrink is enough. Verify filter pill colors still work.
- **ContactSection.tsx**: extend the `ICONS` map to include `Code2` for LeetCode.

### 3. Out of scope

- No restyling, no new sections, no routing changes. Light/dark theming, cursor, spotlight, preloader all untouched.

Result: every visible label, link, and stat reflects Ayush's real profile; Projects filters reduce to `All / Web Apps`; Contact grid shows the 5 requested cards including LeetCode.