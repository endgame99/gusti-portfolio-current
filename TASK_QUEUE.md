# TASK_QUEUE.md — GUSTI Website Finishing Plan

## How To Use This File

Work one task at a time.

Do not skip to global polish.

Before each task:
1. Create or switch to the correct branch.
2. Read `AGENTS.md`.
3. Read `PROJECT_CONTEXT.md`.
4. Confirm allowed files and forbidden files.
5. Keep the change small.

After each task:
1. Run `npm run build` or `npm.cmd run build`.
2. Review the localhost result.
3. Commit.
4. Push to GitHub.
5. Continue only after the user approves.

---

## Phase 0 — Current Completed Setup

Status:

- [x] ZIP extracted
- [x] Project opened in Antigravity
- [x] `npm.cmd install` passed
- [x] `npm.cmd run dev` passed
- [x] Website runs on `http://localhost:3000`
- [x] Git initialized
- [x] Baseline committed: `baseline from google ai studio`
- [x] GitHub repo created: `endgame99/gusti-portfolio-current`
- [x] Baseline pushed to GitHub

---

## Phase 1 — Agent Control Files

### Task 1.1 — Add agent rules

Branch:

`setup/agent-rules`

Goal:

Add root-level control files for safer AI/agent work.

Allowed files:

- `AGENTS.md`
- `PROJECT_CONTEXT.md`
- `TASK_QUEUE.md`

Forbidden files:

- `src/App.tsx`
- all `src/components/*`
- all `src/data*`
- package/config files

Acceptance criteria:

- Files are added.
- No app code changes.
- Build still passes.

Commands:

```bash
git checkout -b setup/agent-rules
git add AGENTS.md PROJECT_CONTEXT.md TASK_QUEUE.md
git commit -m "add agent control docs"
git push -u origin setup/agent-rules
```

---

## Phase 2 — Architecture Isolation

### Task 2.1 — Isolate Project Detail Architecture

Branch:

`architecture/isolate-project-details`

Goal:

Make project detail pages editable independently.

Required target structure:

- `src/components/ProjectDetail.tsx`
- `src/components/project-details/StarmapDetail.tsx`
- `src/components/project-details/AlfasDetail.tsx`
- `src/components/project-details/FabilDetail.tsx`
- `src/components/project-details/FatSportDetail.tsx`
- `src/components/project-details/DefaultProjectDetail.tsx`

Allowed files:

- `src/components/ProjectDetail.tsx`
- `src/components/project-details/StarmapDetail.tsx`
- `src/components/project-details/AlfasDetail.tsx`
- `src/components/project-details/FabilDetail.tsx`
- `src/components/project-details/FatSportDetail.tsx`
- `src/components/project-details/DefaultProjectDetail.tsx`

Forbidden files:

- `src/App.tsx`
- `src/components/Services.tsx`
- `src/components/Library.tsx`
- `src/components/RecommendedWorks.tsx`
- `src/components/GustiSidebar.tsx`
- `src/components/GustiTopHeader.tsx`
- `src/data.ts`
- `src/data/projectDetails.ts`
- package/config files

Important:

This is not a redesign task.

Do not polish visuals yet.

Acceptance criteria:

- `ProjectDetail.tsx` acts as wrapper/controller.
- `w1` uses `StarmapDetail`.
- `w2` uses `AlfasDetail`.
- `w3` uses `FabilDetail`.
- `w4` uses `FatSportDetail`.
- Other projects use `DefaultProjectDetail`.
- Visual output should remain mostly unchanged or intentionally minimal.
- Build passes.

Agent prompt:

```txt
Read AGENTS.md and PROJECT_CONTEXT.md first.

Task:
Only isolate the Project Detail architecture.

Do not redesign.
Do not polish visuals.
Do not change copywriting.
Do not add animations.
Do not perform global cleanup.

Keep ProjectDetail.tsx as wrapper/controller.
Create the dedicated detail components listed in TASK_QUEUE.md.
Use conditional rendering by work.id.

After implementation:
1. Run build.
2. List exact files changed.
3. Confirm homepage, services, library, navigation, and App.tsx were not changed.
4. Confirm future STARMAP edits can happen inside StarmapDetail.tsx only.
```

---

## Phase 3 — STARMAP Detail Page

### Task 3.1 — Rebuild STARMAP Detail Direction

Branch:

`rebuild/starmap-detail`

Goal:

Make STARMAP a premium, clean, visual-first, long vertical detail page.

Allowed files:

- `src/components/project-details/StarmapDetail.tsx`
- `src/data/projectDetails.ts` only if STARMAP-specific content/media needs adjustment

Forbidden files:

- `src/App.tsx`
- `src/components/Services.tsx`
- `src/components/Library.tsx`
- other project detail components
- global navigation
- routing
- unrelated data

Visual direction:

- WConcept-like clean editorial/product detail page
- large title
- short intro
- clean project summary
- vertical image/video blocks
- flexible media layout
- Strategic Brief
- Creative Direction
- Scope
- clean final CTA
- premium spacing
- responsive desktop/mobile

Remove/avoid:

- fake creator platform UI
- rank badges
- fake stats
- fake location
- fake creator profile row
- Virtual Casting
- Fidelity Lock
- Obsidian Dunes
- AI Spec Blueprint
- before/after slider unless real before/after assets exist

Acceptance criteria:

- Only STARMAP changes.
- No other project detail pages changed.
- No hallucinated/fake claims.
- Build passes.
- Localhost visual review approved by user.

---

## Phase 4 — Other Project Details

### Task 4.1 — Polish Alfas Detail Page

Branch:

`rebuild/alfas-detail`

Allowed files:

- `src/components/project-details/AlfasDetail.tsx`
- `src/data/projectDetails.ts` only if Alfas-specific content/media needs adjustment

Goal:

Clean premium fragrance/packaging/ecommerce detail page.

Acceptance criteria:

- Only Alfas changes.
- Build passes.

---

### Task 4.2 — Polish Fabil Detail Page

Branch:

`rebuild/fabil-detail`

Allowed files:

- `src/components/project-details/FabilDetail.tsx`
- `src/data/projectDetails.ts` only if Fabil-specific content/media needs adjustment

Goal:

Clean premium beauty/skincare detail page.

Acceptance criteria:

- Only Fabil changes.
- Build passes.

---

### Task 4.3 — Polish FATSPORT Detail Page

Branch:

`rebuild/fatsport-detail`

Allowed files:

- `src/components/project-details/FatSportDetail.tsx`
- `src/data/projectDetails.ts` only if FATSPORT-specific content/media needs adjustment

Goal:

Clean sports/product creative detail page.

Acceptance criteria:

- Only FATSPORT changes.
- Build passes.

---

### Task 4.4 — Polish Default Project Detail

Branch:

`polish/default-project-detail`

Allowed files:

- `src/components/project-details/DefaultProjectDetail.tsx`

Goal:

Make fallback project detail safe, clean, and not fake.

Acceptance criteria:

- No fake project-specific claims.
- Works for projects without detailed content.
- Build passes.

---

## Phase 5 — Services Section

### Task 5.1 — Polish Services Section

Branch:

`polish/services`

Allowed files:

- `src/components/Services.tsx`
- `src/data.ts` only if service order/copy needs adjustment

Forbidden files:

- project detail files
- homepage hero
- global navigation
- `src/App.tsx`

Goal:

Make Services easier for B2B clients to understand.

Direction:

- clear service categories
- concise descriptions
- better spacing
- premium layout
- stronger CTA
- not too many cards at once
- no fake promises

Acceptance criteria:

- Only Services changes.
- Build passes.
- Localhost visual review approved by user.

---

## Phase 6 — Library Section

### Task 6.1 — Polish Library Section

Branch:

`polish/library`

Allowed files:

- `src/components/Library.tsx`
- `src/data.ts` only if library data/order/copy needs adjustment

Forbidden files:

- project detail files
- services
- homepage hero
- global navigation
- `src/App.tsx`

Goal:

Make Library feel like a curated creative/reference system, not random cards.

Direction:

- clear categories
- visual hierarchy
- clean grid/masonry
- short explanations
- useful for B2B pitching
- no fake source claims

Acceptance criteria:

- Only Library changes.
- Build passes.
- Localhost visual review approved by user.

---

## Phase 7 — Responsive QA

### Task 7.1 — Mobile/Tablet/Desktop QA

Branch:

`qa/responsive-polish`

Allowed files:

- only files required to fix confirmed responsive issues

Goal:

Fix confirmed responsive issues after section polish is approved.

Check widths:

- 390px mobile
- 430px mobile
- 768px tablet
- 1024px tablet/desktop
- 1440px desktop

Acceptance criteria:

- No horizontal overflow.
- Tap targets usable.
- Images do not break layout.
- Sidebar/header do not cover content.
- Detail pages remain readable.
- Build passes.

---

## Phase 8 — Final Cleanup

### Task 8.1 — Final Production Cleanup

Branch:

`final/production-cleanup`

Do this only after the user approves all visual sections.

Allowed changes:

- update WhatsApp link in `src/data.ts`
- remove unused imports if safe
- replace external placeholder assets if provided
- run final build
- prepare Vercel deployment

Forbidden:

- no redesign
- no new sections
- no new copywriting claims

Acceptance criteria:

- Build passes.
- User approves localhost.
- Ready to deploy to Vercel.
