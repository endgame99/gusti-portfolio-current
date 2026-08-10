# GUSTI Portfolio Agent Rules

## 1. Authority and source of truth

Use this order when instructions conflict:

1. The user's explicit request for the current task.
2. Current repository code, data, and local assets.
3. `UI_GUIDELINES.md` for UI tasks only.
4. A task-specific reference named by the user.
5. Optional material in `agent-resources/`.

There is one active UI policy: `UI_GUIDELINES.md`. No disabled or archived copy is authoritative.

Never treat an old report, task queue, reference dump, or generic agent prompt as product truth. If required facts are absent from the current sources above, report `MISSING_DATA_REQUIRED`; do not invent them.

## 2. Project shape

This is a React 19, TypeScript, Vite, and Tailwind CSS v4 portfolio app.

- `src/App.tsx` owns the main app shell and state-based navigation. It also selects the standalone service pages by pathname.
- `src/data.ts` and `src/data/projectDetails.ts` contain product content and project detail data.
- `src/components/ProjectDetail.tsx` is a controller that delegates to files in `src/components/project-details/`.
- `src/components/services/` contains standalone service pages.
- `public/` contains production media and fonts.

Read `PROJECT_CONTEXT.md` for the current architecture map. Verify it against code before relying on it.

## 3. Scope discipline

Keep every change inside the requested scope. Do not turn a narrow task into a global cleanup, redesign, data rewrite, architecture migration, or dependency change.

Before editing, state:

1. Exact files planned to be touched.
2. Why each file is in scope.
3. Important files and areas that will not be touched.

During editing:

- Preserve existing behavior outside the task.
- Do not refactor unrelated files.
- Do not add dependencies without explicit approval.
- Do not add backend, database, authentication, payment, or CMS features unless requested.
- Do not rename major production files unless the task requires it.

The following are high-risk and must not be edited unless the user explicitly puts them in scope:

- `src/App.tsx`
- `src/data.ts`
- `src/data/projectDetails.ts`
- `src/components/GustiSidebar.tsx`
- `src/components/GustiTopHeader.tsx`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `tsconfig.json`
- global navigation or routing logic

## 4. Factual integrity

Never invent client facts, locations, statistics, rankings, badges, testimonials, pricing, ROI claims, awards, process names, team facts, before/after claims, or platform metrics.

Use only verified repository content or facts explicitly supplied by the user. A visual reference is evidence for layout or interaction, not evidence for business claims or product data.

## 5. UI tasks

For tasks involving layout, spacing, typography, visual hierarchy, responsive behavior, media presentation, cards, grids, controls, or motion:

1. Read `UI_GUIDELINES.md`.
2. Inspect the affected implementation.
3. Use only references named for the current task.
4. Keep reference-derived changes inside that task's scope.

The active task overrides the default guideline. A task-specific reference does not become a new global design system.

## 6. Agent resources

`agent-resources/README.md` is the index for optional references and legacy prompts.

- `agent-resources/references/` contains evidence and structural examples. These files are read-only unless the task is specifically about reference maintenance.
- `agent-resources/legacy-prompts/` contains historical prompt material. It is not an installed skill and must not override this file or `UI_GUIDELINES.md`.
- Do not load all references by default. Read only the reference relevant to the current task.

## 7. Verification and reporting

After implementation:

1. Run `npm run build`.
2. Run `npm run lint` when TypeScript or application code changed, or when broader verification is useful.
3. List exact files changed, moved, and deleted.
4. Explain the behavioral or visual impact.
5. Confirm important areas intentionally left unchanged.
6. Report warnings and missing data plainly.

Use small, focused branches for risky work. Do not work on `main` for unreviewed visual or architectural changes.
