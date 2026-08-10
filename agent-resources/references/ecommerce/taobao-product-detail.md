# TAOBAO DESKTOP PRODUCT DETAIL — CLEAN STRUCTURAL REFERENCE

## Purpose

This file is a cleaned implementation reference derived from the supplied Taobao desktop product-detail HTML.

Use it only as a structural and interaction guide for the CONTOURA portfolio project detail page.

Do not copy:
- Taobao hashed class names
- Taobao branding
- Chinese marketplace copy
- external Taobao media
- prices, discounts, sales counts, ratings, reviews, customer data, or shipping claims
- Taobao custom video controls
- checkout behavior
- platform-specific tracking attributes

Use local CONTOURA project assets and verified portfolio content only.

---

## 1. Top-Level Layout

```html
<section class="product-detail-shell">
  <div class="product-detail-main">
    <div class="product-detail-left">
      <div class="brand-header"></div>
      <div class="product-gallery"></div>
      <div class="media-switch"></div>
      <div class="product-content-tabs"></div>
      <div class="product-content-sections"></div>
    </div>

    <aside class="product-purchase-panel"></aside>
  </div>
</section>
```

### Layout behavior

- Desktop: two columns
- Left column: brand identity, gallery, tabs, long-form content
- Right column: product title, selectors, quantity, portfolio CTA
- Tablet: collapse to one column when space becomes limited
- Mobile: single column, thumbnails become horizontal
- No horizontal overflow
- Both columns align at the top

---

## 2. Brand / Store Header

```html
<header class="brand-header">
  <div class="brand-header__identity">
    <div class="brand-header__logo">
      <img src="/local-logo.webp" alt="CONTOURA logo" />
    </div>

    <div class="brand-header__content">
      <div class="brand-header__name-row">
        <span class="brand-header__name">CONTOURA</span>
      </div>

      <div class="brand-header__meta">
        <span>Client Work</span>
        <span aria-hidden="true">/</span>
        <span>Product Commerce Visuals</span>
      </div>
    </div>
  </div>
</header>
```

### Keep

- Local brand logo
- Brand name
- Compact factual metadata

### Remove

- Store rating
- VIP score
- shipping-speed score
- customer-service score
- customer-service button
- enter-store button
- external shop links
- platform badges

---

## 3. Product Gallery

```html
<section class="product-gallery">
  <div class="product-gallery__inner">
    <div class="product-gallery__thumbnails">
      <button class="product-thumbnail is-active">
        <img src="/local-media-01.webp" alt="" />
      </button>

      <button class="product-thumbnail">
        <img src="/local-media-02.webp" alt="" />
      </button>
    </div>

    <div class="product-gallery__main">
      <div class="product-gallery__surface">
        <img
          class="product-gallery__image"
          src="/local-media-01.webp"
          alt="CONTOURA product visual"
        />
      </div>
    </div>
  </div>
</section>
```

### Gallery rules

- Vertical thumbnails on desktop
- Active thumbnail state
- Clicking a thumbnail updates the main media
- Main media uses a square container
- `object-fit: contain`
- Product must never be cropped
- Use local media only
- Natural numeric asset order
- Internal thumbnail scrolling when necessary

### Remove

- Parameter thumbnail
- Size thumbnail
- Taobao icon font
- blurred background layer
- platform-specific overlays
- custom previous/next hover zones

---

## 4. Main Video State

```html
<div class="product-gallery__main">
  <video
    class="product-gallery__video"
    src="/local-video.mp4"
    controls
    playsinline
    preload="metadata"
  ></video>
</div>
```

### Video rules

- Native HTML5 controls
- `object-fit: contain`
- no Taobao custom controls
- no playback-speed menu unless already required
- no autoplay by default
- no external video URL
- no custom volume or fullscreen implementation

---

## 5. Media Switch

```html
<nav class="media-switch" aria-label="Product media">
  <button class="media-switch__item is-active">Video</button>
  <button class="media-switch__item">Gallery</button>
  <button class="media-switch__item">Product Details</button>
</nav>
```

Only render tabs that have actual content.

Do not add:
- Parameters
- Size
unless those sections are backed by verified project data.

---

## 6. Product Content Navigation

```html
<nav class="product-content-tabs">
  <button class="product-content-tab">Product Overview</button>
  <button class="product-content-tab">Size &amp; Specifications</button>
  <button class="product-content-tab is-active">Product Details</button>
</nav>
```

### Allowed sections

- Product Overview
- Size & Specifications
- Product Details

### Remove

- Customer Reviews
- Questions & Answers
- Store Recommendations
- Viewed Again
- fake counts
- “new” labels

---

## 7. Product Overview

```html
<section class="product-section" id="product-overview">
  <h2>Product Overview</h2>

  <dl class="product-overview-grid">
    <div>
      <dt>Brand</dt>
      <dd>CONTOURA</dd>
    </div>

    <div>
      <dt>Project Type</dt>
      <dd>Client Work</dd>
    </div>

    <div>
      <dt>Category</dt>
      <dd>Product Commerce Visuals</dd>
    </div>
  </dl>
</section>
```

Use verified project data only.

Do not invent:
- material claims
- technology
- test results
- certifications
- product performance
- campaign metrics

---

## 8. Long-Form Product Details

```html
<section class="product-section" id="product-details">
  <h2>Product Details</h2>

  <div class="product-detail-sequence">
    <img src="/detail-01.webp" alt="" />
    <img src="/detail-02.webp" alt="" />

    <video
      src="/detail-video.mp4"
      controls
      playsinline
      preload="metadata"
    ></video>

    <img src="/detail-03.webp" alt="" />
  </div>
</section>
```

### Long-form media rules

- natural numeric order
- width: 100%
- height: auto
- no cropping
- no gaps between sequential images
- no border radius between connected images
- no inline zoom
- no CSS transform scale
- no fixed original image width
- no hotlinked Taobao media

---

## 9. Size & Specifications

```html
<section class="product-section" id="size-specifications">
  <h2>Size &amp; Specifications</h2>

  <div class="specification-grid">
    <div class="specification-item">
      <span class="specification-item__label">Brand</span>
      <span class="specification-item__value">CONTOURA</span>
    </div>
  </div>
</section>
```

Only include verified specifications.

Do not copy:
- SecretWorld product data
- Chinese size data
- buyer recommendation percentages
- customer size references
- model numbers
- material compositions
- age ranges
- origin claims
unless explicitly verified for CONTOURA.

---

## 10. Right-Side Product Panel

```html
<aside class="product-purchase-panel">
  <div class="product-purchase-panel__body">
    <header class="product-title-block">
      <h1>Curves in Comfort - Women's Underwear - Ecommerce</h1>

      <div class="product-title-block__meta">
        <span>Client Work</span>
        <span aria-hidden="true">/</span>
        <span>Product Commerce Visuals</span>
      </div>
    </header>

    <section class="product-option-group">
      <h2>Color</h2>
      <div class="product-option-list"></div>
    </section>

    <section class="product-option-group">
      <h2>Size</h2>
      <div class="product-option-list"></div>
    </section>

    <section class="quantity-control">
      <h2>Quantity</h2>

      <div class="quantity-control__input">
        <button type="button" aria-label="Decrease quantity">−</button>
        <input type="number" min="1" value="1" />
        <button type="button" aria-label="Increase quantity">+</button>
      </div>
    </section>

    <button class="product-story-cta" type="button">
      View Full Visual Story
    </button>
  </div>
</aside>
```

### Keep

- Product title
- Factual project metadata
- Color selector if local variants exist
- Size selector if verified data exists
- Quantity control as visual UI
- Portfolio CTA that scrolls to Product Details

### Remove

- price
- original price
- discounted price
- coupons
- promotion banner
- sales count
- invoice claim
- repeat-customer count
- add-to-cart count
- delivery claim
- return policy
- checkout
- collect/favorite button
- add-to-cart button
- purchase button

---

## 11. Color Selector

```html
<section class="product-option-group">
  <div class="product-option-group__header">
    <h2>Color</h2>
  </div>

  <div class="product-option-list">
    <button class="product-option product-option--with-image is-selected">
      <img src="/variant-01.webp" alt="" />
      <span>Verified variant name</span>
    </button>
  </div>
</section>
```

Rules:

- Use only real local variants
- Selection may update the active gallery media
- No fabricated names
- No Chinese source labels
- No fake disabled stock state

---

## 12. Size Selector

```html
<section class="product-option-group">
  <h2>Size</h2>

  <div class="product-option-list">
    <button class="product-option is-selected">M</button>
    <button class="product-option">L</button>
    <button class="product-option">XL</button>
  </div>
</section>
```

If size data is not verified, replace the selector with:

```html
<p class="product-option-note">Sizes shown in project artwork</p>
```

Do not invent:
- bra-cup mapping
- chest measurements
- recommendation percentages
- stock status

---

## 13. Responsive Behavior

### Desktop

```css
.product-detail-main {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(340px, 0.85fr);
  gap: 32px;
  align-items: start;
}

.product-gallery__inner {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 16px;
}

.product-purchase-panel {
  position: sticky;
  top: var(--header-offset);
}
```

### Tablet

```css
.product-detail-main {
  grid-template-columns: 1fr;
}

.product-purchase-panel {
  position: static;
}

.product-gallery__inner {
  grid-template-columns: 1fr;
}

.product-gallery__thumbnails {
  display: flex;
  overflow-x: auto;
}
```

### Mobile

```css
.product-detail-shell {
  width: 100%;
  padding-inline: 16px;
}

.product-gallery__main {
  width: 100%;
}

.product-content-tabs {
  overflow-x: auto;
  white-space: nowrap;
}
```

---

## 14. Required Interaction Model

```ts
type ProductMedia =
  | {
      id: string;
      type: "image";
      src: string;
      alt: string;
    }
  | {
      id: string;
      type: "video";
      src: string;
      poster?: string;
    };

type ProductVariant = {
  id: string;
  label: string;
  image?: string;
  mediaId?: string;
};

type ProductDetailData = {
  brand: string;
  title: string;
  category: string;
  media: ProductMedia[];
  variants?: ProductVariant[];
  sizes?: string[];
};
```

Required interactions:

- thumbnail click updates active media
- variant click updates selected state
- variant may update active media
- quantity decrement cannot go below 1
- quantity increment increases locally
- CTA scrolls to Product Details
- tab click scrolls to corresponding section

No checkout integration.

---

## 15. Final React-Oriented Structure

```tsx
<section className="contouraProductDetail">
  <ProjectHeader />

  <div className="contouraProductDetail__layout">
    <div className="contouraProductDetail__left">
      <BrandHeader />

      <ProductGallery
        media={media}
        activeMediaId={activeMediaId}
        onMediaChange={setActiveMediaId}
      />

      <MediaSwitch />

      <ProductContentTabs />

      <ProductOverview />
      <SizeSpecifications />
      <ProductDetailSequence />
    </div>

    <ProductPanel
      title="Curves in Comfort - Women's Underwear - Ecommerce"
      variants={variants}
      sizes={sizes}
      quantity={quantity}
      onQuantityChange={setQuantity}
    />
  </div>
</section>
```

---

## 16. Explicit Exclusion List

Never carry these elements from the supplied Taobao HTML into the portfolio implementation:

- Taobao hashed CSS classes
- tracking attributes
- `data-spm`
- SecretWorld branding
- Chinese copy
- Taobao image URLs
- Taobao video URLs
- customer avatars
- reviews
- Q&A
- recommendation cards
- prices
- discount labels
- coupons
- sales counts
- store scores
- shipping promises
- guarantees
- stock claims
- checkout buttons
- favorite/collect buttons
- Taobao icon font
- Taobao custom player
- hidden forms
- AliWangWang chat
- purchase APIs
- marketplace analytics

---

## 17. Source-of-Truth Rules

For the final CONTOURA page:

1. Existing GUSTI architecture is the source of truth.
2. Root-level `UI_GUIDELINES.md` is the active default UI policy.
3. Local files under `public/work-cards/Starmap/` remain the temporary media source.
4. Only verified CONTOURA copy may be displayed.
5. This file provides structure, not marketplace content.
