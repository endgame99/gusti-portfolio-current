import { useState } from 'react';
import { Lock, Wand2, X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- SKU data model ---

interface SkuSet {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  promptPreview: string;
  tools: string;
  slides: string[];
}

const makeSkuSlides = (skuId: string) => [
  `/pdp-sku-selector/${skuId}/cover.webp`,
  `/pdp-sku-selector/${skuId}/thumb-01.webp`,
  `/pdp-sku-selector/${skuId}/thumb-02.webp`,
  `/pdp-sku-selector/${skuId}/thumb-03.webp`,
  `/pdp-sku-selector/${skuId}/thumb-04.webp`,
  `/pdp-sku-selector/${skuId}/thumb-05.webp`,
  `/pdp-sku-selector/${skuId}/thumb-06.webp`,
  `/pdp-sku-selector/${skuId}/thumb-07.webp`,
  `/pdp-sku-selector/${skuId}/thumb-08.webp`,
];

const skuSets: SkuSet[] = [
  {
    id: 'sku-01',
    title: 'Beauty PDP Visual Set',
    subtitle: 'Beauty & Personal Care',
    coverImage: '/pdp-sku-selector/sku-01/cover.webp',
    promptPreview: 'Master prompt set for Beauty PDP Visual Set. Clean background skincare studio photography, soft lighting, sharp details, cosmetic bottle setup...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-01'),
  },
  {
    id: 'sku-02',
    title: 'Fashion PDP Visual Set',
    subtitle: 'Apparel & Outfit',
    coverImage: '/pdp-sku-selector/sku-02/cover.webp',
    promptPreview: 'Master prompt set for Fashion PDP Visual Set. Soft studio lighting setup, front product shot of outfit on neutral grey background, clothing photography...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-02'),
  },
  {
    id: 'sku-03',
    title: 'Kids Product PDP Visual Set',
    subtitle: 'Kids & Family Product',
    coverImage: '/pdp-sku-selector/sku-03/cover.webp',
    promptPreview: 'Master prompt set for Kids Product PDP Visual Set. Bright natural light environment, playful toy backdrop elements, soft shadows...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-03'),
  },
  {
    id: 'sku-04',
    title: 'Food PDP Visual Set',
    subtitle: 'Food & Beverage',
    coverImage: '/pdp-sku-selector/sku-04/cover.webp',
    promptPreview: 'Master prompt set for Food PDP Visual Set. Overhead camera angle, crisp studio lightning, fresh ingredients as background props...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-04'),
  },
  {
    id: 'sku-05',
    title: 'Home Living PDP Visual Set',
    subtitle: 'Home & Lifestyle',
    coverImage: '/pdp-sku-selector/sku-05/cover.webp',
    promptPreview: 'Master prompt set for Home Living PDP Visual Set. Minimalist interior scene, warm natural daylight through window, household goods...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-05'),
  },
  {
    id: 'sku-06',
    title: 'Gadget PDP Visual Set',
    subtitle: 'Tech & Accessories',
    coverImage: '/pdp-sku-selector/sku-06/cover.webp',
    promptPreview: 'Master prompt set for Gadget PDP Visual Set. Sleek dark aesthetic or clean metallic surface, precise technical lighting highlights...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-06'),
  },
  {
    id: 'sku-07',
    title: 'Wellness PDP Visual Set',
    subtitle: 'Health & Wellness',
    coverImage: '/pdp-sku-selector/sku-07/cover.webp',
    promptPreview: 'Master prompt set for Wellness PDP Visual Set. Soft calming color palette, neutral background, organic textures, balanced composition...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-07'),
  },
  {
    id: 'sku-08',
    title: 'Premium Gift PDP Visual Set',
    subtitle: 'Gift & Seasonal Campaign',
    coverImage: '/pdp-sku-selector/sku-08/cover.webp',
    promptPreview: 'Master prompt set for Premium Gift PDP Visual Set. Elegant ribbon details, high-end seasonal box aesthetic, warm holiday ambient lights...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-08'),
  },
];

const WHATSAPP_NUMBER = '6283897317974';

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function PdpVisualsPage() {
  const [activeSkuIndex, setActiveSkuIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const activeSku = skuSets[activeSkuIndex];
  const slideCount = activeSku.slides.length;
  const activeSlideImage = activeSku.slides[activeSlideIndex];

  // Navigate slides within the active SKU
  const goToSlide = (idx: number) => {
    setActiveSlideIndex(idx);
  };

  const goPrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slideCount);
  };

  // Switch to a different SKU, reset slide to 0
  const selectSku = (skuIdx: number) => {
    setActiveSkuIndex(skuIdx);
    setActiveSlideIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArrowClick = (skuId: string) => {
    const container = document.getElementById(`sku-items-${skuId}`);
    if (container) {
      container.scrollBy({ left: 160, behavior: 'smooth' });
    }
  };

  const unlockPromptUrl = buildWhatsAppUrl(
    `Hi GUSTI,\n\nI'd like to unlock the prompt set for:\n\nService: PDP Visuals\nSKU: ${activeSku.title}\nSlide: ${activeSlideIndex + 1}/${slideCount}\nTools: GPT-image2, Nano Banana 2\n\nRequest: Prompt access only`
  );

  const makeVisualUrl = buildWhatsAppUrl(
    `Hi GUSTI,\n\nI'd like to request a custom visual:\n\nService: PDP Visuals\nSKU: ${activeSku.title}\nSlide: ${activeSlideIndex + 1}/${slideCount}\nTools: GPT-image2, Nano Banana 2\n\nRequest: Custom visual production`
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            ← GUSTI
          </a>
          <span className="text-xs text-neutral-400">
            Services / PDP Visuals
          </span>
        </div>
      </header>

      {/* Page content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Title area */}
        <div className="mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
            E-commerce Visual Creative — PDP Visuals
          </h1>
          <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-500 max-w-2xl">
            Prompt-based ecommerce visual system for product detail pages, marketplace assets, and sales-ready content.
          </p>
        </div>

        {/* Top section: main gallery + prompt panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">
          {/* Left: main image + thumbnail row */}
          <div>
            {/* Main image with prev/next arrows */}
            <div
              className="w-full aspect-square rounded-lg overflow-hidden bg-neutral-100 cursor-pointer relative group"
              onClick={() => setFullscreenOpen(true)}
            >
              <img
                src={activeSlideImage}
                alt={`${activeSku.title} — Slide ${activeSlideIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

              {/* Prev arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrevSlide(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/85 backdrop-blur shadow-sm text-neutral-800 hover:bg-white hover:scale-105 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); goNextSlide(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/85 backdrop-blur shadow-sm text-neutral-800 hover:bg-white hover:scale-105 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Pagination badge */}
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                {activeSlideIndex + 1} / {slideCount}
              </div>
            </div>

            {/* Thumbnail row — 9 slides of active SKU */}
            <div className="mt-3 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 pb-1">
                {activeSku.slides.map((slideImg, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`shrink-0 w-[72px] h-[72px] md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      i === activeSlideIndex
                        ? 'border-neutral-900 opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={slideImg}
                      alt={`${activeSku.title} — Slide ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Active SKU title below thumbnails */}
            <p className="mt-3 text-sm font-medium text-neutral-700">
              {activeSku.title}
            </p>
          </div>

          {/* Right: locked prompt panel */}
          <div className="lg:sticky lg:top-[80px] lg:self-start">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 md:p-6">
              {/* Panel title */}
              <h3 className="text-base font-bold text-neutral-900 mb-1">
                Master Prompt Set
              </h3>
              {/* Metadata */}
              <p className="text-xs text-neutral-400 mb-4">
                Image Set · {slideCount} {slideCount === 1 ? 'Slide' : 'Slides'} · GPT-image2 · Nano Banana 2
              </p>

              {/* Blurred prompt preview — per active SKU */}
              <div className="relative mb-5">
                <div
                  className="text-sm text-neutral-600 leading-relaxed select-none"
                  style={{ filter: 'blur(4px)' }}
                >
                  {activeSku.promptPreview}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-lg px-4 py-2 shadow-sm">
                    <span className="text-xs font-medium text-neutral-500 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      Prompt locked
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-2.5">
                <a
                  href={unlockPromptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <Lock className="w-4 h-4" />
                  Unlock Prompt
                </a>
                <a
                  href={makeVisualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  <Wand2 className="w-4 h-4" />
                  Make This Visual
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: SKU Selector Section */}
        <section className="sku-selector-section mt-10 md:mt-14" aria-labelledby="sku-selector-title">
          <div className="sku-selector-header mb-[18px]">
            <p className="sku-selector-eyebrow text-[#767676] text-[12px] font-semibold tracking-[0.08em] uppercase mb-2">
              SKU Selector Section
            </p>
            <h2 id="sku-selector-title" className="sku-selector-title text-[#111111] text-[28px] font-bold tracking-[-0.03em] leading-[1.1]">
              Other SKU Visual Sets
            </h2>
          </div>

          <div className="sku-product-grid grid grid-cols-1 min-[520px]:grid-cols-2 min-[980px]:grid-cols-4 gap-[18px]">
            {skuSets.map((sku, idx) => {
              const isActive = idx === activeSkuIndex;
              return (
                <article
                  key={sku.id}
                  className={`sku-product-card overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-200 select-none ${
                    isActive ? 'outline-[2px] outline outline-neutral-900 outline-offset-[3px] is-active' : ''
                  }`}
                  onClick={() => selectSku(idx)}
                >
                  <button
                    className="mainImage main-image block w-full p-0 border-0 bg-[#eeeeee] aspect-square cursor-pointer"
                    type="button"
                    aria-label={`Select ${sku.title}`}
                  >
                    <img
                      src={sku.coverImage}
                      alt={`${sku.title} cover`}
                      className="w-full h-full block object-cover"
                      loading="lazy"
                    />
                  </button>

                  <div className="scrollerWrapper scroller-wrapper relative py-[10px] pl-[10px] bg-white">
                    <div className="skuSelector sku-selector overflow-hidden w-full" aria-label={`${sku.title} thumbnail strip`}>
                      <div
                        id={`sku-items-${sku.id}`}
                        className="skuItems sku-items flex gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-[42px]"
                      >
                        {sku.slides.slice(1).map((thumbImg, tIdx) => (
                          <button
                            key={tIdx}
                            className="skuItemImage sku-item-image shrink-0 w-11 h-11 p-0 overflow-hidden border border-[#e6e6e6] rounded-[10px] bg-[#f2f2f2] cursor-pointer"
                            type="button"
                            aria-label={`${sku.title} thumbnail ${tIdx + 1}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              selectSku(idx);
                            }}
                          >
                            <img
                              src={thumbImg}
                              alt={`${sku.title} thumbnail ${tIdx + 1}`}
                              className="w-full h-full block object-cover"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      className="rightArrowContainer right-arrow-container absolute top-1/2 right-2 z-10 w-[30px] h-[30px] grid place-items-center -translate-y-1/2 border-0 rounded-full bg-white/96 shadow-[0_6px_14px_rgba(0,0,0,0.14)] text-[#111111] text-[25px] leading-none cursor-pointer"
                      type="button"
                      aria-label={`Scroll ${sku.title} thumbnails`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleArrowClick(sku.id);
                      }}
                    >
                      <span aria-hidden="true">›</span>
                    </button>

                    <div className="mask absolute top-0 right-0 w-[58px] h-full pointer-events-none bg-gradient-to-r from-transparent to-white/72" aria-hidden="true"></div>
                  </div>

                  <div className="descContainer desc-container px-3.5 pb-4 bg-white">
                    <h3 className="sku-title m-0 mb-1.5 text-[#111111] text-[14px] font-bold leading-[1.35] line-clamp-2">
                      {sku.title}
                    </h3>
                    <p className="sku-subtitle m-0 text-[#777777] text-[12px] font-medium leading-[1.35]">
                      {sku.subtitle}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* Fullscreen lightbox — navigates slides within active SKU */}
      {fullscreenOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 md:px-8 py-4">
            <span className="text-white/70 text-sm">
              {activeSlideIndex + 1} / {slideCount}
            </span>
            <button
              onClick={() => setFullscreenOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main image area */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-16 relative min-h-0">
            {/* Prev button */}
            <button
              onClick={goPrevSlide}
              className="absolute left-3 md:left-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <img
              src={activeSlideImage}
              alt={`${activeSku.title} — Slide ${activeSlideIndex + 1}`}
              className="max-h-[calc(100vh-200px)] max-w-full object-contain rounded-md"
            />

            {/* Next button */}
            <button
              onClick={goNextSlide}
              className="absolute right-3 md:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Fullscreen thumbnail strip — 9 slides of active SKU */}
          <div className="px-4 md:px-8 py-4">
            <div className="flex justify-center gap-2 overflow-x-auto">
              {activeSku.slides.map((slideImg, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    i === activeSlideIndex
                      ? 'border-white opacity-100'
                      : 'border-transparent opacity-40 hover:opacity-70'
                  }`}
                >
                  <img
                    src={slideImg}
                    alt={`${activeSku.title} — Slide ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
