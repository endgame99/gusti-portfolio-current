# PROJECT_CONTEXT.md — Current Website State

## 1. Repository State

This project was originally created in Google AI Studio and has been moved into a local Antigravity/Git/GitHub workflow.

Current local baseline has already been committed with:

`baseline from google ai studio`

The current repository is now the source of truth.

Do not use old Google AI Studio reports as truth if they conflict with current code.

---

## 2. Tech Stack

From `package.json`:

- React: `^19.0.1`
- React DOM: `^19.0.1`
- TypeScript: `~5.8.2`
- Vite: `^6.2.3`
- Tailwind CSS: `^4.1.14`
- Tailwind Vite plugin: `@tailwindcss/vite`
- Motion: `^12.23.24`
- Lucide React: `^0.546.0`
- clsx: `^2.1.1`
- tailwind-merge: `^3.6.0`

Scripts:

- `npm run dev` → `vite --port=3000 --host=0.0.0.0`
- `npm run build` → `vite build`
- `npm run preview` → `vite preview`
- `npm run lint` → `tsc --noEmit`

This is currently a frontend/client-side app.

Backend is not required for the current finishing phase.

---

## 3. Current App Architecture

Main app control:

- `src/App.tsx`

Main data:

- `src/data.ts`
- `src/data/projectDetails.ts`

Main UI components:

- `src/components/GustiSidebar.tsx`
- `src/components/GustiTopHeader.tsx`
- `src/components/HeroCarousel.tsx`
- `src/components/RecommendedWorks.tsx`
- `src/components/Services.tsx`
- `src/components/Library.tsx`
- `src/components/ProjectDetail.tsx`
- `src/components/CaseStudyModal.tsx`
- `src/components/Lightbox.tsx`
- `src/components/Tabs.tsx`

Utilities/types:

- `src/types.ts`
- `src/i18n.ts`
- `src/lib/utils.ts`
- `src/index.css`
- `src/main.tsx`

Assets:

- `public/starmap.jpg`
- `public/alfas fragrance.jpeg`
- `public/fabil natural.jpg`
- `public/fatsport.id.jpg`
- `public/palesun.jpg`
- `public/contoura.jpg`
- `public/bosie.jpg`
- `public/pdp visual system.jpg`
- `public/ai ugc video direction.jpg`
- `public/upcoming project.jpg`
- `public/hero_01.webp`
- `public/hero_02.webp`
- `public/hero_03.webp`

---

## 4. Navigation Model

The app is a single-page app with state-based navigation.

It is not currently using file-based routes.

Important state is controlled in `src/App.tsx`, including:

- active navigation/tab
- active project
- search
- theme
- language

Because of this, `src/App.tsx` is high-risk and should not be edited unless explicitly requested.

---

## 5. Work Cards / Portfolio Data

Main work data lives in `src/data.ts` as `worksData`.

Important IDs:

- `w1` → STARMAP
- `w2` → Alfas Fragrance
- `w3` → Fabil Natural
- `w4` → FATSPORT.ID
- `w5` → PALESUN
- `w6` → CONTOURA
- `w7` → BOSIE
- `w8` → PDP Visual System
- `w9` → AI UGC Video Direction
- `w10` → Upcoming Project
- `w11` → XIONGJIAN Active
- `w12` to `w24` → additional/repeated or fallback project entries

Detailed project data currently exists in `src/data/projectDetails.ts` for:

- `w1`
- `w2`
- `w3`
- `w11`

Other projects may use fallback detail generation.

---

## 6. Current Known UI/UX Problems

The website is running, but not visually final.

Known issues:

1. Project detail pages are not final.
2. `ProjectDetail.tsx` is still too global.
3. STARMAP detail page direction is not yet right.
4. STARMAP currently contains too much ZCOOL-style / creator-profile-style UI.
5. STARMAP contains unapproved or overly technical AI jargon.
6. STARMAP has a before/after slider using non-authoritative "before" imagery; this should not be treated as factual before/after unless real assets are provided.
7. Services section is not final.
8. Library section is not final.
9. Some assets still use external URLs, especially Unsplash and ZCOOL image references.
10. WhatsApp link currently uses a placeholder number in `src/data.ts`.
11. Some copy may still be placeholder or generic.
12. Responsive QA still needs to be done after layout decisions are final.

---

## 7. Correct Interpretation of Current ProjectDetail

Current `src/components/ProjectDetail.tsx` is not empty.

It contains multiple sections, including project title/header, creator-style row, info grid, narrative sections, STARMAP-specific slider/spec sections, media gallery, credits, and CTA.

The issue is not that the page is missing code.

The issue is that the current layout/copy/section strategy is not aligned with the user's desired finishing direction.

Desired direction for STARMAP:

- visual-first
- clean
- long vertical
- WConcept-like editorial/product detail style
- minimal UI chrome
- no fake creator stats/ranks
- no fake process names
- no fake before/after claims
- no overbuilt dashboard-style UI

---

## 8. Sections That Need Finishing

Priority order:

1. Architecture isolation for ProjectDetail
2. STARMAP detail page
3. Alfas detail page
4. Fabil detail page
5. FATSPORT detail page
6. Other project detail fallback
7. Services section
8. Library section
9. Responsive QA
10. Final homepage/general polish only after the above are stable

---

## 9. What Not To Build Yet

Do not build backend yet.

Do not add:

- database
- CMS
- admin dashboard
- login
- upload system
- API routes
- payment system
- booking system
- server-side rendering migration

The current phase is frontend finishing only.

---

## 10. Deployment

Vercel is planned later, after more UI/UX finishing.

Current review environment:

- Localhost: `http://localhost:3000`

Local commands:

```bash
npm.cmd run dev
npm.cmd run build
```

On non-Windows terminals, use:

```bash
npm run dev
npm run build
```
