import { useState } from 'react';
import { Lock, Wand2, X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- SKU data model ---

interface SkuSet {
  id: string;
  title: string;
  coverImage: string;
  promptPreview: string;
  tools: string;
  slides: string[];
}

// Real uploaded gallery images — used only for the active SKU slide set
const skuGalleryImages = [
  '/sku-pdp/sku-01.jpg',
  '/sku-pdp/sku-02.jpg',
  '/sku-pdp/sku-03.jpg',
  '/sku-pdp/sku-04.jpg',
  '/sku-pdp/sku-05.jpg',
  '/sku-pdp/sku-06.jpg',
  '/sku-pdp/sku-07.jpg',
  '/sku-pdp/sku-08.jpg',
  '/sku-pdp/sku-09.jpg',
];

// Neutral placeholder cover for SKUs without uploaded assets
// MISSING_DATA_REQUIRED: Replace with real product cover images per SKU
const PLACEHOLDER_COVER = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="none">' +
  '<rect width="400" height="400" fill="%23f5f5f5"/>' +
  '<text x="200" y="192" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" fill="%23a3a3a3">Cover image</text>' +
  '<text x="200" y="214" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="%23d4d4d4">Coming soon</text>' +
  '</svg>'
);

const skuSets: SkuSet[] = [
  {
    id: 'sku-1',
    title: 'White Cream Jar — Clean Background',
    coverImage: '/sku-pdp/sku-01.jpg',
    promptPreview: 'Master prompt set for white cream jar PDP production. Includes scene direction for pure white background, soft studio lighting setup with dual key lights, centered product placement with clean shadow underneath, high-key commercial photography style, sharp focus on product label, ecommerce-ready composition...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: skuGalleryImages,
  },
  {
    id: 'sku-2',
    title: 'Serum Bottle — Gradient Backdrop',
    coverImage: PLACEHOLDER_COVER,
    promptPreview: 'Master prompt set for serum bottle PDP production. Includes soft pastel gradient background direction, professional studio lighting with rim light, centered glass bottle composition with clean reflection on glossy surface, gold accent highlight treatment, ecommerce PDP style output...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: [PLACEHOLDER_COVER],
  },
  {
    id: 'sku-3',
    title: 'Face Wash Tube — Lifestyle Scene',
    coverImage: PLACEHOLDER_COVER,
    promptPreview: 'Master prompt set for face wash tube lifestyle PDP production. Includes natural daylight scene direction, fresh green leaves and water droplet props, marble surface placement, bright exposure with soft bokeh background, ecommerce marketplace banner composition, clean product label readability...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: [PLACEHOLDER_COVER],
  },
  {
    id: 'sku-4',
    title: 'Lip Tint Set — Flat Lay',
    coverImage: PLACEHOLDER_COVER,
    promptPreview: 'Master prompt set for lip tint flat lay PDP production. Includes overhead camera angle, diagonal arrangement of five tubes on blush pink surface, scattered flower petal props, soft even lighting setup, beauty product catalog style, PDP-ready layout with clean product isolation...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: [PLACEHOLDER_COVER],
  },
  {
    id: 'sku-5',
    title: 'Moisturizer — On-Model Hands',
    coverImage: PLACEHOLDER_COVER,
    promptPreview: 'Master prompt set for moisturizer on-model PDP production. Includes elegant hand model direction, premium jar holding composition, minimal beige background, shallow depth of field focus on product, warm soft lighting setup, commercial beauty photography style, social media selling asset format...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: [PLACEHOLDER_COVER],
  },
  {
    id: 'sku-6',
    title: 'Toner Mist — Studio Spray',
    coverImage: PLACEHOLDER_COVER,
    promptPreview: 'Master prompt set for toner mist studio PDP production. Includes spray action freeze-frame direction, controlled mist particle capture, studio backlight setup for spray visibility, dark contrast background option, product label sharp focus, ecommerce hero image composition...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: [PLACEHOLDER_COVER],
  },
  {
    id: 'sku-7',
    title: 'Eye Cream — Minimal White',
    coverImage: PLACEHOLDER_COVER,
    promptPreview: 'Master prompt set for eye cream minimal PDP production. Includes pure white infinite background, single product hero shot, precise center placement, soft diffused overhead lighting, clean shadow control, premium skincare brand aesthetic, multiple angle variants for marketplace listing...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: [PLACEHOLDER_COVER],
  },
  {
    id: 'sku-8',
    title: 'Sunscreen — Outdoor Scene',
    coverImage: PLACEHOLDER_COVER,
    promptPreview: 'Master prompt set for sunscreen outdoor PDP production. Includes bright outdoor scene direction with natural sunlight, beach or poolside environment, product placement on towel or sand surface, warm golden hour lighting, lifestyle product photography style, summer campaign visual format...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: [PLACEHOLDER_COVER],
  },
  {
    id: 'sku-9',
    title: 'Body Lotion — Texture Close-up',
    coverImage: PLACEHOLDER_COVER,
    promptPreview: 'Master prompt set for body lotion texture PDP production. Includes macro close-up texture direction, cream swatch on skin surface, product bottle in background with shallow depth of field, clinical beauty photography style, clean scientific lighting, dermatology-grade product presentation...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: [PLACEHOLDER_COVER],
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

  // Product selector items (excluding active SKU) for bottom cards
  const productSelectorItems = skuSets
    .map((sku, idx) => ({ sku, idx }))
    .filter(({ idx }) => idx !== activeSkuIndex);

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

        {/* Bottom section: product selector grid */}
        <div className="mt-10 md:mt-14">
          <h2 className="text-lg font-bold text-neutral-900 mb-4">
            Other Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {productSelectorItems.map(({ sku, idx }) => (
              <button
                key={sku.id}
                onClick={() => selectSku(idx)}
                className="group text-left rounded-lg overflow-hidden border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all duration-200"
              >
                <div className="w-full aspect-square overflow-hidden bg-neutral-100">
                  <img
                    src={sku.coverImage}
                    alt={sku.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-medium text-neutral-600 leading-tight line-clamp-2">
                    {sku.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
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
