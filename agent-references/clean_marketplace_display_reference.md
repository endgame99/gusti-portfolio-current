# Clean Marketplace Display Reference

Purpose: structural UI reference for the `Marketplace Display` service page.

Use this file as a clean reference only. Do not copy marketplace product text, author names, auth URLs, random hash classes, tracking attributes, or platform data from the original source.

---

## Source Structure Mapping

Original uploaded HTML structure, cleaned into semantic names:

| Original Source Pattern | Clean Reference Name | Purpose |
|---|---|---|
| `section` | `.marketplace-display-section` | Main page section |
| `.contents-infinite-scroll` | `.marketplace-infinite-area` | Scrollable content area |
| `gdwc-waterfall` / `.js-waterfall__waterfall-panel` | `.marketplace-waterfall-grid` | Masonry / waterfall card grid |
| `.js-waterfall__item` | `.marketplace-waterfall-item` | One masonry grid item |
| `.contents-material-card-v2__root` | `.marketplace-card-root` | Card wrapper |
| `.contents-material-card-v2` | `.marketplace-card` | Product/template card |
| `.contents-material-card-v2__preview` | `.marketplace-card-preview` | Image preview area |
| `picture > img` | `.marketplace-card-image` | Visual image |
| `.contents-material-card-v2__operations` | `.marketplace-card-actions` | Optional hover/action layer |
| `.contents-material-card-v2-author-info` | `.marketplace-card-meta` | Small footer/meta row |

---

## Clean HTML Reference

```html
<section class="marketplace-display-section">
  <div class="marketplace-infinite-area">
    <div class="marketplace-waterfall-grid">

      <article class="marketplace-waterfall-item" data-item-id="item-01">
        <div class="marketplace-card-root">
          <div class="marketplace-card">
            <div class="marketplace-card-preview">
              <button class="marketplace-card-trigger" type="button" aria-label="Select Marketplace Display item 01">
                <picture class="marketplace-card-picture">
                  <img
                    class="marketplace-card-image"
                    src="/marketplace-display/item-01.webp"
                    alt="Marketplace Display Item 01"
                    loading="lazy"
                  />
                </picture>
              </button>
            </div>

            <div class="marketplace-card-actions">
              <button class="marketplace-card-action" type="button">
                Make This Visual
              </button>
            </div>
          </div>

          <div class="marketplace-card-meta">
            <span class="marketplace-card-dot" aria-hidden="true"></span>
            <span class="marketplace-card-title">Marketplace Display 01</span>
          </div>
        </div>
      </article>

      <article class="marketplace-waterfall-item" data-item-id="item-02">
        <div class="marketplace-card-root">
          <div class="marketplace-card">
            <div class="marketplace-card-preview">
              <button class="marketplace-card-trigger" type="button" aria-label="Select Marketplace Display item 02">
                <picture class="marketplace-card-picture">
                  <img
                    class="marketplace-card-image"
                    src="/marketplace-display/item-02.webp"
                    alt="Marketplace Display Item 02"
                    loading="lazy"
                  />
                </picture>
              </button>
            </div>

            <div class="marketplace-card-actions">
              <button class="marketplace-card-action" type="button">
                Make This Visual
              </button>
            </div>
          </div>

          <div class="marketplace-card-meta">
            <span class="marketplace-card-dot" aria-hidden="true"></span>
            <span class="marketplace-card-title">Marketplace Display 02</span>
          </div>
        </div>
      </article>

      <!-- Repeat the same marketplace-waterfall-item structure until item-50. -->

    </div>
  </div>
</section>
```

---

## UI Structure Lock

Use this structure for the Marketplace Display selection cards:

```txt
marketplace-display-section
└── marketplace-infinite-area
    └── marketplace-waterfall-grid
        └── marketplace-waterfall-item
            └── marketplace-card-root
                ├── marketplace-card
                │   ├── marketplace-card-preview
                │   │   └── marketplace-card-trigger
                │   │       └── marketplace-card-picture
                │   │           └── marketplace-card-image
                │   └── marketplace-card-actions
                │       └── marketplace-card-action
                └── marketplace-card-meta
                    ├── marketplace-card-dot
                    └── marketplace-card-title
```

---

## Marketplace Display Page Rules

- Page route target: `/services/marketplace-display`.
- Service card target: `Marketplace Display`.
- Visual ratio target: `9:16`.
- Main image section uses one active image only.
- Main image section does not use a thumbnail strip.
- Selection section uses 50 cards temporarily.
- Selection cards do not use thumbnail strips.
- One selection card equals one image.
- Clicking a selection card updates the main 9:16 image.
- Prompt panel should follow the existing PDP Visuals `Master Prompt Set` behavior.
- Keep `Unlock Prompt`.
- Keep `Make This Visual`.
- Do not render source marketplace author data.
- Do not render source marketplace account names.
- Do not render source marketplace prompt text.
- Do not render platform action labels from the original source.
- Do not copy original `auth_key` image URLs.
- Do not copy random hash class names.
- Do not copy tracking attributes.
- Do not use placeholder Chinese product text.
- Do not add thumbnail strips to this page.

---

## Suggested Asset Paths

Use these local public assets:

```txt
/public/marketplace-display/item-01.webp
/public/marketplace-display/item-02.webp
/public/marketplace-display/item-03.webp
...
/public/marketplace-display/item-50.webp
```

Code paths:

```txt
/marketplace-display/item-01.webp
/marketplace-display/item-02.webp
/marketplace-display/item-03.webp
...
/marketplace-display/item-50.webp
```

---

## Clean Card Data Shape

```ts
type MarketplaceDisplayItem = {
  id: string;
  title: string;
  image: string;
  promptLabel: string;
};
```

Example:

```ts
const marketplaceDisplayItems = [
  {
    id: "marketplace-display-01",
    title: "Marketplace Display 01",
    image: "/marketplace-display/item-01.webp",
    promptLabel: "Marketplace Display Prompt 01",
  },
  {
    id: "marketplace-display-02",
    title: "Marketplace Display 02",
    image: "/marketplace-display/item-02.webp",
    promptLabel: "Marketplace Display Prompt 02",
  },
];
```

---

## Implementation Behavior Lock

```txt
Click Marketplace Display Card
→ set activeItem
→ update main 9:16 image
→ update Master Prompt Set context
→ do not open external marketplace URL
→ do not open new page
→ do not show thumbnail strip
```

---

## What Was Removed From Original Source

Removed:
- random hashed classes
- tracking attributes
- `data-spm`
- `data-v-*`
- inline absolute positioning
- inline auth-key image URLs
- source marketplace product text
- author profile links
- author avatars
- account names
- hidden prompt spans
- platform-specific buttons
- platform-specific data attributes
- lazy image internal classes
- duplicated source tags
- infinite source noise

Kept:
- waterfall/masonry grid structure
- card root
- image preview
- image trigger
- optional action layer pattern
- compact card meta/footer pattern
```
