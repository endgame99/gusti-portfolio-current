# UI_GUIDELINES.md — GUSTI Portfolio Design System

Primary Reference: [comfy.org/workflows](https://comfy.org/workflows/)

Adapted from the reference's UI/UX system. Does NOT copy Comfy branding, business terminology, company identity, logos, or content. Future tasks may use different references — this guideline adapts, not restricts.

---

## 0. REFERENCE PRIORITY

When making any UI decision, follow this priority order:

1. **Current Active Task** — The user's explicit instruction always wins.
2. **Current Task Reference** — If the task provides a specific design reference (e.g., Apple, Stripe, Linear, Framer, Notion, Shopify, Comfy, etc.), that reference overrides this guideline for the scope of that task.
3. **UI_GUIDELINES.md** — This document provides defaults when no task-specific reference exists.
4. **Existing Implementation** — The current codebase is the fallback when no guideline or reference addresses the situation.

### Key Principles

- This guideline is **not permanently bound to Comfy.org**. It was initially derived from that reference, but any task may introduce a different reference for a specific page or component.
- A task-specific reference overrides this guideline **only for the scope of that task**. It does not retroactively change other pages or components.
- Never force every page to follow the same reference forever.
- Never reject a redesign request because it deviates from this document.

---

## 1. TASK SCOPE PROTECTION

### Core Rule

Each task operates within its declared scope. Changes must not leak into unrelated areas.

### Scope Boundary Examples

| If the task is about... | Do NOT also change... |
|---|---|
| Hero carousel | Library, Sidebar, Footer, Routing |
| Services section | Project Detail, Homepage grid, Navigation |
| Project Detail page | Homepage, Hero, Services, Library |
| Card UI / grid | Data structure, Routing, Detail pages |
| Navigation / Sidebar | Homepage content, Project data, Services |
| Library section | Hero, Services, Card grid, Navigation |
| Typography system | Individual component layouts (unless requested) |

### Exceptions

Scope expansion is allowed **only** when the user explicitly requests it. Example:

> "Redesign the hero AND update the card grid to match."

In this case, both hero and card grid are in scope.

---

## 2. REFERENCE ANALYSIS WORKFLOW

Before implementing any UI redesign that involves a visual reference, the agent must follow this workflow. Do not skip any step.

### Step 1 — Analyze the Reference

Study the provided reference URL or screenshot. Identify what makes the reference effective.

### Step 2 — Extract Design Patterns

Identify and document:

- Typography (fonts, sizes, weights, line-height, letter-spacing)
- Visual hierarchy (information stack, emphasis, contrast)
- Spacing & white space (section rhythm, padding, breathing room)
- Grid & layout (columns, alignment, container behavior)
- Components (cards, buttons, chips, forms, navigation)
- Interaction (hover, focus, transitions, animations)
- Responsive behavior (breakpoints, stacking, scaling)
- Motion philosophy (speed, easing, purpose)

### Step 3 — Separate Adoptable from Non-Adoptable

**Adopt:** Design patterns, spacing rhythm, typography system, component architecture, interaction quality.

**Do NOT copy:**

- Business copy or marketing text
- Brand identity (logos, brand colors, brand names)
- Product names or terminology
- Company-specific labels
- Platform-specific UI that doesn't apply to a portfolio

### Step 4 — Map to Existing Architecture

Identify which existing files, components, and data structures are affected. Plan the minimum changes needed.

### Step 5 — Implement Within Task Scope

Execute only within the boundaries of the current task. Do not redesign unrelated sections.

---

## 3. NEVER ASSUME DATA

### Rule

Never invent, generate, or assume content that does not already exist in the project data files or is not explicitly provided by the user.

### Never Invent

- Project names
- Project descriptions
- Client names
- Client logos or images
- Service categories
- Statistics, metrics, or numbers
- Testimonials or quotes
- CTA text or marketing copy
- Dates or timelines
- Images or video URLs
- Awards, badges, or rankings
- Pricing or ROI claims

### Always Reuse

Use the existing project data from `src/data.ts` and `src/data/projectDetails.ts` unless the current task explicitly changes it.

### If Data Is Missing

State `MISSING_DATA_REQUIRED` and explain what data is needed. Do not fill gaps with plausible-sounding content. Refer to `AGENTS.md` anti-hallucination rules.

---

# PART A — GLOBAL DESIGN SYSTEM

The following sections define system-wide design principles. They apply across all pages and components unless a task-specific reference overrides them.

---

## 4. TYPOGRAPHY SYSTEM

### Font Stack

| Role | Font | Fallback |
|---|---|---|
| **Global Font** | `acumin-pro` | `"Helvetica Neue", Helvetica, Arial, sans-serif` |

### Usage Rules

**acumin-pro** — Used globally for ALL text elements across the entire website:

- Headlines, hero titles, and section headers
- Navigation, sidebar, header menus
- Buttons, action elements, forms
- Body paragraphs, descriptions, and strategic narrative
- Project metadata, labels, chips, and tags
- Card titles, card metadata, and credits roll

Hierarchy is driven by size, weight (400, 500, 600, 700, 800), line height, and letter spacing — not by splitting display and body fonts.

### Typography Scale

| Level | Min (mobile) | Max (desktop) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| **Hero / Display XL** | `1.5rem` (24px) | `2.25rem` (36px) | Semibold (600) | `leading-tight` | `tracking-[-0.025em]` |
| **Section Header / Display LG** | `1.25rem` (20px) | `1.5rem` (24px) | Semibold (600) | `leading-tight` | `tracking-[-0.025em]` |
| **Card Title / Display MD** | `1.125rem` (18px) | `1.25rem` (20px) | Semibold (600) | `leading-snug` | `tracking-[-0.02em]` |
| **Heading LG** | `1.125rem` (18px) | `1.125rem` (18px) | Bold (700) | `leading-snug` | `tracking-[-0.025em]` |
| **Body (Base)** | `0.875rem` (14px) | `0.875rem` (14px) | Regular (400) | `leading-relaxed` | — |
| **UI / Buttons / Nav** | `0.75rem` (12px) | `0.875rem` (14px) | Semibold (600) | `leading-none` | — |
| **Metadata / Chips** | `0.625rem` (10px) | `0.6875rem` (11px) | Medium (500) | `leading-none` | `tracking-wide` |

---

## 5. SPACING & WHITE SPACE

### Spacing Philosophy

Spacing should create a premium, editorial rhythm. Follow the reference's proportions as a baseline, but allow individual components to define appropriate dimensions for their content.

### Page Container

- **Max width:** Use a wide container that occupies most of the viewport while maintaining comfortable reading proportions. The reference uses approximately 1600px.
- **Alignment:** Horizontally centered.
- **Horizontal padding:** Scale down on smaller viewports. Use clamped or responsive padding that tightens on mobile without collapsing.

### Spacing Rhythm Principles

| Context | Principle |
|---|---|
| **Section separation** | Generous vertical space between major sections. Sections should breathe. |
| **Hero spacing** | Minimal top margin above hero. Comfortable bottom margin before the next section. |
| **Grid gap** | Consistent gap between cards. Tight enough to feel cohesive, loose enough to feel clean. |
| **Card inner padding** | Compact but not cramped. Content should not touch card edges. |
| **Element gap** | Related elements (eyebrow + headline + paragraph) grouped tightly. Unrelated groups separated clearly. |

### White Space Rules

- **Headline breathing room:** Always separate major headlines from surrounding content with generous vertical space.
- **Content grouping:** Keep related elements tightly stacked, then surround the group with white space.
- **Reading width:** Body text should not span the full container width. Restrict paragraphs to a comfortable reading measure (~65–75 characters).
- **Consistent gutters:** All sections should sit inside the same container alignment. Do not mix different container widths or padding values on the same page.

---

## 6. VISUAL HIERARCHY

Sections follow a predictable information stack. Not every layer is required — use only what the content needs.

1. **Eyebrow** — Small uppercase text, muted color, wide letter-spacing
2. **Headline** — Large display text (acumin-pro), tight leading, slight negative letter-spacing
3. **Supporting Paragraph** — Restrained width, regular weight, muted color
4. **Filters / Tabs** — Sticky bar below the header, horizontally scrollable on mobile
5. **Primary Content** — Cards, grids, or media blocks
6. **Secondary Metadata** — Chips, pagination, or small labels

---

## 7. MOTION & INTERACTION

### Motion Philosophy

- Transitions should feel **swift and purposeful**, not decorative
- Standard interactions (hover, focus, tab): fast response, no perceived delay
- Content transitions (carousel slides, page changes): smooth but not slow
- Never animate layout dimensions in a way that causes content to jump or reflow

### Reduced Motion

Respect `prefers-reduced-motion`. Provide instant state changes as fallback.

### Layout Shift Prevention

- All containers, buttons, and text elements must have stable dimensions
- No size changes on hover/focus/active states
- Use `object-cover` on all media to prevent reflow
- Reserve space for lazy-loaded images with `aspect-ratio`

---

## 8. RESPONSIVE BEHAVIOR

### Breakpoint Philosophy

- **Mobile-first:** Base styles target small screens. Enhancements added via `sm:`, `md:`, `lg:` breakpoints.
- **Fluid where possible:** Use `clamp()` for typography and padding to avoid hard jumps.
- **Progressive disclosure:** Show fewer chips, shorter metadata, and simpler controls on mobile. Expand on desktop.

### Responsive Principles by Element

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Container | Wide max-width + clamped padding | Moderate padding | Compact padding |
| Hero | Tall, immersive | Medium height | Compact, still readable |
| Hero title | Largest clamp value | Mid | Smallest clamp value |
| Hero controls | Larger, more spacing | Standard | Compact |
| Hero chips | 2–3 visible | 1–2 visible | 1 visible |
| Grid columns | 3–4 | 2 | 1 |
| Card padding | Standard | Slightly reduced | Compact |
| Sidebar | Visible (collapsible) | Visible (collapsible) | Bottom nav bar |

---

## 9. ACCESSIBILITY

- All interactive elements must have visible focus indicators
- Color contrast must meet WCAG AA minimum (4.5:1 for text, 3:1 for large text)
- All images must have meaningful `alt` text
- Videos should include `muted` and `playsinline` for autoplay compliance
- Keyboard navigation must work for all interactive elements
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<button>`, `<a>`)

---

## 10. CONTENT CONSISTENCY

### Data Integrity

- **Factual content only.** No fake testimonials, statistics, awards, rankings, or creator badges. (See `AGENTS.md` anti-hallucination rules.)
- **Missing data:** If content is needed but unavailable, write `MISSING_DATA_REQUIRED`. Do not invent.

### Cross-Component Consistency

- **Project title** must be identical in: Hero slide → Work card → Project detail page
- **Service categories** must match exactly across all occurrences
- **Client/company name** must be consistent everywhere it appears

### Purposeful UI

- Every text element must serve a purpose
- No decorative-only labels
- No duplicated information within the same view
- No fake metadata or placeholder badges

---

# PART B — COMPONENT GUIDELINES

The following sections define component-specific patterns. Each component may be redesigned independently as long as it follows the global design system above and the current task scope.

---

## 11. HERO CAROUSEL

### Structure

- Full container width, matching the page container
- Large rounded corners with a thin visible border
- Media fills the container with `object-cover`
- Responsive height that scales proportionally (taller on desktop, compact on mobile)

### Overlay

- Dark transparent gradient from bottom upward, ensuring legible white text
- **Bottom left:** Project title (large, acumin-pro), client/company circular avatar, service category chips
- **Bottom right:** Previous/Next navigation buttons with semi-transparent backdrop

### Carousel Behavior

- Slides move horizontally, one full slide at a time
- Autoplay on a timer interval
- Pause on hover (optional)
- After manual navigation, autoplay continues on the same interval
- Entire slide clickable to the project detail page
- No decorative badges

### Clickable Slide

- An invisible anchor covers the entire slide at a lower z-index
- Overlay buttons and links use higher z-index with `pointer-events-auto`

---

## 12. NAVIGATION & SIDEBAR

### Desktop Sidebar

- Fixed left sidebar with collapse/expand toggle
- Navigation items: icon + label when expanded, icon-only when collapsed
- Active state visually distinct from inactive
- Logo/brand mark at the top, doubles as home navigation

### Mobile Bottom Navigation

- Fixed bottom bar replacing the sidebar
- Horizontal icon + label layout
- Active state visually distinct
- Same navigation items as the sidebar

### Behavior

- Navigation state is managed via application state, not URL routing
- Clicking a nav item updates the active tab/section
- Home click resets to homepage view and scrolls to top

---

## 13. PROJECT CARDS

### Grid Independence

The project card grid is independent of the hero. Redesigning the hero does not automatically require redesigning the cards, and vice versa.

### Card Architecture

- Subtle background color differentiation from the page
- Large rounded corners matching the overall design language
- Image container with consistent aspect ratio and `object-cover`
- Hover: subtle shadow lift and image scale

### Card Metadata Hierarchy

1. **Title** — Semibold, primary text color
2. **Label/Subtitle** — Smaller, muted text color
3. **Tags (if shown)** — Small chips

### Card Interaction

- Card-wide clickability via `<button>` or `<a>` wrapper
- Smooth hover transitions (shadow, scale, background)
- No layout shift on hover

---

## 14. BUTTONS

### Principles

- Consistent height across the interface (standard and large variants)
- Highly rounded or capsule-shaped
- Clear hover, focus, and disabled states
- Fast transitions
- Disabled state: reduced opacity, no pointer events

---

## 15. CHIPS & FILTERS

### Service/Category Chips

- Capsule-shaped (`rounded-full`)
- Compact sizing
- Semi-transparent backgrounds on dark overlays, subtle fills on light backgrounds
- Interactive chips have hover state transitions

### Filter Tabs

- Horizontally scrollable on mobile
- Clear active/inactive states
- Sticky positioning below the header when scrolling

---

## 16. PROJECT DETAIL PAGE

### Structure

- Long vertical scroll page
- Visual-first: hero media at the top
- Clean title and short intro
- Flexible content blocks (images, videos, text)
- Project narrative sections (overview, creative direction, scope)
- Clean CTA at the bottom (if applicable)
- Minimal UI chrome, premium spacing

### Guidelines

- Each project detail page can be independently customized
- The `ProjectDetail.tsx` controller routes to per-project components
- Detailed project data comes from `src/data/projectDetails.ts`

---

## 17. FORMS & INPUTS

_(Reserved for future implementation)_

Define styling for text inputs, selects, textareas, and form layouts when needed.

---

## 18. FOOTER

_(Reserved for future implementation)_

Define footer structure, spacing, links, and responsive behavior when needed.

---

## 19. FUTURE COMPONENTS

New components should be added to Part B as they are designed. Each entry should define:

- Structure and layout
- Content hierarchy
- Interaction behavior
- Responsive adaptation
- Relationship to the global design system

---

## 20. RELATIONSHIP TO OTHER FILES

| File | Purpose |
|---|---|
| `AGENTS.md` | Agent behavior, forbidden files, workflow, anti-hallucination |
| `UI_GUIDELINES.md` (this file) | Visual design system for consistency |
| `UI_GUIDELINES.DISABLED.md` | Previous preservation-focused guideline (archived) |

This guideline works alongside `AGENTS.md`. Neither overrides the other.

**If a conflict arises between any guideline and an explicit user instruction, the user instruction wins.**
