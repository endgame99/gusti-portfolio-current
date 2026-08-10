# UI_GUIDELINES.md — GUSTI Portfolio Design System

This is the single active default UI policy for the repository. It provides scoped defaults, not permission for unsolicited redesign or global cleanup.

---

## 0. REFERENCE PRIORITY

When making any UI decision, follow this priority order:

1. **Current Active Task** — The user's explicit instruction always wins.
2. **Current Task Reference** — If the task provides a specific design reference (e.g., Apple, Stripe, Linear, Framer, Notion, Shopify, Comfy, etc.), that reference overrides this guideline for the scope of that task.
3. **UI_GUIDELINES.md** — This document provides defaults when no task-specific reference exists.
4. **Existing Implementation** — The current codebase is the fallback when no guideline or reference addresses the situation.

### Key Principles

- This guideline is **not permanently bound to any external reference**. A task may introduce a different reference for a specific page or component.
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

### Core Rule

Use `acumin-pro` for every product and marketing text role. Create hierarchy with size, weight, line height, letter spacing, color, and available width — not by introducing another font family.

Do not use `font-mono` as a decorative style. Monospace is allowed only when the content is genuinely code, a technical identifier, or tabular machine data.

### Typography Decision Table

Choose type by semantic function, not by what merely looks good in one component.

| Semantic role | Use for | Mobile | Tablet | Desktop | Weight | Line height | Letter spacing | Existing utility |
|---|---|---:|---:|---:|---:|---:|---:|---|
| **Display XL / Page Title** | One primary page or project title | 24px | 30px | 36px | 600 | 1.15 | `-0.025em` | `.type-display-xl` |
| **Display LG / Section Title** | Major section heading | 20px | 24px | 24px | 600 | 1.20 | `-0.025em` | `.type-display-lg` |
| **Display MD / Card Title** | Featured card or content-block title | 18px | 20px | 20px | 600 | 1.25 | `-0.02em` | `.type-display-md` |
| **Heading LG** | Subsection heading | 18px | 18px | 18px | 700 | 1.30 | `-0.025em` | `.type-heading-lg` |
| **Heading MD** | Compact panel or grouped-content heading | 16px | 16px | 16px | 600 | 1.35 | `0` | `.type-heading-md` |
| **Lead Body** | Short intro below a page title | 16px | 16px | 16px | 400 | 1.60 | `0` | `text-base leading-relaxed` |
| **Body MD** | Standard paragraphs and descriptions | 14px | 14px | 14px | 400 | 1.60 | `0` | `.type-body-md` |
| **Body SM** | Supporting explanation or compact helper copy | 12px | 12px | 12px | 400 | 1.60 | `0` | `.type-body-sm` |
| **Navigation / Tab** | Navigation and filter labels | 13px | 14px | 15px | 600 | 1.20 | `0` | `.type-nav` / `.type-tab` |
| **Label MD** | Buttons, compact UI labels, short status text | 12px | 12px | 12px | 600 | 1.20 | `0` | `.type-label-md` |
| **Label SM** | Metadata and secondary labels | 11px | 11px | 11px | 500 | 1.30 | `0` | `.type-label-sm` |
| **Eyebrow** | Client, category, or section context above a heading | 11px | 11px | 11px | 700 | 1.20 | `0.05em` | `.type-eyebrow` |

### Role Mapping

Use this hierarchy consistently across pages:

1. **Client/category eyebrow** — `Eyebrow`
2. **Page or project title** — `Display XL`
3. **Short page introduction** — `Lead Body`
4. **Major section heading** — `Display LG`
5. **Subsection heading** — `Heading LG` or `Heading MD`
6. **Standard narrative** — `Body MD`
7. **Caption, helper copy, or metadata** — `Body SM` or `Label SM`
8. **Action label** — `Label MD`

### Hierarchy Rules

- Use only one `Display XL` per page.
- A content section should normally contain no more than three visible text levels: section heading, body, and metadata.
- Do not make a subsection heading visually stronger than the page or section title above it.
- Use weight 600 for display text; reserve weight 700 for compact headings, emphasis, and action labels.
- Do not use weight 800 for normal page hierarchy. It creates unnecessary visual noise with Acumin Pro.
- Avoid uppercase for sentences. Uppercase is limited to short eyebrows, metadata, and action labels.
- Persistent readable text should not be smaller than 11px. Sizes below 11px are allowed only for non-essential media badges with sufficient contrast.
- Do not use reduced opacity as the only way to distinguish hierarchy. Size, weight, and spacing must still communicate the relationship.

### Reading Width

| Content type | Maximum readable width |
|---|---:|
| Lead paragraph | 760px |
| Standard narrative paragraph | 680px or approximately 65–75 characters |
| Compact sidebar or card paragraph | 320–380px |
| Caption | Match the media width, but keep each text line under 75 characters when possible |

Long-form text must not stretch across the full page container.

---

## 5. SPACING & WHITE SPACE

### Core Rule

White space communicates relationships. Elements that belong together stay close; separate content groups receive visibly larger space. Do not choose margins independently for every element.

### Spacing Scale

Use the following values as the default spacing vocabulary:

| Token | Value | Typical use |
|---|---:|---|
| **2XS** | 4px | Icon-to-label adjustment, very tight metadata |
| **XS** | 8px | Eyebrow-to-title, caption-to-meta, inline control gap |
| **SM** | 12px | Closely related text or controls |
| **MD** | 16px | Standard component padding and content stack |
| **LG** | 20px | Compact panel padding, heading-to-small-content |
| **XL** | 24px | Card padding, title-to-intro on wide layouts |
| **2XL** | 32px | Heading-to-primary-content, major component padding |
| **3XL** | 48px | Mobile section separation |
| **4XL** | 64px | Desktop section separation |
| **5XL** | 80px | Page ending or large editorial separation |
| **6XL** | 96px | Exceptional feature break; use only when the visual composition needs it |

Prefer values from this scale. Values outside the scale require component evidence or a task-specific reference.

### Container System

| Container | Maximum width | Horizontal gutter | Use for |
|---|---:|---|---|
| **Global / Application shell** | 1300px | 16px mobile / 24px tablet / 32px desktop | Homepage, Services, project details, header, navigation-aligned sections |
| **Project detail inner** | 1300px | Inherits page gutter (single source of padding) | Visual case studies and commerce-detail layouts |
| **Optional wide media container** | 1600px | 16px mobile / 24px tablet / 32px desktop | Optional wide-media showcase (requires task-specific evidence) |
| **Reading column** | 680px | Inherits page gutter | Narrative paragraphs |
| **Lead column** | 760px | Inherits page gutter | Introductory copy below a page title |
| **Sidebar/panel** | 360–400px | 16px mobile / 20px desktop internal padding | Project metadata, service selection, compact actions |

All major sections on the same page must share a consistent left and right axis. A narrower reading column may sit inside that axis, but it must not create a new arbitrary page gutter.

### Vertical Rhythm Decision Table

| Relationship | Mobile | Desktop |
|---|---:|---:|
| Eyebrow → title | 8px | 8px |
| Title → lead paragraph | 12–16px | 16–24px |
| Lead paragraph → primary media/content | 24px | 32px |
| Section title → supporting paragraph | 12px | 16px |
| Section heading group → primary content | 20px | 32px |
| Paragraph → paragraph | 12–16px | 16px |
| Media → caption | 8px | 8–12px |
| Content group → content group | 24–32px | 32–48px |
| Major section → major section | 48px | 64px |
| Final section → page bottom | 48px | 80px |

### Component Spacing

| Component | Mobile | Desktop |
|---|---:|---:|
| Standard card inner padding | 16px | 20–24px |
| Compact card/panel padding | 12–16px | 16–20px |
| Sidebar inner padding | 16px | 20px |
| Card grid gap | 16px | 24px |
| Compact control group gap | 8–12px | 8–12px |
| Button horizontal padding | 16px | 16–20px |
| Button vertical padding | 12px | 12px |

### Section Rhythm

- A major section contains its heading group and content inside one spacing context.
- Do not place borders between every small content group. Use white space first; use a divider only when it clarifies a real boundary.
- Repeated sections must use the same heading-to-content and section-to-section spacing.
- Hero spacing may be visually larger, but the hero must remain aligned to the same page gutter.
- Dense commerce controls may use compact spacing inside the control itself. The surrounding case-study narrative must retain editorial section spacing.

### White Space Checks

Before approving a layout, verify:

- Related text reads as one group without appearing cramped.
- A user can identify where one section ends and the next begins without relying only on borders.
- The page title has more visual breathing room than a card title.
- Body copy does not span the full page width.
- Left and right gutters remain consistent across hero, text, media, and grids.
- Mobile spacing is reduced deliberately, not removed.
- No single component introduces unrelated values such as 18px, 22px, or 28px without evidence.

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

### Required Text Hierarchy

| Page element | Typography role | Notes |
|---|---|---|
| Client or project category | `Eyebrow` | Optional; place above the title and keep it short |
| Project title | `Display XL` | One per page; do not reduce it to compact panel-title sizing |
| Project introduction | `Lead Body` | Maximum width 760px; one or two short paragraphs |
| Major narrative section | `Display LG` | Examples: Overview, Creative Direction, Deliverables |
| Subsection or content-block title | `Heading LG` or `Heading MD` | Use only when the content needs another level |
| Narrative paragraph | `Body MD` | Maximum width 680px |
| Media caption | `Body SM` or `Label SM` | Descriptive and factual, never decorative filler |
| CTA label | `Label MD` | Short, specific action text |

### Required Page Rhythm

| Relationship | Mobile | Desktop |
|---|---:|---:|
| Client/category → project title | 8px | 8px |
| Project title → introduction | 16px | 24px |
| Introduction → hero/primary gallery | 24px | 32px |
| Major section → major section | 48px | 64px |
| Section heading group → media or content | 20px | 32px |
| Media → factual caption | 8px | 8–12px |

The commerce/service sidebar may remain denser than the narrative column, but it must not determine the typography or spacing of the entire project page.

### Guidelines

- Each project detail page can be independently customized
- The `ProjectDetail.tsx` controller routes to per-project components
- Detailed project data comes from `src/data/projectDetails.ts`
- Use the 1300px project-detail container unless a task-specific reference proves another width is required
- Keep narrative text inside the reading-width rules even when media spans the full content column
- Use Acumin Pro for sidebar labels and metadata; monospace is not a substitute for hierarchy
- Do not let repeated 11–12px labels become the dominant reading experience

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
| `PROJECT_CONTEXT.md` | Current architecture orientation; code remains authoritative |
| `agent-resources/README.md` | Index of optional task-specific references and legacy prompts |

This guideline works under the scope and factual-integrity rules in `AGENTS.md`.

**If a conflict arises between any guideline and an explicit user instruction, the user instruction wins.**
