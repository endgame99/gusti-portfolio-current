# GUSTI Portfolio Task Queue

This is a planning note, not an instruction source. The current user request defines scope and priority. Do not start an item from this file without explicit user approval.

## Working rules

- One focused task per branch.
- Confirm allowed and protected files before editing.
- Use only task-relevant references from `agent-resources/`.
- Run the production build after each implementation task.
- Keep redesign, architecture, content, and data work separate unless the user combines them.

## Current areas

- Project-detail work is already isolated behind `src/components/ProjectDetail.tsx`; verify the current controller before any further architecture work.
- Contoura has a dedicated detail renderer.
- PDP Visuals and Marketplace Display have standalone service pages.
- Other project detail pages, Services, Library, and responsive QA should be handled as separate approved tasks.
- Deployment preparation should happen only after the user approves the relevant product work.

## Completion record

Record completed work in Git history and pull requests rather than duplicating detailed status here. Update this file only when the planning model itself changes.
