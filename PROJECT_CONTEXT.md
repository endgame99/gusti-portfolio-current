# GUSTI Portfolio Project Context

This file is a concise orientation map, not an independent source of product truth. When it differs from the code, the code wins.

## Runtime

- React 19 and React DOM 19
- TypeScript 5.8
- Vite 6
- Tailwind CSS v4 through `@tailwindcss/vite`
- Motion, Lucide React, clsx, and tailwind-merge

The site is primarily a client-side application. No backend is required for the current portfolio experience.

## Application architecture

- `src/App.tsx`: main shell, language/theme state, query-driven tabs, project selection, and pathname selection for standalone service pages.
- `src/data.ts`: portfolio, services, library, hero, contact, and social data.
- `src/data/projectDetails.ts`: detailed project content and fallback generation.
- `src/components/ProjectDetail.tsx`: detail-page controller.
- `src/components/project-details/`: dedicated Contoura, Alfas, Fabil, FATSPORT, and fallback renderers.
- `src/components/services/PdpVisualsPage.tsx`: standalone `/services/pdp-visuals` page.
- `src/components/services/MarketplaceDisplayPage.tsx`: standalone `/services/marketplace-display` page.
- `public/`: production images, video, and fonts.

Main navigation remains state/query based rather than a file-router architecture.

## Agent documentation

- `AGENTS.md`: authoritative agent behavior and scope rules.
- `UI_GUIDELINES.md`: the single active default UI policy.
- `agent-resources/README.md`: optional reference routing.
- `TASK_QUEUE.md`: lightweight planning notes only; it does not authorize work.

## Known constraints

- Some portfolio entries use fallback detail content.
- Some media still uses external URLs.
- Product data and claims must not be inferred from reference material.
- App shell, data, navigation, and package/config files are high-risk surfaces.
- Visual and responsive quality should be verified task by task rather than through broad unsolicited cleanup.

## Local verification

```bash
npm install
npm run dev
npm run build
npm run lint
```

On Windows PowerShell systems that block `npm.ps1`, use `npm.cmd` for the same scripts.
