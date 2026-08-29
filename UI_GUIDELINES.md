# UI_GUIDELINES.md — GUSTI Portfolio UI Contract

This is the single active UI policy for the canonical repository `endgame99/gusti-portfolio-current`.

The document converts `PRD.md` into visual, interaction, responsive, and quality-control rules. It is not permission to invent product facts, redesign unrelated surfaces, or copy another brand.

---

## 0. Document status

| Field | Value |
|---|---|
| Product | GUSTI Portfolio |
| Status | Active foundation draft v0.2 |
| Product source | `PRD.md` |
| Homepage structural reference | ZCOOL homepage — owner-confirmed |
| Quality-evaluation reference | GDWEB official judging criteria |
| Default product language | English |
| Theme requirement | Dark mode is mandatory |
| Last updated | 2026-08-29 |

### Requirement status vocabulary

- `CONFIRMED` — explicitly supplied by the owner or required by `PRD.md`.
- `VERIFIED_CURRENT_STATE` — measured or directly verified in the repository or rendered application.
- `PROVISIONAL_IMPLEMENTATION_BASELINE` — an existing value that may be used until better owner-approved evidence replaces it.
- `DESIGN_DERIVATION` — a design rule required to make a confirmed product requirement usable; it is not a business fact.
- `MISSING_DATA_REQUIRED` — implementation must not invent the missing decision or asset.
- `FORBIDDEN` — must not be introduced.

Rules marked `CONFIRMED` or `DESIGN_DERIVATION` are implementable. A `PROVISIONAL_IMPLEMENTATION_BASELINE` may be implemented but must remain easy to revise. A `MISSING_DATA_REQUIRED` item must not be silently resolved by an agent.

---

## 1. Authority and conflict resolution

Use this order when UI instructions conflict:

1. The owner's explicit instruction for the current task.
2. Verified repository code, data, and local assets.
3. `PRD.md`.
4. This document.
5. A reference explicitly named for the current task.
6. Optional material in `agent-resources/`.

### Non-negotiable boundaries

- A reference supplies design evidence, not business truth.
- An award supplies evaluation criteria, not automatic design authority.
- A current implementation value is not automatically a permanent product decision.
- Page-specific art direction may vary, but navigation, content truth, accessibility, and global interaction behavior must remain coherent.
- No UI rule may authorize fabricated claims, awards, metrics, testimonials, pricing, project facts, or impact.

---

## 2. Product intent translated into UI behavior

The website is a commercial proof and pitching system, not a passive gallery.

| PRD requirement | Required UI consequence | Acceptance evidence |
|---|---|---|
| Generate paid projects | A qualified visitor can find a real contact action without searching through decorative content | A visible CTA has a valid destination and works with keyboard and pointer input |
| Increase bargaining power | Work is presented as deliberate, legible proof rather than an undifferentiated image dump | Project identity, context, and verified ownership are understandable |
| Build trust and reputation | Visual confidence is supported by factual content and consistent behavior | No unsupported claim; no broken route; no fake badge or award |
| Outcome before tool | Services and conversion surfaces lead with completed work or buyer-relevant results | Tool names do not replace the primary outcome statement |
| Proof before persuasion | Media and supported context appear before strong claims | Every commercial claim maps to visible or documented evidence |
| Visual work is primary evidence | Text adds context without overpowering the work | Media remains dominant; text hierarchy is concise and readable |
| Independent destinations | Home, Work, Services, Library, and published projects are real pages | Direct URL, refresh, Back, Forward, bookmark, and sharing work |
| English is default | First load uses English | No language mismatch on initial render |
| Dark mode mandatory | Every production page supports the same dark-theme system | No standalone page remains visually or behaviorally disconnected |

### Commercial hierarchy

Conversion-focused surfaces should normally present information in this order:

1. Desired outcome or buyer problem.
2. Finished visual proof.
3. Commercial or operational relevance supported by evidence.
4. Verified deliverables and scope.
5. Working method.
6. Tools or models, only when useful.
7. A real next action.

Library reports may lead with a release or tool when the release itself is the subject. They must still show applied output rather than repeat announcements.

---

## 3. Reference contract

### 3.1 ZCOOL homepage

`CONFIRMED`

The owner identifies [ZCOOL](https://www.zcool.com.cn/) as the large-scale structural reference for the GUSTI homepage. The current application already implements a related content-platform skeleton.

#### Adopted structural principles

- Utility header with search and account/action controls.
- A prominent highlight or featured-work area.
- Clear content-mode navigation below the highlight area.
- A dense, media-first work feed.
- Repeated card anatomy that supports fast scanning.
- Persistent navigation outside the work grid.

#### Adaptation required for GUSTI

- ZCOOL is a multi-creator discovery platform; GUSTI is a single-owner commercial proof system.
- Creator-discovery metadata must become project identity, verified client/ownership context, work type, or commercial relevance.
- Engagement counts, rankings, popularity signals, recommendation badges, and creator status must not appear without verified GUSTI data.
- Search, filters, and recommendation behavior must not be copied unless the GUSTI content inventory makes them useful.
- ZCOOL brand assets, Chinese copy, proprietary visual identity, and platform-specific behavior must not be copied.

#### Fidelity boundary

The current live ZCOOL page has not yet been captured at matched desktop and mobile viewports in this repository. Therefore:

- Broad structure is approved.
- Exact ZCOOL font sizes, gaps, padding, radii, and breakpoint behavior remain `MISSING_DATA_REQUIRED` until measured from accepted captures.
- Existing GUSTI values listed as `PROVISIONAL_IMPLEMENTATION_BASELINE` remain the implementation baseline in the meantime.
- No agent may describe the current homepage as a pixel-accurate ZCOOL reproduction without side-by-side evidence.

### 3.2 GDWEB

GDWEB is a quality-evaluation source, not a visual template. Its official criteria are translated into the quality gate in Section 19.

Primary sources:

- [GDWEB judging process and criteria](https://www.gdweb.co.kr/sub/process.asp)
- [GDWEB jury context](https://www.gdweb.co.kr/sub/judge.asp)

### 3.3 Reference usage rule

For every reference-driven task:

1. Name the exact page, state, and viewport.
2. Capture or inspect the reference.
3. Separate structural principles from brand-specific expression.
4. Map each adopted principle to a GUSTI product requirement.
5. Define measurable acceptance criteria.
6. Compare implementation and reference at the same viewport.
7. Keep the change inside the approved task scope.

`FORBIDDEN`: collecting award screenshots or fashionable patterns and injecting them globally without a requirement-level mapping.

---

## 4. Global experience architecture

### 4.1 Required independent surfaces

`CONFIRMED`

- Home
- Work
- Services
- Library
- Each published project detail

A tab, modal, or state switch is not a replacement for a durable page when the PRD requires an independent destination.

### 4.2 Global shell

The shell owns:

- Primary navigation.
- Theme behavior.
- Language behavior when enabled.
- Shared content axis.
- Shared focus and interaction treatment.
- Shared conversion access.

Standalone pages may have unique art direction, but they must not create a different theme engine, navigation logic, or accessibility policy.

### 4.3 Page hierarchy

Every independent page must contain:

1. One semantic page-level heading.
2. A visible or programmatically clear page purpose.
3. Primary content.
4. A real navigation path to related destinations.
5. A real next action when the page has a commercial job.

Do not use a visually large sentence as a substitute for semantic page structure.

---

## 5. Foundations

### 5.1 Font family

`VERIFIED_CURRENT_STATE`

The repository includes Acumin Pro Regular, Italic, Bold, and Bold Italic files.

Use:

```css
font-family: "acumin-pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

Rules:

- Acumin Pro is the global product font.
- Use the available weights honestly. Do not request an unprovided intermediate font file and rely on browser synthesis without checking the result.
- Do not introduce another decorative font to manufacture hierarchy.
- Monospace is limited to actual code, identifiers, or tabular machine data.
- Chinese text must be visually tested with the actual fallback font before CN can be treated as production-ready.

### 5.2 Type roles

These roles replace ad hoc component sizing.

| Role | Mobile | Tablet | Desktop | Weight | Line height | Primary use |
|---|---:|---:|---:|---:|---:|---|
| Page title | 24px | 30px | 36px | 600 or available bold | 1.15 | One page-level title |
| Major section title | 20px | 24px | 24px | 600 or available bold | 1.20 | Major page section |
| Subsection title | 16px | 18px | 18px | 600 or available bold | 1.30 | Group inside a section |
| Work-card title | 14px | 14px | 14px | 600 | 1.35 | Persistent project title below or beside media |
| Lead body | 16px | 16px | 16px | 400 | 1.60 | Short introduction |
| Body | 14px | 14px | 14px | 400 | 1.60 | Narrative and descriptions |
| Supporting body | 12px | 12px | 12px | 400 | 1.50 | Captions and helper copy |
| Navigation / tab | 14px | 14px | 15px | 600 | 1.20 | Primary navigation and content modes |
| CTA label | 12px | 12px | 12px | 600 | 1.20 | Hire Me and compact actions |
| Utility label | 11px | 11px | 11px | 500 | 1.30 | Language, metadata, compact controls |

`DESIGN_DERIVATION`: the Work-card title uses 14px instead of the previous 18–20px display role because the homepage is a dense scanning surface. A card title is not a section heading.

### 5.3 Type hierarchy rules

- Use one Page title per independent page.
- Do not place more than three visible text levels inside one compact card.
- Work-card title must be persistently visible; essential project identity must not depend on hover.
- Client or ownership context must be visually secondary to the project title.
- Metadata must not become the dominant reading experience.
- Uppercase is reserved for short labels, not sentences.
- Reduced opacity cannot be the only hierarchy signal.
- Truncation must not remove the only available project identity. Provide a full title at the destination and an accessible name on the card.

### 5.4 Reading widths

| Content | Maximum width |
|---|---:|
| Lead paragraph | 760px |
| Narrative paragraph | 680px or approximately 65–75 characters |
| Compact card copy | 320–380px |
| Caption | Match media width; avoid long unbroken lines |

### 5.5 Spacing vocabulary

Use this scale unless accepted reference evidence requires another value:

| Token | Value | Use |
|---|---:|---|
| `space-1` | 4px | Optical adjustment only |
| `space-2` | 8px | Tight metadata, icon-label gap |
| `space-3` | 12px | Related controls or text |
| `space-4` | 16px | Standard mobile gutter and component space |
| `space-6` | 24px | Desktop grid gap or grouped content |
| `space-8` | 32px | Major component separation |
| `space-12` | 48px | Mobile section separation |
| `space-16` | 64px | Desktop section separation |
| `space-20` | 80px | Page-ending separation |

Rules:

- Component padding, grid gap, and distance between sections are different concepts. Do not call all three “padding.”
- A media-first work card with metadata outside the media does not receive generic 16–24px inner card padding.
- Repeated elements use the same gap token.
- Values such as 18px, 22px, and 28px require reference evidence; do not introduce them casually.

### 5.6 Container baseline

`PROVISIONAL_IMPLEMENTATION_BASELINE`

| Container | Maximum width | Gutter |
|---|---:|---|
| Global page container | 1300px | 16px mobile / 24px tablet / 32px desktop |
| Reading column | 680px | Inherits page gutter |
| Lead column | 760px | Inherits page gutter |

All major sections on one page share the same left and right axis. A reading column may be narrower inside that axis; it must not invent a second page gutter.

### 5.7 Semantic color system

Components must consume semantic roles rather than scattering raw colors.

Required roles:

- `canvas`
- `surface`
- `surface-muted`
- `surface-active`
- `border-subtle`
- `border-strong`
- `text-primary`
- `text-secondary`
- `text-muted`
- `action-primary`
- `action-primary-text`
- `focus-ring`
- `success`
- `warning`
- `danger`

Rules:

- Every role must define light and dark values before implementation is called complete.
- Dark mode must not be a mechanical inversion.
- Media overlays may use black/white for legibility but require contrast checks.
- Project-specific art direction must not redefine shell colors.
- Raw client-brand colors may appear inside project media; they do not become global UI colors.

---

## 6. Homepage composition

### 6.1 Required sequence

`DESIGN_DERIVATION` from the PRD and owner-confirmed ZCOOL structure:

1. Global header.
2. Featured proof or highlight area.
3. Content-mode navigation.
4. Media-first content feed.
5. A conversion path that does not interrupt proof inspection.

### 6.2 Homepage job

The homepage must help a visitor answer:

- What kind of work is this?
- Is the visible execution credible?
- Which work, service, or Library item should I inspect next?
- How do I start a paid project discussion?

The homepage must not become a generic creator marketplace. ZCOOL-like density is used to make proof scannable, not to imitate platform scale.

### 6.3 Search

`VERIFIED_CURRENT_STATE`: a search control exists.

`MISSING_DATA_REQUIRED`: final search scope, index, URL persistence, and empty/error behavior.

Until search behavior is approved:

- Do not expand search into a global product promise.
- If the visible control remains, it must search the content actually available on the current surface.
- The placeholder must describe its real scope when the scope is narrower than the whole website.

---

## 7. Global header

### 7.1 Header roles

`CONFIRMED` owner-required controls:

- Theme toggle.
- Language control.
- Hire Me.
- Download CV.

`VERIFIED_CURRENT_STATE`:

- Search exists.
- Theme, language, Hire Me, and profile controls exist.
- All current utility controls are approximately 32px high.
- Download CV is absent.
- No CV/resume asset currently exists in `public/` or `src/`.

### 7.2 Target grouping

```text
[ Search / discovery ]                     [ Theme ] [ Language ] [ Download CV ] [ Hire Me ]
```

Hierarchy:

1. `Hire Me` — primary commercial action.
2. `Download CV` — secondary proof/action.
3. Theme and language — utility controls.
4. Search — discovery control, not a conversion CTA.

### 7.3 Control treatment

- Controls in one utility cluster share a common visual height and vertical center.
- Icon-only controls use the same visual icon box.
- Icon-plus-label controls use the same label type role and horizontal rhythm.
- `Hire Me` may use the filled high-contrast treatment.
- Theme, language, and Download CV must not compete with Hire Me through identical filled emphasis.
- Hover and active states must not change control dimensions.
- Do not use hover scale on persistent header controls; change color, surface, border, or elevation instead.
- Every icon-only button requires a specific accessible name.

### 7.4 Theme control

- Current theme state must be programmatically exposed.
- The icon represents the action or the state consistently; do not switch between those mental models across pages.
- Animation is limited to opacity/rotation/translation inside a stable control box.
- Theme behavior must be shared by all pages.

### 7.5 Language control

- English is the default state.
- If multiple languages remain, the control must expose the current language and available choices.
- Do not silently cycle through languages if the visitor cannot predict the next state.
- Retaining ID and CN remains `MISSING_DATA_REQUIRED` in the PRD; the UI must not imply production-ready translations before content review.

### 7.6 Download CV

`MISSING_DATA_REQUIRED` before public implementation:

- Approved CV file.
- Public filename.
- Language version or versions.
- Update date.
- Confirmation that the file is safe to publish.

The header may reserve the component specification, but it must not expose a broken or placeholder download.

### 7.7 Profile control

The current circular `G` control is not part of the owner-confirmed header-control list.

Target status: `MISSING_DATA_REQUIRED`.

Do not remove, retain, or reinterpret it as Download CV without an explicit task decision. If retained, it needs a distinct product job that does not duplicate Hire Me, Email, WhatsApp, or Download CV.

### 7.8 Responsive priority

When width becomes constrained:

1. Preserve a usable primary action.
2. Preserve theme access.
3. Preserve truthful language access if multiple languages are enabled.
4. Keep Download CV reachable without creating a broken compressed row.
5. Adapt search width or layout; do not clip the utility cluster.

The exact one-row versus two-row mobile composition remains `MISSING_DATA_REQUIRED` until a matched ZCOOL/mobile target is accepted.

---

## 8. Navigation, sidebar, and iconography

### 8.1 Required destinations

- Home
- Work
- Services
- Library
- Contact path

Navigation appearance must map to real navigation. State-only switching does not satisfy the independent-page PRD requirement.

### 8.2 Desktop sidebar baseline

`PROVISIONAL_IMPLEMENTATION_BASELINE`:

- Compact width: 44px.
- Expanded width: 160px.
- Navigation icon: 18×18px.
- Compact active surface: 32×32px.
- Shared icon family: Lucide.

These dimensions may be replaced only after reference measurement or owner approval.

### 8.3 Icon harmonization rules

- Use one icon family for global navigation.
- Use the same nominal icon box for peer destinations.
- Use a consistent stroke width of `2` for peer navigation icons.
- Active state is communicated through surface, color, indicator, or label—not by increasing stroke width from `2` to `2.4`.
- Choose icons by destination meaning, not visual novelty.
- Icons with visibly different optical mass require visual comparison at actual size.
- Brand, navigation, contact, and utility icons are separate semantic groups but must share alignment and rendering quality.
- Do not use emoji, text glyphs, handcrafted SVG approximations, or mixed icon libraries as substitutes.

### 8.4 Current icon issues

`VERIFIED_CURRENT_STATE`:

- Work uses `Flame`, which may communicate popularity/trending rather than a work archive.
- The active icon has a heavier stroke than inactive peers.
- The brand letter `G`, navigation icons, and WhatsApp occupy related positions without a documented optical-alignment rule.

Target Work icon and final destination-to-icon mapping: `MISSING_DATA_REQUIRED`.

### 8.5 Compact and expanded behavior

- Expanded mode shows icon and text label.
- Compact mode retains an accessible name and may show a tooltip on hover/focus.
- Tooltip must not be the only way to understand an essential destination on touch devices.
- Expand/collapse control must remain distinct from Home.
- Width transitions must not shift the page into an unusable off-screen state.

### 8.6 Mobile navigation

- Mobile uses a bottom navigation or another owner-approved mobile pattern.
- Mobile main content must not retain the desktop compact-sidebar left offset.
- The same essential destinations remain available.
- Labels must remain readable and must not depend on hover.

---

## 9. Homepage content tabs

The current homepage exposes Recommended Works, Services, and Library as content modes.

Rules:

- Active and inactive states must be visually distinguishable without relying only on color.
- Tab labels use the Navigation/Tab type role.
- The tab row aligns with the main content grid.
- Sticky behavior must be tested inside the actual scroll container.
- Switching tabs must update meaningful navigation or route state when the destination is intended to be shareable.
- A tab must not visually impersonate an independent page if refresh, sharing, and browser history cannot preserve it.

---

## 10. Work-card system

### 10.1 Product job

A Work card is a compact proof entry. It must let a visitor identify the project, inspect the media, and reach the correct destination.

### 10.2 Required anatomy

1. Primary media.
2. Persistent project title.
3. Verified client, owner, or project-status context.
4. Optional verified category or work type.
5. One real card-wide destination or action.

Do not render data roles that are unavailable. Omit them or block publication with `MISSING_DATA_REQUIRED` in the content source.

### 10.3 Grid baseline

`PROVISIONAL_IMPLEMENTATION_BASELINE`:

| View | Columns | Gap |
|---|---:|---:|
| Mobile | 1 | 16px |
| Tablet | 2 | 16px |
| Desktop | 3 | 24px |

The current default feed slices to 12 items. Twelve is a `VERIFIED_CURRENT_STATE`, not a permanent design-system rule. Final Work inventory, pagination, and load-more behavior remain `MISSING_DATA_REQUIRED`.

### 10.4 Card geometry

- Current cover baseline: `4:3`.
- Current corner baseline: `12px`.
- Metadata sits outside the media surface.
- The media-first card has no generic body panel padding.
- Use the grid gap for separation between cards; do not add arbitrary outer card padding.
- `object-cover` is allowed only when the crop preserves the meaning of the source work.
- Projects whose evidence depends on uncropped composition require another media treatment.

### 10.5 Card text hierarchy

- Project title: Work-card title role, always visible.
- Client/ownership context: Utility or Supporting role, visually secondary.
- Category: optional and tertiary.
- Initials or avatar are supporting identity, not a replacement for the title.
- Card copy must not introduce unsupported outcome claims.

### 10.6 Interaction states

Desktop:

- Hover may add a subtle surface, border, elevation, or media zoom.
- Hover must not reveal the only project title or essential action.
- Hover must not change card dimensions.

Keyboard:

- Entire card destination receives a visible focus indicator.
- Enter activates links; Space support is required only for actual buttons.
- Semantic element must match behavior: destination uses a link, in-place action uses a button.

Touch:

- No essential information depends on hover.
- Card tap target does not overlap adjacent actions.
- Media autoplay must not obstruct navigation or ignore reduced-motion preferences.

### 10.7 Empty, missing, and broken states

- Missing media must not silently display unrelated stock imagery.
- Broken media needs a neutral factual fallback with project identity.
- Empty search results explain the real filter/search scope.
- Unpublished or unverified projects do not appear as convincing placeholder case studies.

---

## 11. Featured proof / hero carousel

### Product job

The featured area prioritizes selected proof; it is not decoration.

Rules:

- Every featured slide has a real destination.
- Media fills a reserved aspect-ratio container to prevent layout shift.
- Project identity remains legible without covering the most important part of the work.
- Previous/next controls have visible labels for assistive technology.
- Autoplay pauses or can be controlled when required for accessibility.
- `prefers-reduced-motion` replaces sliding motion with an immediate state change.
- Featured ordering requires owner-approved content priority; popularity must not be fabricated.

---

## 12. Services

Service UI must follow this information order:

1. Buyer problem or desired outcome.
2. Visible example of completed output.
3. Verified deliverables.
4. Commercial use context supported by evidence.
5. Working method and tools.
6. Real contact action.

Rules:

- Do not lead with software/model logos as the primary value.
- Do not show price, ROI, revenue, time-saving, or performance claims without approved evidence.
- Interactive service cards require a real destination.
- Independent service pages are defined per approved service; current standalone pages do not automatically define the global pattern.

---

## 13. Library

Library is an applied-knowledge surface.

Required content hierarchy:

1. Entry type and date when verified.
2. Release, question, or experiment subject.
3. Visible GUSTI output.
4. Test context and constraints.
5. Source attribution.
6. What was learned or demonstrated without unsupported business promises.

Rules:

- Separate Release Report, Applied Experiment, Visual Output, Video Output, and Original Exploration when the taxonomy is approved.
- Tool/model version and release facts require authoritative sources.
- Reference work from another creator must never be presented as GUSTI output.
- Library density may relate to the homepage feed, but Library entries need enough context to distinguish research from client work.

---

## 14. Project-detail pages

### Required information roles

Use only roles supported by evidence:

1. Project identity.
2. Client or ownership context.
3. Context or problem.
4. Intended outcome.
5. GUSTI's verified role.
6. Media evidence.
7. Verified deliverables.
8. Process/tools when useful.
9. Verified impact or explicit absence of impact data.
10. Relevant next action.

### Visual rules

- One Page title.
- Narrative text remains in the reading column.
- Media may use the wider page axis.
- Major sections use 48px mobile / 64px desktop separation as the provisional baseline.
- Captions remain factual.
- Project-specific art direction may vary without changing the global shell.
- Commerce controls may be denser than narrative content but must not redefine typography for the entire page.

### Interaction rules

- A published project has a durable URL.
- Back, refresh, direct opening, and sharing preserve the destination.
- SKU or media selection exposes state and remains operable by keyboard.
- Sticky elements are tested at supported widths and inside the real scroll container.

---

## 15. Buttons and actions

### Hierarchy

- Primary: one dominant action per local decision context.
- Secondary: lower-emphasis alternative.
- Utility: state or preference control.
- Destructive: reserved for real destructive actions; not currently a portfolio pattern.

Rules:

- Use a link for navigation and download destinations.
- Use a button for in-place state changes.
- Every visible action has hover, focus-visible, active, and disabled behavior when applicable.
- Disabled state must explain why when the reason is not obvious.
- Do not use scale changes that alter layout or create jitter in persistent UI.
- CTA labels describe the action; avoid vague decorative copy.

---

## 16. Motion and media behavior

### Motion purpose

Motion may:

- Show change of state.
- Preserve spatial context.
- Confirm an action.
- Support media browsing.

Motion must not:

- Delay access to content.
- Hide essential information.
- Compensate for weak hierarchy.
- turn the site into a tool demonstration instead of a proof system.

### Baseline

- Compact interaction transitions: approximately 150–200ms.
- Content transitions may be longer only when the movement remains understandable.
- Use opacity and transform over layout-dimension animation.
- Reserve image/video dimensions before loading.
- Respect `prefers-reduced-motion` across every route.
- Autoplay video must be muted and `playsinline`; provide controls when the content requires them.

---

## 17. Responsive behavior

### Current implementation breakpoints

`VERIFIED_CURRENT_STATE`:

- `sm`: 640px.
- `md`: 768px.
- `lg`: 1024px.

Do not add another breakpoint for one component without proving that content breaks between existing boundaries.

### Required transformations

| Surface | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navigation | Mobile navigation; no desktop left offset | Pattern chosen by available width | Compact/expanded sidebar baseline |
| Header | No clipped utility controls | Search and utilities remain aligned | Search left, action cluster right |
| Work grid | 1 column | 2 columns | 3 columns baseline |
| Typography | Reduced by semantic role | Transitional role values | Full role values |
| Hero | Meaning-preserving crop | Wider composition | Featured composition |
| Project narrative | Single readable column | Readable column inside wide axis | Reading column plus wide media |

### Responsive acceptance

- No horizontal page scroll caused by the shell.
- No desktop sidebar padding remains when the sidebar is hidden.
- Header controls do not overlap, clip, or disappear without an alternative path.
- Project titles remain visible.
- Fixed navigation does not cover the final content or CTA.
- Media crop preserves the evidence being shown.

---

## 18. Accessibility baseline

Target baseline: WCAG 2.2 Level AA for applicable production UI. Reference: [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

### Required checks

- Text contrast is at least 4.5:1 for normal text and 3:1 for qualifying large text.
- Required non-text UI contrast is at least 3:1.
- Pointer targets meet WCAG 2.2 Target Size Minimum: 24×24 CSS px or its defined spacing/equivalent exceptions.
- Focus indicators are visible and not obscured by sticky UI.
- Keyboard operation reaches every essential action.
- Interactive appearance maps to a semantic interactive element.
- Images have purpose-appropriate alternative text.
- Decorative media uses an empty alternative.
- Video meaning is not available only through audio or motion.
- Page language and language-control state are exposed.
- Motion respects reduced-motion preferences.
- Zoom and text resize do not remove content or functionality.

Accessibility claims require testing; screenshots alone do not establish compliance.

---

## 19. VISUAL QUALITY GATE — GDWEB-DERIVED

### 19.1 Purpose

This gate converts GDWEB's official evaluation themes into a GUSTI-specific review. It does not predict or claim an award.

Use three outcomes:

- `PASS` — requirement is visibly and functionally supported.
- `NEEDS_WORK` — direction is present but quality or evidence is incomplete.
- `BLOCK` — contradicts PRD, breaks an essential journey, fabricates data, or cannot be used.

Do not create a numerical score without an approved weighting model.

### 19.2 Evaluation matrix

| GDWEB-derived criterion | GUSTI evaluation question | Required evidence | Block condition |
|---|---|---|---|
| Concept and design strategy | Does the design express GUSTI as a commercial proof system rather than a generic gallery? | Page screenshot plus mapping to PRD purpose | Visual concept contradicts the page job |
| Typography | Can a visitor identify page, section, project, context, and action in the intended order? | Screenshot at supported widths and computed type roles | Essential hierarchy depends on hover, tiny text, or arbitrary weight |
| Creativity | Does the experience have a distinct GUSTI expression without copying the reference brand? | Reference/implementation comparison and originality review | Direct brand imitation or decorative novelty that obscures proof |
| Component and icon composition | Do cards, pictograms, icons, controls, and metaphors look and behave as one system? | Component inventory and state screenshots | Mixed icon language, unclear meaning, broken alignment, or inconsistent state treatment |
| Layout and interface | Is information arranged for fast proof discovery and concise access? | Desktop/mobile captures and grid measurements | Clipping, broken axes, arbitrary padding, or inaccessible destination |
| Usability and readability | Can the intended buyer understand and operate the page without design knowledge? | Task walkthrough, keyboard check, readability check | Essential content/action is hidden, misleading, or unreadable |
| Purposeful interaction | Does interaction explain state or support the journey? | Hover/focus/touch/motion state capture | Interaction is decorative, blocks content, or fails on touch/keyboard |
| Current technology expression | Is technology used to improve media, responsiveness, accessibility, or performance? | Build/runtime evidence | Technology is presented as value while degrading the product job |
| Visual identity | Do UI, color, type, image treatment, and motion express one GUSTI system? | Cross-page comparison in both themes | Each page appears to be a different product |
| Verbal identity | Do labels, CTA, headings, and supporting copy express the outcome-first doctrine? | Copy review against evidence status | Tool-first or fabricated commercial language |

### 19.3 Mandatory gate sequence

Run in this order:

1. **Product truth gate** — no fabricated or unauthorized content.
2. **Journey gate** — the primary page job and destination work.
3. **Responsive gate** — essential hierarchy survives supported widths.
4. **Accessibility gate** — keyboard, focus, semantics, contrast, and motion baseline.
5. **Visual-system gate** — type, spacing, icons, components, and identity are coherent.
6. **Reference-fidelity gate** — scoped ZCOOL-derived structure is accurately translated.
7. **Polish gate** — motion, micro-alignment, and finishing details.

A failure in steps 1–4 blocks polish approval.

### 19.4 Header gate

The header passes only when:

- Search and controls share a stable vertical axis.
- Hire Me is the clear primary action.
- Theme and language read as utilities.
- Download CV has a real approved file.
- No control is clipped at supported widths.
- The profile control has an approved job or is absent by explicit decision.
- Hover/focus does not alter layout dimensions.

### 19.5 Sidebar icon gate

The sidebar passes only when:

- Peer icons use one family, nominal box, and stroke system.
- Destination meaning is understandable.
- Active state does not distort one icon's optical weight.
- Compact alignment is centered.
- Expanded labels align consistently.
- Mobile navigation does not inherit desktop offsets.

### 19.6 Work-card gate

The Work grid passes only when:

- Every published card has a real destination or is clearly non-interactive.
- Project title is always available without hover.
- Client/ownership context is factual.
- Media crop preserves the work.
- Grid columns, gaps, and axes repeat consistently.
- Keyboard focus is visible.
- Touch users receive the same essential information.
- The feed does not fabricate ranking, engagement, or recommendation status.

---

## 20. Visual QA procedure

### 20.1 Before implementation

1. Name the affected page and component.
2. Name the PRD requirement.
3. Name the accepted reference and viewport when applicable.
4. State exact files in scope.
5. Identify `MISSING_DATA_REQUIRED` items.

### 20.2 During implementation

- Preserve unrelated behavior.
- Use semantic type, spacing, color, and interaction roles.
- Do not introduce a second local design system inside one component.
- Inspect actual rendered output; source code alone is not visual evidence.

### 20.3 Reference comparison

When matching ZCOOL or another approved reference:

1. Capture reference and GUSTI at the same viewport and state.
2. Compare structure, axes, density, type hierarchy, gap, padding, media ratio, radius, and interaction.
3. Identify visible differences.
4. Fix scoped differences.
5. Capture again.

Do not call a match accurate from memory or from two unmatched screenshots.

### 20.4 Required responsive review

At minimum, inspect:

- Below 640px.
- 640–767px.
- 768–1023px.
- 1024px and above.

Use a specific viewport within each band based on where the content actually breaks; do not rely only on device labels.

### 20.5 Engineering verification

After UI implementation:

1. Run `npm run build`.
2. Run `npm run lint` when TypeScript or application code changed.
3. Inspect browser console errors.
4. Test essential pointer and keyboard flows.
5. Report exact files changed and areas intentionally untouched.

---

## 21. Current unresolved UI decisions

The following must remain visible and must not be guessed:

| ID | Decision | Status |
|---|---|---|
| UI-001 | Matched full-page ZCOOL desktop capture and measured values | `MISSING_DATA_REQUIRED` |
| UI-002 | ZCOOL mobile reference and target mobile header composition | `MISSING_DATA_REQUIRED` |
| UI-003 | Approved CV asset, language, filename, and public permission | `MISSING_DATA_REQUIRED` |
| UI-004 | Retain, remove, or redefine the circular profile control | `MISSING_DATA_REQUIRED` |
| UI-005 | Final Work destination icon; current `Flame` is provisional | `MISSING_DATA_REQUIRED` |
| UI-006 | Final search scope and search URL behavior | `MISSING_DATA_REQUIRED` |
| UI-007 | Retain Indonesian and Chinese product languages | `MISSING_DATA_REQUIRED` |
| UI-008 | Default theme, system preference, and theme persistence | `MISSING_DATA_REQUIRED` |
| UI-009 | Final Work item count, ordering, filter, and pagination model | `MISSING_DATA_REQUIRED` |
| UI-010 | Final conversion mechanism beyond the current WhatsApp path | `MISSING_DATA_REQUIRED` |
| UI-011 | Final semantic light/dark color token values | `MISSING_DATA_REQUIRED` |

These decisions do not block documenting the system. They block only the affected implementation or final-approval claim.

---

## 22. Component scope and file mapping

This map is orientation, not automatic authorization to edit.

| UI area | Primary implementation |
|---|---|
| Global shell and state | `src/App.tsx` |
| Header controls | `src/components/GustiTopHeader.tsx` |
| Sidebar and mobile navigation | `src/components/GustiSidebar.tsx` |
| Work feed and cards | `src/components/RecommendedWorks.tsx` |
| Featured proof | `src/components/HeroCarousel.tsx` |
| Homepage content modes | `src/components/Tabs.tsx` |
| Global tokens and layout utilities | `src/index.css` |
| Product content | `src/data.ts`, `src/data/projectDetails.ts` |

High-risk files remain protected by `AGENTS.md`. A guideline requirement does not itself authorize editing those files.

---

## 23. Definition of UI-guideline compliance

An implementation complies only when:

- It supports the relevant PRD page job.
- It uses factual content.
- It stays inside the approved task scope.
- It follows the semantic typography, spacing, color, icon, and interaction rules.
- It preserves essential hierarchy across supported widths.
- It provides real destinations and actions.
- It passes the applicable GDWEB-derived quality gates.
- It passes the accessibility baseline checks that can be tested.
- It has rendered comparison evidence when a visual reference is involved.
- Remaining uncertainty is explicitly reported as `MISSING_DATA_REQUIRED`.

Visual polish cannot compensate for a broken product job, fabricated evidence, inaccessible interaction, or non-durable destination.
