# GUSTI Portfolio

React, TypeScript, Vite and Tailwind CSS frontend. **main is the canonical baseline.** No backend, credentials or AI API are required to run the site.

## Run and verify

```sh
npm ci
npm run dev
npm run check
npm run lint
npm run build
```

Preview: http://localhost:3000. On Windows use npm.cmd if PowerShell blocks npm.ps1.

## Repository map

| Directory | Responsibility |
|---|---|
| src/app | Application composition, settings, navigation helpers |
| src/pages | Library, Services, project controller and standalone service pages |
| src/components/layout | One header/sidebar/shell implementation |
| src/components/home | Featured carousel |
| src/components/work | Work grid, shared project renderer, Contoura gallery, factual preview |
| src/content/projects | Work records, explicit details and Contoura media |
| src/content/services | Output catalog, product shots, PDP and marketplace inventories |
| src/content/home, library | Highlights and Library entries |
| src/content/site.ts | Contact destinations and WhatsApp URL builder |
| src/content/translations.ts | Shared translated labels |
| src/styles | Ordered foundation/layout/hero/Contoura CSS |
| public/media/projects | Project covers and Contoura production media |
| public/media/services | Template, cover, PDP and marketplace media |
| public/brand, flags, fonts | Shared interface assets |
| assets/unpublished | Existing source media not used by current pages; excluded from the public build |
| docs | PRD, UI contract and reference evidence |
| scripts | Repository integrity checks |

## Current destinations

- /: Home.
- /?tab=recommended: Work.
- /?tab=services: Services gallery.
- /?tab=library: Library.
- /services/pdp-visuals: standalone PDP gallery.
- /services/marketplace-display: standalone marketplace gallery.

Main-page project selection currently uses application state. Home and Work still share the feed composition; product-flow redesign is separate from repository consolidation. The Services page links to both standalone galleries.

## Content rules

Edit data in src/content, not inside renderers. All generic projects use one ProjectContent renderer. Contoura retains its distinct media experience. Missing project detail data displays only the existing cover, identity and contact action. No fallback generates client facts or stock imagery.

Preserve image ownership evidence. External media and existing business claims still need publication review. A successful build does not validate those claims.

## Workflow

Start task branches from main, run checks, review the diff, integrate authorized work, then retire merged branches. The pre-consolidation history remains reachable through Git commits. Do not keep parallel copies of production files, generic agent prompts or generated audit artifacts in the repo.

[PRD](docs/PRD.md) · [UI contract](docs/UI_GUIDELINES.md) · [Agent rules](AGENTS.md) · [Reference index](docs/references/README.md)
