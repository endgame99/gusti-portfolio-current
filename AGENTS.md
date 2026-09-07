# GUSTI repository rules

## Authority

The user's current request wins. Verify behavior against current code and assets. Product intent lives in [docs/PRD.md](docs/PRD.md); visual rules live in [docs/UI_GUIDELINES.md](docs/UI_GUIDELINES.md). Reference captures under docs/references are optional evidence, not product truth.

## Structure

- src/app: application entry, settings, navigation.
- src/components/layout: shared header, sidebar and shell.
- src/components/home and src/components/work: reusable page content.
- src/pages: destination composition, including standalone service pages.
- src/content: the single home for project, service, Library, highlight and contact data.
- src/styles: foundation, layout, hero and Contoura styles in cascade order.
- public/media: project and service assets; public/brand, flags and fonts hold shared assets.

## Editing

Keep changes within the user-authorized scope. Before editing, identify affected files and why. Do not add dependencies, business features, invented copy, or unrelated redesign without authorization. Global layout/navigation/data/config changes need an explicit relevant task. Preserve real assets and user changes. Delete only proven unused files or duplicates; inspect dynamic media paths before removal.

Never invent client identity, role, dates, prices, metrics, testimonials, awards, ROI or case-study details. Missing detail data displays the existing work preview; it must not generate plausible facts or stock-image substitutes. Keep content outside components. Reuse AppShell and SiteSettingsProvider across pages.

## Git and validation

main is the canonical integrated baseline. Use short-lived task branches; integrate only after checks and user authorization. Retire branches only once their commits are included in main. Never force-push away work.

Run npm run check, npm run lint, and npm run build. For rendered changes, inspect the browser and exercise affected flows. Document remaining failures honestly. Summarize files changed, moved and deleted using the Git diff. Keep temporary scripts, screenshots, traces, and reports outside the repository.
