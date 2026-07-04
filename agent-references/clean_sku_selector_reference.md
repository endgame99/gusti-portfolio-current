# Clean SKU Selector Section Reference

Use this file as the mandatory UI/UX structural reference for the PDP Visuals SKU Selector Section.

## Required structure names

- `sku-selector-section`
- `sku-selector-grid`
- `sku-product-card`
- `mainImage`
- `scrollerWrapper`
- `skuSelector`
- `skuItems`
- `skuItemImage`
- `rightArrowContainer`
- `descContainer`

## Do not use

- price
- payment count
- discount tags
- rank info
- marketplace text

## HTML reference

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clean SKU Selector Section Reference</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: #f5f5f5;
      color: #111111;
      font-family: Inter, Arial, sans-serif;
    }

    .sku-selector-section {
      width: 100%;
      padding: 40px 24px;
    }

    .sku-selector-header {
      max-width: 1180px;
      margin: 0 auto 18px;
    }

    .sku-selector-eyebrow {
      margin: 0 0 8px;
      color: #767676;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .sku-selector-title {
      margin: 0;
      color: #111111;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.03em;
      line-height: 1.1;
    }

    .sku-product-grid {
      max-width: 1180px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
    }

    .sku-product-card {
      overflow: hidden;
      border-radius: 18px;
      background: #ffffff;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }

    .sku-product-card.is-active {
      outline: 2px solid #111111;
      outline-offset: 3px;
    }

    .main-image {
      display: block;
      width: 100%;
      padding: 0;
      border: 0;
      background: #eeeeee;
      aspect-ratio: 1 / 1;
      cursor: pointer;
    }

    .main-image img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .scroller-wrapper {
      position: relative;
      padding: 10px 0 10px 10px;
      background: #ffffff;
    }

    .sku-selector {
      overflow: hidden;
      width: 100%;
    }

    .sku-items {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      scroll-behavior: smooth;
      scrollbar-width: none;
      padding-right: 42px;
    }

    .sku-items::-webkit-scrollbar {
      display: none;
    }

    .sku-item-image {
      flex: 0 0 44px;
      width: 44px;
      height: 44px;
      padding: 0;
      overflow: hidden;
      border: 1px solid #e6e6e6;
      border-radius: 10px;
      background: #f2f2f2;
      cursor: pointer;
    }

    .sku-item-image img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .right-arrow-container {
      position: absolute;
      top: 50%;
      right: 8px;
      z-index: 2;
      width: 30px;
      height: 30px;
      display: grid;
      place-items: center;
      transform: translateY(-50%);
      border: 0;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.14);
      color: #111111;
      font-size: 25px;
      line-height: 1;
      cursor: pointer;
    }

    .mask {
      position: absolute;
      top: 0;
      right: 0;
      width: 58px;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(90deg, rgba(255,255,255,0), #ffffff 72%);
    }

    .desc-container {
      padding: 0 14px 16px;
      background: #ffffff;
    }

    .sku-title {
      margin: 0 0 6px;
      color: #111111;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.35;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .sku-subtitle {
      margin: 0;
      color: #777777;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.35;
    }

    @media (max-width: 980px) {
      .sku-product-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 520px) {
      .sku-selector-section {
        padding: 28px 14px;
      }

      .sku-product-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>
  <section class="sku-selector-section" aria-labelledby="sku-selector-title">
    <div class="sku-selector-header">
      <p class="sku-selector-eyebrow">SKU Selector Section</p>
      <h2 id="sku-selector-title" class="sku-selector-title">Other SKU Visual Sets</h2>
    </div>

    <div class="sku-product-grid">
        <article class="sku-product-card" data-sku="sku-01" tabindex="0">
          <button class="main-image" type="button" aria-label="Select sku-01">
            <img src="/pdp-sku-selector/sku-01/cover.jpg" alt="sku-01 cover" />
          </button>

          <div class="scroller-wrapper">
            <div class="sku-selector" aria-label="sku-01 thumbnail strip">
              <div class="sku-items">
              <button class="sku-item-image" type="button" aria-label="sku-01 thumbnail 01">
                <img src="/pdp-sku-selector/sku-01/thumb-01.jpg" alt="sku-01 thumbnail 01" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-01 thumbnail 02">
                <img src="/pdp-sku-selector/sku-01/thumb-02.jpg" alt="sku-01 thumbnail 02" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-01 thumbnail 03">
                <img src="/pdp-sku-selector/sku-01/thumb-03.jpg" alt="sku-01 thumbnail 03" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-01 thumbnail 04">
                <img src="/pdp-sku-selector/sku-01/thumb-04.jpg" alt="sku-01 thumbnail 04" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-01 thumbnail 05">
                <img src="/pdp-sku-selector/sku-01/thumb-05.jpg" alt="sku-01 thumbnail 05" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-01 thumbnail 06">
                <img src="/pdp-sku-selector/sku-01/thumb-06.jpg" alt="sku-01 thumbnail 06" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-01 thumbnail 07">
                <img src="/pdp-sku-selector/sku-01/thumb-07.jpg" alt="sku-01 thumbnail 07" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-01 thumbnail 08">
                <img src="/pdp-sku-selector/sku-01/thumb-08.jpg" alt="sku-01 thumbnail 08" />
              </button>
              </div>
            </div>

            <button class="right-arrow-container" type="button" aria-label="Scroll sku-01 thumbnails">
              <span aria-hidden="true">›</span>
            </button>

            <div class="mask" aria-hidden="true"></div>
          </div>

          <div class="desc-container">
            <h3 class="sku-title">SKU 01 Product Name</h3>
            <p class="sku-subtitle">Industry / category subtitle</p>
          </div>
        </article>
        <article class="sku-product-card" data-sku="sku-02" tabindex="0">
          <button class="main-image" type="button" aria-label="Select sku-02">
            <img src="/pdp-sku-selector/sku-02/cover.jpg" alt="sku-02 cover" />
          </button>

          <div class="scroller-wrapper">
            <div class="sku-selector" aria-label="sku-02 thumbnail strip">
              <div class="sku-items">
              <button class="sku-item-image" type="button" aria-label="sku-02 thumbnail 01">
                <img src="/pdp-sku-selector/sku-02/thumb-01.jpg" alt="sku-02 thumbnail 01" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-02 thumbnail 02">
                <img src="/pdp-sku-selector/sku-02/thumb-02.jpg" alt="sku-02 thumbnail 02" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-02 thumbnail 03">
                <img src="/pdp-sku-selector/sku-02/thumb-03.jpg" alt="sku-02 thumbnail 03" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-02 thumbnail 04">
                <img src="/pdp-sku-selector/sku-02/thumb-04.jpg" alt="sku-02 thumbnail 04" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-02 thumbnail 05">
                <img src="/pdp-sku-selector/sku-02/thumb-05.jpg" alt="sku-02 thumbnail 05" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-02 thumbnail 06">
                <img src="/pdp-sku-selector/sku-02/thumb-06.jpg" alt="sku-02 thumbnail 06" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-02 thumbnail 07">
                <img src="/pdp-sku-selector/sku-02/thumb-07.jpg" alt="sku-02 thumbnail 07" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-02 thumbnail 08">
                <img src="/pdp-sku-selector/sku-02/thumb-08.jpg" alt="sku-02 thumbnail 08" />
              </button>
              </div>
            </div>

            <button class="right-arrow-container" type="button" aria-label="Scroll sku-02 thumbnails">
              <span aria-hidden="true">›</span>
            </button>

            <div class="mask" aria-hidden="true"></div>
          </div>

          <div class="desc-container">
            <h3 class="sku-title">SKU 02 Product Name</h3>
            <p class="sku-subtitle">Industry / category subtitle</p>
          </div>
        </article>
        <article class="sku-product-card" data-sku="sku-03" tabindex="0">
          <button class="main-image" type="button" aria-label="Select sku-03">
            <img src="/pdp-sku-selector/sku-03/cover.jpg" alt="sku-03 cover" />
          </button>

          <div class="scroller-wrapper">
            <div class="sku-selector" aria-label="sku-03 thumbnail strip">
              <div class="sku-items">
              <button class="sku-item-image" type="button" aria-label="sku-03 thumbnail 01">
                <img src="/pdp-sku-selector/sku-03/thumb-01.jpg" alt="sku-03 thumbnail 01" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-03 thumbnail 02">
                <img src="/pdp-sku-selector/sku-03/thumb-02.jpg" alt="sku-03 thumbnail 02" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-03 thumbnail 03">
                <img src="/pdp-sku-selector/sku-03/thumb-03.jpg" alt="sku-03 thumbnail 03" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-03 thumbnail 04">
                <img src="/pdp-sku-selector/sku-03/thumb-04.jpg" alt="sku-03 thumbnail 04" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-03 thumbnail 05">
                <img src="/pdp-sku-selector/sku-03/thumb-05.jpg" alt="sku-03 thumbnail 05" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-03 thumbnail 06">
                <img src="/pdp-sku-selector/sku-03/thumb-06.jpg" alt="sku-03 thumbnail 06" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-03 thumbnail 07">
                <img src="/pdp-sku-selector/sku-03/thumb-07.jpg" alt="sku-03 thumbnail 07" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-03 thumbnail 08">
                <img src="/pdp-sku-selector/sku-03/thumb-08.jpg" alt="sku-03 thumbnail 08" />
              </button>
              </div>
            </div>

            <button class="right-arrow-container" type="button" aria-label="Scroll sku-03 thumbnails">
              <span aria-hidden="true">›</span>
            </button>

            <div class="mask" aria-hidden="true"></div>
          </div>

          <div class="desc-container">
            <h3 class="sku-title">SKU 03 Product Name</h3>
            <p class="sku-subtitle">Industry / category subtitle</p>
          </div>
        </article>
        <article class="sku-product-card" data-sku="sku-04" tabindex="0">
          <button class="main-image" type="button" aria-label="Select sku-04">
            <img src="/pdp-sku-selector/sku-04/cover.jpg" alt="sku-04 cover" />
          </button>

          <div class="scroller-wrapper">
            <div class="sku-selector" aria-label="sku-04 thumbnail strip">
              <div class="sku-items">
              <button class="sku-item-image" type="button" aria-label="sku-04 thumbnail 01">
                <img src="/pdp-sku-selector/sku-04/thumb-01.jpg" alt="sku-04 thumbnail 01" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-04 thumbnail 02">
                <img src="/pdp-sku-selector/sku-04/thumb-02.jpg" alt="sku-04 thumbnail 02" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-04 thumbnail 03">
                <img src="/pdp-sku-selector/sku-04/thumb-03.jpg" alt="sku-04 thumbnail 03" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-04 thumbnail 04">
                <img src="/pdp-sku-selector/sku-04/thumb-04.jpg" alt="sku-04 thumbnail 04" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-04 thumbnail 05">
                <img src="/pdp-sku-selector/sku-04/thumb-05.jpg" alt="sku-04 thumbnail 05" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-04 thumbnail 06">
                <img src="/pdp-sku-selector/sku-04/thumb-06.jpg" alt="sku-04 thumbnail 06" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-04 thumbnail 07">
                <img src="/pdp-sku-selector/sku-04/thumb-07.jpg" alt="sku-04 thumbnail 07" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-04 thumbnail 08">
                <img src="/pdp-sku-selector/sku-04/thumb-08.jpg" alt="sku-04 thumbnail 08" />
              </button>
              </div>
            </div>

            <button class="right-arrow-container" type="button" aria-label="Scroll sku-04 thumbnails">
              <span aria-hidden="true">›</span>
            </button>

            <div class="mask" aria-hidden="true"></div>
          </div>

          <div class="desc-container">
            <h3 class="sku-title">SKU 04 Product Name</h3>
            <p class="sku-subtitle">Industry / category subtitle</p>
          </div>
        </article>
        <article class="sku-product-card" data-sku="sku-05" tabindex="0">
          <button class="main-image" type="button" aria-label="Select sku-05">
            <img src="/pdp-sku-selector/sku-05/cover.jpg" alt="sku-05 cover" />
          </button>

          <div class="scroller-wrapper">
            <div class="sku-selector" aria-label="sku-05 thumbnail strip">
              <div class="sku-items">
              <button class="sku-item-image" type="button" aria-label="sku-05 thumbnail 01">
                <img src="/pdp-sku-selector/sku-05/thumb-01.jpg" alt="sku-05 thumbnail 01" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-05 thumbnail 02">
                <img src="/pdp-sku-selector/sku-05/thumb-02.jpg" alt="sku-05 thumbnail 02" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-05 thumbnail 03">
                <img src="/pdp-sku-selector/sku-05/thumb-03.jpg" alt="sku-05 thumbnail 03" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-05 thumbnail 04">
                <img src="/pdp-sku-selector/sku-05/thumb-04.jpg" alt="sku-05 thumbnail 04" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-05 thumbnail 05">
                <img src="/pdp-sku-selector/sku-05/thumb-05.jpg" alt="sku-05 thumbnail 05" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-05 thumbnail 06">
                <img src="/pdp-sku-selector/sku-05/thumb-06.jpg" alt="sku-05 thumbnail 06" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-05 thumbnail 07">
                <img src="/pdp-sku-selector/sku-05/thumb-07.jpg" alt="sku-05 thumbnail 07" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-05 thumbnail 08">
                <img src="/pdp-sku-selector/sku-05/thumb-08.jpg" alt="sku-05 thumbnail 08" />
              </button>
              </div>
            </div>

            <button class="right-arrow-container" type="button" aria-label="Scroll sku-05 thumbnails">
              <span aria-hidden="true">›</span>
            </button>

            <div class="mask" aria-hidden="true"></div>
          </div>

          <div class="desc-container">
            <h3 class="sku-title">SKU 05 Product Name</h3>
            <p class="sku-subtitle">Industry / category subtitle</p>
          </div>
        </article>
        <article class="sku-product-card" data-sku="sku-06" tabindex="0">
          <button class="main-image" type="button" aria-label="Select sku-06">
            <img src="/pdp-sku-selector/sku-06/cover.jpg" alt="sku-06 cover" />
          </button>

          <div class="scroller-wrapper">
            <div class="sku-selector" aria-label="sku-06 thumbnail strip">
              <div class="sku-items">
              <button class="sku-item-image" type="button" aria-label="sku-06 thumbnail 01">
                <img src="/pdp-sku-selector/sku-06/thumb-01.jpg" alt="sku-06 thumbnail 01" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-06 thumbnail 02">
                <img src="/pdp-sku-selector/sku-06/thumb-02.jpg" alt="sku-06 thumbnail 02" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-06 thumbnail 03">
                <img src="/pdp-sku-selector/sku-06/thumb-03.jpg" alt="sku-06 thumbnail 03" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-06 thumbnail 04">
                <img src="/pdp-sku-selector/sku-06/thumb-04.jpg" alt="sku-06 thumbnail 04" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-06 thumbnail 05">
                <img src="/pdp-sku-selector/sku-06/thumb-05.jpg" alt="sku-06 thumbnail 05" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-06 thumbnail 06">
                <img src="/pdp-sku-selector/sku-06/thumb-06.jpg" alt="sku-06 thumbnail 06" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-06 thumbnail 07">
                <img src="/pdp-sku-selector/sku-06/thumb-07.jpg" alt="sku-06 thumbnail 07" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-06 thumbnail 08">
                <img src="/pdp-sku-selector/sku-06/thumb-08.jpg" alt="sku-06 thumbnail 08" />
              </button>
              </div>
            </div>

            <button class="right-arrow-container" type="button" aria-label="Scroll sku-06 thumbnails">
              <span aria-hidden="true">›</span>
            </button>

            <div class="mask" aria-hidden="true"></div>
          </div>

          <div class="desc-container">
            <h3 class="sku-title">SKU 06 Product Name</h3>
            <p class="sku-subtitle">Industry / category subtitle</p>
          </div>
        </article>
        <article class="sku-product-card" data-sku="sku-07" tabindex="0">
          <button class="main-image" type="button" aria-label="Select sku-07">
            <img src="/pdp-sku-selector/sku-07/cover.jpg" alt="sku-07 cover" />
          </button>

          <div class="scroller-wrapper">
            <div class="sku-selector" aria-label="sku-07 thumbnail strip">
              <div class="sku-items">
              <button class="sku-item-image" type="button" aria-label="sku-07 thumbnail 01">
                <img src="/pdp-sku-selector/sku-07/thumb-01.jpg" alt="sku-07 thumbnail 01" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-07 thumbnail 02">
                <img src="/pdp-sku-selector/sku-07/thumb-02.jpg" alt="sku-07 thumbnail 02" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-07 thumbnail 03">
                <img src="/pdp-sku-selector/sku-07/thumb-03.jpg" alt="sku-07 thumbnail 03" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-07 thumbnail 04">
                <img src="/pdp-sku-selector/sku-07/thumb-04.jpg" alt="sku-07 thumbnail 04" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-07 thumbnail 05">
                <img src="/pdp-sku-selector/sku-07/thumb-05.jpg" alt="sku-07 thumbnail 05" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-07 thumbnail 06">
                <img src="/pdp-sku-selector/sku-07/thumb-06.jpg" alt="sku-07 thumbnail 06" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-07 thumbnail 07">
                <img src="/pdp-sku-selector/sku-07/thumb-07.jpg" alt="sku-07 thumbnail 07" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-07 thumbnail 08">
                <img src="/pdp-sku-selector/sku-07/thumb-08.jpg" alt="sku-07 thumbnail 08" />
              </button>
              </div>
            </div>

            <button class="right-arrow-container" type="button" aria-label="Scroll sku-07 thumbnails">
              <span aria-hidden="true">›</span>
            </button>

            <div class="mask" aria-hidden="true"></div>
          </div>

          <div class="desc-container">
            <h3 class="sku-title">SKU 07 Product Name</h3>
            <p class="sku-subtitle">Industry / category subtitle</p>
          </div>
        </article>
        <article class="sku-product-card" data-sku="sku-08" tabindex="0">
          <button class="main-image" type="button" aria-label="Select sku-08">
            <img src="/pdp-sku-selector/sku-08/cover.jpg" alt="sku-08 cover" />
          </button>

          <div class="scroller-wrapper">
            <div class="sku-selector" aria-label="sku-08 thumbnail strip">
              <div class="sku-items">
              <button class="sku-item-image" type="button" aria-label="sku-08 thumbnail 01">
                <img src="/pdp-sku-selector/sku-08/thumb-01.jpg" alt="sku-08 thumbnail 01" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-08 thumbnail 02">
                <img src="/pdp-sku-selector/sku-08/thumb-02.jpg" alt="sku-08 thumbnail 02" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-08 thumbnail 03">
                <img src="/pdp-sku-selector/sku-08/thumb-03.jpg" alt="sku-08 thumbnail 03" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-08 thumbnail 04">
                <img src="/pdp-sku-selector/sku-08/thumb-04.jpg" alt="sku-08 thumbnail 04" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-08 thumbnail 05">
                <img src="/pdp-sku-selector/sku-08/thumb-05.jpg" alt="sku-08 thumbnail 05" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-08 thumbnail 06">
                <img src="/pdp-sku-selector/sku-08/thumb-06.jpg" alt="sku-08 thumbnail 06" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-08 thumbnail 07">
                <img src="/pdp-sku-selector/sku-08/thumb-07.jpg" alt="sku-08 thumbnail 07" />
              </button>
              <button class="sku-item-image" type="button" aria-label="sku-08 thumbnail 08">
                <img src="/pdp-sku-selector/sku-08/thumb-08.jpg" alt="sku-08 thumbnail 08" />
              </button>
              </div>
            </div>

            <button class="right-arrow-container" type="button" aria-label="Scroll sku-08 thumbnails">
              <span aria-hidden="true">›</span>
            </button>

            <div class="mask" aria-hidden="true"></div>
          </div>

          <div class="desc-container">
            <h3 class="sku-title">SKU 08 Product Name</h3>
            <p class="sku-subtitle">Industry / category subtitle</p>
          </div>
        </article>
    </div>
  </section>

  <script>
    const cards = document.querySelectorAll(".sku-product-card");

    cards.forEach((card) => {
      const skuId = card.dataset.sku;
      const scrollTrack = card.querySelector(".sku-items");
      const arrowButton = card.querySelector(".right-arrow-container");

      card.addEventListener("click", (event) => {
        if (event.target.closest(".right-arrow-container")) return;

        cards.forEach((item) => item.classList.remove("is-active"));
        card.classList.add("is-active");

        window.dispatchEvent(new CustomEvent("sku-card-selected", {
          detail: {
            skuId,
            cover: `/pdp-sku-selector/${skuId}/cover.jpg`,
            thumbnails: Array.from({ length: 8 }, (_, index) =>
              `/pdp-sku-selector/${skuId}/thumb-${String(index + 1).padStart(2, "0")}.jpg`
            )
          }
        }));
      });

      arrowButton.addEventListener("click", (event) => {
        event.stopPropagation();
        scrollTrack.scrollBy({ left: 160, behavior: "smooth" });
      });
    });
  </script>
</body>
</html>

```
