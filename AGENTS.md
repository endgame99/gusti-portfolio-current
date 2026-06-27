# AGENTS.md — GUSTI Portfolio Website

## 0. Source of Truth

The current repository code is the source of truth.

Do not rely on assumptions, old reports, imagined requirements, or previous AI summaries if they conflict with the actual code.

If a fact is not present in:
- current repository code
- existing data files
- uploaded assets
- explicit user instruction

then treat it as missing.

When data is missing, write:

`MISSING_DATA_REQUIRED`

Do not invent.

---

## 1. Project Context

This is a frontend portfolio website for GUSTI.

Current tech stack from the repository:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- `motion`
- `lucide-react`
- `clsx`
- `tailwind-merge`

The app is currently a client-side single-page app. Navigation is state-based, not file-route based.

Important files:

- `src/App.tsx` controls the main app state, navigation, search, language, theme, tabs, and active project.
- `src/data.ts` contains main portfolio/work data, service data, library data, hero slides, WhatsApp link, and social links.
- `src/data/projectDetails.ts` contains detailed project data and fallback project detail generation.
- `src/components/ProjectDetail.tsx` currently controls project detail rendering globally.
- `src/components/RecommendedWorks.tsx` controls the work grid/gallery.
- `src/components/Services.tsx` controls the services section/tab.
- `src/components/Library.tsx` controls the library section/tab.
- `src/components/HeroCarousel.tsx` controls the hero carousel.
- `src/components/GustiSidebar.tsx` and `src/components/GustiTopHeader.tsx` control global navigation/header UI.

---

## 2. Current Product Status

The website is not visually final yet.

Current finishing priorities:

1. Make project detail pages easier to edit per work card.
2. Rebuild/polish STARMAP detail page first.
3. Polish other important project detail pages.
4. Polish Services section.
5. Polish Library section.
6. QA responsive behavior.
7. Later connect/deploy with Vercel when the user is ready.

Do not treat the current website as final UI.

---

## 3. Critical Rule: No Global Cleanup

Do not perform global cleanup unless explicitly requested.

If the task is about STARMAP, only work on STARMAP.

If the task is about Services, only work on Services.

If the task is about Library, only work on Library.

If the task is about ProjectDetail architecture, only isolate architecture; do not redesign.

Never convert a narrow task into a full website polish task.

---

## 4. Anti-Hallucination Rules

Never invent:

- fake client facts
- fake client locations
- fake production statistics
- fake rankings
- fake badges
- fake testimonials
- fake pricing
- fake ROI claims
- fake before/after assets
- fake AI process names
- fake production methodology
- fake agency/team facts
- fake awards
- fake case study metrics

Avoid or remove unapproved terms such as:

- Virtual Casting
- Fidelity Lock
- Obsidian Dunes Synthesis
- AI Spec Blueprint
- Commercial Efficiency 85%
- fake creator rank
- fake profile statistics
- fake view counts
- fake copyright/platform UI claims

Use only factual content that exists in the code or is explicitly provided by the user.

If stronger copy is needed but data is missing, return `MISSING_DATA_REQUIRED` and explain what data is needed.

---

## 5. Visual Direction

Overall website direction:

- premium
- clean
- B2B
- editorial
- visual-first
- modern
- easy to understand
- restrained, not cluttered
- strong spacing
- strong hierarchy

Homepage direction from user memory/context:

- clean AKQA-like restraint
- Gemini-like clarity and smoothness
- not generic CV template
- not irrelevant dummy content

Project detail page direction:

- long vertical page
- visual-first
- clean title
- short intro
- flexible image/video blocks
- project narrative
- strategic brief
- creative direction
- scope
- clean final CTA
- minimal UI chrome
- premium spacing
- responsive desktop/mobile

STARMAP detail page direction:

- closer to clean WConcept-like editorial/product detail page
- not a ZCOOL-heavy creator profile page
- not dashboard-like
- not filled with fake badges/stats/jargon
- focus on visual presentation and project narrative

---

## 6. Workflow Rules

Before editing, the agent must state:

1. Exact files planned to be touched.
2. Why those files need to be touched.
3. Exact files that will not be touched.

During editing:

1. Keep changes small.
2. Do not refactor unrelated files.
3. Do not redesign unrelated sections.
4. Do not edit global navigation unless explicitly requested.
5. Do not edit `src/App.tsx` unless explicitly requested.
6. Do not edit `package.json` or `vite.config.ts` unless explicitly requested.
7. Do not change project data for unrelated projects.
8. Do not add new dependencies unless explicitly approved by the user.
9. Do not rename major files unless it is part of the requested architecture task.
10. Do not add backend/server/database features unless explicitly requested.

After editing:

1. Run `npm run build`.
2. If TypeScript checking is needed, run `npm run lint`.
3. List exact files changed.
4. Explain visual changes.
5. Confirm what was not changed.
6. Mention any missing data instead of inventing.

---

## 7. Forbidden Files Unless Explicitly Requested

Do not edit these unless the user explicitly asks:

- `src/App.tsx`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `tsconfig.json`
- `src/components/GustiSidebar.tsx`
- `src/components/GustiTopHeader.tsx`
- global navigation
- routing/navigation logic
- homepage hero
- unrelated project data
- unrelated sections

---

## 8. First Recommended Architecture Task

Before major visual polishing, isolate Project Detail rendering.

Reason:
`src/components/ProjectDetail.tsx` currently controls project detail rendering globally. This makes narrow visual edits risky because a STARMAP task can accidentally affect all project detail pages.

Target structure:

- `src/components/ProjectDetail.tsx`
- `src/components/project-details/StarmapDetail.tsx`
- `src/components/project-details/AlfasDetail.tsx`
- `src/components/project-details/FabilDetail.tsx`
- `src/components/project-details/FatSportDetail.tsx`
- `src/components/project-details/DefaultProjectDetail.tsx`

`ProjectDetail.tsx` should act as a wrapper/controller.

Suggested conditional rendering:

- `w1` → `StarmapDetail`
- `w2` → `AlfasDetail`
- `w3` → `FabilDetail`
- `w4` → `FatSportDetail`
- all others → `DefaultProjectDetail`

The goal is not to redesign. The goal is to make future page-by-page finishing safe and fast.

---

## 9. Branch Discipline

Use small branches.

Recommended branch names:

- `setup/agent-rules`
- `architecture/isolate-project-details`
- `rebuild/starmap-detail`
- `rebuild/alfas-detail`
- `rebuild/fabil-detail`
- `rebuild/fatsport-detail`
- `polish/services`
- `polish/library`
- `qa/responsive-polish`

Do not work directly on `main` for risky visual changes.

---

## 10. User Communication Style

The user wants direct, practical instructions.

Avoid vague explanations.

Use step-by-step instructions.

When reporting changes, be specific:

Good:
- `Changed src/components/project-details/StarmapDetail.tsx only.`
- `No homepage, services, library, navigation, or data files were changed.`
- `Build passed.`

Bad:
- `I improved the website overall.`
- `I made it more premium.`
- `I optimized the entire app.`
