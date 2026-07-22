# GUSTI Portfolio Design System — Behance UI Specification

This document presents the factual, production-verified UI specification extracted from the four Behance production CSS files.

---

## 1. Source Reference Files

| Raw Source File (Read-Only Evidence) | Clean GUSTI Reference File | Purpose & Contents |
|---|---|---|
| `agent-references/behance-production-css/raw/BEHANCE.networki-main.css` | `agent-references/behance-production-css/clean/BEHANCE.networki-main.clean.css` | Design tokens, typography hierarchy, primary/secondary/danger buttons, cards, form inputs, navigation strip, search field, overlay backdrops. |
| `agent-references/behance-production-css/raw/BEHANCE.networki-modules.css` | `agent-references/behance-production-css/clean/BEHANCE.networki-modules.clean.css` | Popup surfaces, modals, divided lists, menus, generic chips, tooltips, form notices, loading overlays, card header/footer metadata hierarchy. |
| `agent-references/behance-production-css/raw/BEHANCE.responsive.css` | `agent-references/behance-production-css/clean/BEHANCE.responsive.clean.css` | Responsive media query evidence (phone <=603px, tablet 604-1024px, desktop nav transition ~1080px), visibility utilities, responsive drawer, mobile full-width cards. |
| `agent-references/behance-production-css/raw/BEHANCE.activity.css` | `agent-references/behance-production-css/clean/BEHANCE.activity.clean.css` | Visual gallery grid, masonry item surfaces, card selection states, hover elevation, skeleton loading state, mobile gallery card behavior. |

---

## 2. Design System Tokens (`:root`)

```css
:root {
  /* Verified Production Colors */
  --gusti-color-accent: #0057ff;          /* Primary Brand Accent Blue */
  --gusti-color-accent-hover: #0046cc;
  --gusti-color-text-primary: #191919;    /* Main Body & Title Text */
  --gusti-color-text-secondary: #555555;  /* Subtitles & Descriptions */
  --gusti-color-text-subtle: #959595;     /* Captions, Metadata & Icons */
  --gusti-color-background: #f9f9f9;     /* App Canvas Background */
  --gusti-color-surface: #ffffff;        /* Cards, Header, Panels */
  --gusti-color-surface-hover: #f0f0f0;  /* Hover state for rows/cards */
  --gusti-color-border: #e8e8e8;         /* Primary Dividers & Card Outlines */
  --gusti-color-border-dark: #d5d5d5;
  --gusti-color-disabled-bg: #e8e8e8;
  --gusti-color-disabled-text: #959595;
  --gusti-color-danger: #d00d00;          /* Error / Destructive Actions */
  --gusti-color-danger-hover: #b00b00;
  --gusti-color-success: #058900;         /* Success States */
  --gusti-color-focus-outline: #0057ff;   /* Accessible Keyboard Focus Ring */

  /* Global Single Typography Stack */
  --gusti-font-family: "acumin-pro", "Helvetica Neue", Helvetica, Arial, sans-serif;

  /* Geometry & Radii */
  --gusti-radius-pill: 50px;              /* Buttons, Badges, Search Inputs */
  --gusti-radius-card: 12px;              /* Project Cards, Modals, Panels */
  --gusti-radius-input: 8px;              /* Form Controls */
  --gusti-radius-small: 6px;              /* Tooltips, Tags */

  /* Elevation Shadows */
  --gusti-shadow-card: 0 1px 4px rgba(0, 0, 0, 0.08);
  --gusti-shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.12);
  --gusti-shadow-overlay: 0 12px 36px rgba(0, 0, 0, 0.2);

  /* Transitions */
  --gusti-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --gusti-transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 3. Class Name Registry (`.gusti-*`)

### A. Typography Primitives
- `.gusti-ui-title-xl` — 36px / 700 / leading 1.15
- `.gusti-ui-title-lg` — 24px / 600 / leading 1.2
- `.gusti-ui-title-md` — 18px / 600 / leading 1.25
- `.gusti-ui-body-md` — 14px / 400 / leading 1.6
- `.gusti-ui-body-sm` — 12px / 400 / leading 1.5
- `.gusti-ui-eyebrow` — 11px / 700 / uppercase / tracking 0.05em

### B. Button Primitives
- `.gusti-button-primary` — `#0057ff` fill, `#ffffff` text, 50px pill radius
- `.gusti-button-secondary` — `#f0f0f0` surface, `#191919` text, 1px `#e8e8e8` border
- `.gusti-button-inline` — transparent fill, `#0057ff` text, underline on hover
- `.gusti-button-danger` — `#d00d00` fill, `#ffffff` text
- `.gusti-button-disabled` — `#e8e8e8` fill, `#959595` text, `cursor: not-allowed`
- `:focus-visible` — `2px solid #0057ff` outline, 2px outline-offset

### C. Card & Gallery Primitives
- `.gusti-card-surface` — `#ffffff` fill, 12px radius, 1px `#e8e8e8` border, translateY(-2px) hover transition
- `.gusti-card-media-overlay` — 180deg dark linear gradient overlay on image hover
- `.gusti-gallery-container` — centered full-width container
- `.gusti-gallery-grid` — responsive grid (`repeat(auto-fill, minmax(280px, 1fr))`)
- `.gusti-gallery-item` — gallery card surface with elevation hover
- `.gusti-gallery-selected` / `.gusti-card-selected` — 2px `#0057ff` active selection ring
- `.gusti-gallery-skeleton` — loading shimmer animation

### D. Input & Form Primitives
- `.gusti-input-field` — 8px radius, `#e8e8e8` border, 3px `#0057ff` focus glow ring
- `.gusti-input-error` — `#d00d00` border & focus glow
- `.gusti-ui-notice-success` / `.gusti-ui-notice-error` / `.gusti-ui-notice-info` — color-coded notice banners

### E. Navigation & Overlay Primitives
- `.gusti-nav-strip` — 56px fixed top header with 95% blur backdrop
- `.gusti-nav-search` — pill search field
- `.gusti-overlay-backdrop` — fixed full-viewport `rgba(0,0,0,0.6)` backdrop blur
- `.gusti-overlay-panel` — centered 16px radius modal surface

---

## 4. Breakpoint Specifications

| Device Range | Breakpoint | Utility Classes | Behaviors |
|---|---|---|---|
| **Phone** | `max-width: 603px` | `.gusti-hide-phone`, `.gusti-show-phone` | 1-column grid, 8px card radius, 85vw mobile drawer, 100vw full modal panel. |
| **Tablet** | `604px to 1024px` | `.gusti-hide-tablet`, `.gusti-show-tablet` | 2-column grid, centered containers. |
| **Desktop / Nav** | `1080px and above` | `.gusti-hide-desktop`, `.gusti-show-desktop` | 3-column grid, 56px desktop header with 2rem side padding. |

---

## 5. Excluded Behance Platform Features

The following Adobe/Behance platform-specific patterns were explicitly omitted from the clean GUSTI design system:
- Adobe / Behance branding & logos
- BeIcons font family and icon classes (Lucide React remains the sole icon system)
- Remote Typekit / Adobe font `@font-face` declarations (self-hosted `acumin-pro` is used)
- Follow / Unfollow buttons and subscriber states
- Engagement counters (fake view counts, likes, rankings, badges)
- Activity feeds, notifications, inbox, account popups, app launchers
- Platform marketplace metadata & remote WOFF/WOFF2/image asset links
