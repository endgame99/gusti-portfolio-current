# UI_GUIDELINES.md — GUSTI Portfolio UI/UX Preservation Guide

## 1. Purpose

This file is the source of truth for UI preservation and visual alignment on the existing GUSTI portfolio website.

Its goal is to prevent unwanted redesign, enforce consistency, and ensure every future UI edit is safe, scoped, and evidence-based.

This is NOT a design system.
This is NOT a redesign brief.
This is a preservation and alignment guideline.

---

## 2. Source Usage

`design-ui-designer.md` is used only as a methodology reference for:

- consistency discipline
- visual hierarchy awareness
- accessibility awareness
- responsive behavior discipline
- precise developer handoff discipline

`design-ui-designer.md` must NOT be used to:

- create a new design system
- create new color tokens
- create new typography tokens
- create global CSS variables
- create a new component library
- create a new button/card system
- introduce dark mode systems
- redesign the website

Core principle:

**Preserve first. Align second. Redesign never, unless explicitly requested by the user.**

---

## 3. Non-Redesign Rules

Agents must NOT:

- Redesign existing layouts.
- Change section order.
- Introduce a new visual style.
- Change global navigation, sidebar, header, routing, or project detail architecture unless explicitly requested.
- Add CTA elements unless the function is defined.
- Create new global tokens or component systems.
- Perform global cleanup unless explicitly requested.
- Replace existing visual patterns with new ones without explicit user approval.

---

## 4. Required Inspection Before UI Edits

Before editing any UI, the agent must inspect the current component/file and report:

1. **Current layout structure** — flex, grid, stacking order, container hierarchy.
2. **Current spacing classes** — padding, margin, gap values currently in use.
3. **Current typography classes** — font size, weight, line-height, letter-spacing currently in use.
4. **Current media sizing** — image/video dimensions, aspect ratios, object-fit values.
5. **Current responsive behavior** — breakpoint classes, stacking changes, visibility toggles.
6. **Current CTA/link behavior** — what interactive elements exist, what they do, where they link.
7. **Exact file/component that will be touched** — full path and component name.

This inspection must be included in the agent's pre-edit report before any code changes begin.

---

## 5. Allowed Adjustment Types

Only inside the requested file/component scope, the agent may adjust:

- `padding`
- `margin`
- `gap`
- `max-width`
- `font-size`
- `line-height`
- `font-weight`
- paragraph width (`max-w-*`, `max-width`)
- image/video size (`w-*`, `h-*`, `max-w-*`, `max-h-*`)
- `aspect-ratio`
- `object-fit`
- `border-radius`
- responsive stacking (`flex-col`, `grid-cols-*`, breakpoint variants)

These adjustments are allowed only when they serve a clear purpose: improving readability, fixing alignment, fixing responsive issues, or matching a user-provided reference.

---

## 6. Forbidden Adjustment Types

Agents must NOT:

- Redesign the full page.
- Rewrite unrelated sections.
- Create a new design language.
- Add decorative elements (borders, gradients, shadows, icons) without explicit request.
- Add CTA/buttons without a defined function.
- Replace content with fake content.
- Change the global font system.
- Change navigation/sidebar/header.
- Change routing.
- Change project detail structure.
- Use random images as service visuals.
- Duplicate labels.
- Perform broad cleanup outside requested files.
- Add new npm dependencies for UI changes without explicit approval.

---

## 7. Visual Hierarchy Rules

Future UI edits must preserve or improve:

- Title-to-paragraph hierarchy (titles visually dominant over body text).
- Paragraph readability (appropriate line length, line height, contrast).
- Spacing between title and paragraph (clear separation, not cramped).
- Spacing between content groups (sections breathe, groups are visually distinct).
- Text/media priority (hero media leads, supporting text follows).
- Clear section separation (sections do not bleed into each other).

Do not invent a new hierarchy.

Match the existing website rhythm unless the user provides a new reference.

If the existing hierarchy has a clear issue (e.g., title smaller than body text), the agent may flag it and propose a fix, but must not apply it without user approval.

---

## 8. Spacing and Typography Rule

Do not invent arbitrary spacing or font sizes.

Any spacing or typography adjustment must be based on at least one of these:

1. Existing classes in the current component.
2. Nearby section rhythm (what adjacent sections use).
3. User-provided screenshot or reference.
4. Explicit user instruction.
5. Clear readability or accessibility issue (e.g., text too small to read, lines too long for comfortable reading).

If the reason for a spacing or typography change cannot be proven by one of these sources, write:

`MISSING_DATA_REQUIRED`

Do not guess. Do not use "looks better" as justification without a reference.

---

## 9. CTA Rule

Global CTA already exists in the header/sidebar (e.g., WhatsApp link, navigation).

Do not add CTA inside sections by default.

Section CTA is allowed only when it has a unique, defined function, such as:

- Filtering content
- Opening a modal
- Scrolling to a specific section
- Playing media
- Selecting a service/category
- Toggling a view mode

Do not add generic CTA such as:

- "Contact"
- "Start Project"
- "Request Pricing"
- "More"
- "Learn More"
- "Get Started"

unless the user explicitly defines its function and destination.

---

## 10. Services Section Rules

### Services Hero

- **Function:** orientation / sales positioning.
- **Not** a CTA area.
- **Not** a gallery.
- **Not** a pricing section.
- **Not** a redesign area.

Approved Services Hero copy:

**Headline:**

> More visual content. Lower production costs.

**Paragraph:**

> Create product images, ecommerce assets, videos, and campaign materials faster — without starting from scratch every time.

Approved Services Hero media:

- YouTube embed.
- Aspect ratio: 4:3.
- No CTA overlay on the video.

### Service Category Showcase

- **Function:** service menu / category listing.
- Must help users understand service differences.
- Must not look like a random work gallery.
- Must not show duplicate labels.
- "More" must not appear unless it has a real, defined function.

---

## 11. Evidence Rule

Every future UI edit must report:

1. **Exact file touched** — full path.
2. **Exact component/section touched** — component name, section name.
3. **What existing pattern was preserved** — e.g., "kept existing `gap-6` between cards."
4. **What was adjusted** — e.g., "changed `text-sm` to `text-base` on service descriptions."
5. **Why the adjustment was necessary** — e.g., "text was too small for comfortable reading at desktop width."
6. **Source of the decision** — one of: current code, user reference, user instruction, accessibility issue.

If the agent cannot provide evidence for a change, the change must not be made.

---

## 12. Missing Data Rule

If information is not available from:

- Current code
- User instruction
- User-provided reference (screenshot, URL, description)

Write:

`MISSING_DATA_REQUIRED`

Do not fill missing data with assumptions.

Do not invent:

- Fake client facts
- Fake statistics
- Fake testimonials
- Fake pricing
- Fake copy
- Placeholder images presented as real content

This rule applies to both content and visual decisions.

---

## 13. Build and Report Rule

After any future UI edit, the agent must:

1. Run `npm.cmd run build` (or `npm run build` on non-Windows).
2. Report exact files changed.
3. Confirm forbidden files were not touched (see `AGENTS.md` Section 7).
4. Confirm no unrelated redesign was done.
5. Confirm what existing patterns were preserved.
6. Mention any `MISSING_DATA_REQUIRED` items discovered during the edit.

---

## 14. Relationship to Other Control Files

| File | Purpose |
|---|---|
| `AGENTS.md` | Agent behavior rules, forbidden files, workflow rules, anti-hallucination rules |
| `PROJECT_CONTEXT.md` | Current tech stack, architecture, known issues, finishing priorities |
| `TASK_QUEUE.md` | Task execution order, branch discipline, acceptance criteria |
| `UI_GUIDELINES.md` (this file) | UI preservation rules, allowed/forbidden adjustments, evidence requirements |
| `design-ui-designer.md` | Methodology reference only — not a design system to implement |

These files work together. None of them override each other.

If a conflict arises between files, the user's explicit instruction takes priority.

---

## Summary

This guideline exists to protect the existing GUSTI portfolio website from unwanted redesign.

Every UI change must be:

- **Scoped** — only the requested file/component.
- **Evidenced** — based on current code, user reference, or user instruction.
- **Reported** — with exact files, changes, and preserved patterns.
- **Built** — verified with a passing build.
- **Approved** — by the user before moving to the next task.
