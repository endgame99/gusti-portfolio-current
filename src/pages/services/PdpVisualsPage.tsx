import { skuSets, type SkuSet } from '../../content/services/pdp';
import { AppShell } from '../../components/layout/AppShell';
import { buildWhatsAppUrl } from '../../content/site';
import React, { useState, useEffect } from 'react';
import { Lock, Wand2, X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- SKU data model ---

interface SkuProductCardProps {
  key?: string;
  sku: SkuSet;
  idx: number;
  isActive: boolean;
  onSelectSku: (skuIdx: number, slideIdx?: number) => void;
}

function SkuProductCard({ sku, idx, isActive, onSelectSku }: SkuProductCardProps) {
  const [localSlideIndex, setLocalSlideIndex] = useState(0);

  const currentMainImage = sku.slides[localSlideIndex];

  const handleScrollRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    const container = document.getElementById(`sku-items-${sku.id}`);
    if (container) {
      container.scrollBy({ left: 160, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    const container = document.getElementById(`sku-items-${sku.id}`);
    if (container) {
      container.scrollBy({ left: -160, behavior: 'smooth' });
    }
  };

  return (
    <article
      className={`sku-product-card overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 select-none ${
        isActive ? 'outline-[2px] outline outline-neutral-900 dark:outline-white outline-offset-[3px] is-active' : ''
      }`}
    >
      <button
        className="mainImage main-image block w-full p-0 border-0 bg-[#eeeeee] aspect-square cursor-pointer"
        type="button"
        aria-label={`Select ${sku.title}`}
        onClick={() => {
          onSelectSku(idx, localSlideIndex);
        }}
      >
        <img
          src={currentMainImage}
          alt={`${sku.title} cover`}
          className="w-full h-full block object-cover"
          loading="lazy"
        />
      </button>

      <div className="scrollerWrapper scroller-wrapper relative py-[10px] pl-[10px] bg-white">
        {/* Left Arrow Container */}
        <button
          className="leftArrowContainer left-arrow-container absolute top-1/2 left-2 z-10 w-[30px] h-[30px] grid place-items-center -translate-y-1/2 border-0 rounded-full bg-white/96 shadow-[0_6px_14px_rgba(0,0,0,0.14)] text-[#111111] text-[25px] leading-none cursor-pointer"
          type="button"
          aria-label={`Scroll ${sku.title} thumbnails left`}
          onClick={handleScrollLeft}
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div className="skuSelector sku-selector overflow-hidden w-full" aria-label={`${sku.title} thumbnail strip`}>
          <div
            id={`sku-items-${sku.id}`}
            className="skuItems sku-items flex gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pl-[28px] pr-[42px]"
          >
            {sku.slides.map((thumbImg, slideIdx) => {
              return (
                <button
                  key={slideIdx}
                  className={`skuItemImage sku-item-image shrink-0 w-11 h-11 p-0 overflow-hidden border rounded-[10px] bg-[#f2f2f2] cursor-pointer transition-all duration-200 ${
                    localSlideIndex === slideIdx ? 'border-neutral-900 ring-1 ring-neutral-900' : 'border-[#e6e6e6]'
                  }`}
                  type="button"
                  aria-label={`${sku.title} thumbnail ${slideIdx + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocalSlideIndex(slideIdx);
                  }}
                >
                  <img
                    src={thumbImg}
                    alt={`${sku.title} thumbnail ${slideIdx + 1}`}
                    className="w-full h-full block object-cover"
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Arrow Container */}
        <button
          className="rightArrowContainer right-arrow-container absolute top-1/2 right-2 z-10 w-[30px] h-[30px] grid place-items-center -translate-y-1/2 border-0 rounded-full bg-white/96 shadow-[0_6px_14px_rgba(0,0,0,0.14)] text-[#111111] text-[25px] leading-none cursor-pointer"
          type="button"
          aria-label={`Scroll ${sku.title} thumbnails`}
          onClick={handleScrollRight}
        >
          <span aria-hidden="true">›</span>
        </button>

        <div className="mask-left absolute top-0 left-0 w-[58px] h-full pointer-events-none bg-gradient-to-l from-transparent to-white/72" aria-hidden="true"></div>
        <div className="mask absolute top-0 right-0 w-[58px] h-full pointer-events-none bg-gradient-to-r from-transparent to-white/72" aria-hidden="true"></div>
      </div>

      <div className="descContainer desc-container px-3.5 pb-4 bg-white">
        <h3 className="sku-title m-0 mb-1.5 type-heading-md font-semibold text-[#111111] leading-[1.35] line-clamp-2">
          {sku.title}
        </h3>
        <p className="sku-subtitle m-0 type-body-sm font-medium text-[#777777] leading-[1.35]">
          {sku.subtitle}
        </p>
      </div>
    </article>
  );
}

export function PdpVisualsPage() {

  const [activeSkuIndex, setActiveSkuIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  // Handle escape key to close fullscreen lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenOpen(false);
      }
    };
    if (fullscreenOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fullscreenOpen]);

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

  // Switch to a different SKU, set slide index
  const selectSku = (skuIdx: number, slideIdx: number = 0) => {
    setActiveSkuIndex(skuIdx);
    setActiveSlideIndex(slideIdx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const unlockPromptUrl = buildWhatsAppUrl(
    `Hi GUSTI,\n\nI'd like to unlock the prompt set for:\n\nService: PDP Visuals\nSKU: ${activeSku.title}\nSlide: ${activeSlideIndex + 1}/${slideCount}\nTools: GPT-image2, Nano Banana 2\n\nRequest: Prompt access only`
  );

  const makeVisualUrl = buildWhatsAppUrl(
    `Hi GUSTI,\n\nI'd like to request a custom visual:\n\nService: PDP Visuals\nSKU: ${activeSku.title}\nSlide: ${activeSlideIndex + 1}/${slideCount}\nTools: GPT-image2, Nano Banana 2\n\nRequest: Custom visual production`
  );

  return (
    <>
      <AppShell activeNav="services" internal>

        {/* Title area */}
        <div className="mb-8 md:mb-12 max-w-5xl mx-auto w-full">
          <h1 className="type-display-xl text-neutral-900 dark:text-white tracking-tight">
            E-commerce Visual Creative — PDP Visuals
          </h1>
          <p className="mt-3 type-lead text-neutral-500 dark:text-neutral-400 reading-lead">
            Prompt-based ecommerce visual system for product detail pages, marketplace assets, and sales-ready content.
          </p>
        </div>

        {/* Top section: main gallery + prompt panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,640px)_340px] gap-6 lg:gap-8 xl:gap-10 max-w-5xl mx-auto justify-center items-stretch">
          {/* Left: main image + thumbnail row */}
          <div className="flex flex-col max-w-[640px] w-full mx-auto lg:mx-0">
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
              <div className="absolute bottom-3 right-3 bg-black/60 text-white type-label-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
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

            {/* Active SKU caption block */}
            <div className="mt-4 text-left w-full">
              <h2 className="type-heading-lg font-bold text-neutral-900 dark:text-white leading-tight">
                {activeSku.title}
              </h2>
              <p className="type-body-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                {activeSku.subtitle}
              </p>
            </div>
          </div>

          {/* Right: locked prompt panel */}
          <div className="lg:h-full">
            <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/80 rounded-xl p-5 md:p-6 lg:h-full flex flex-col justify-between">
              <div className="flex-1 flex flex-col">
                {/* Panel title & metadata */}
                <div className="text-center mb-4 flex-shrink-0">
                  <h3 className="type-heading-md font-bold text-neutral-900 dark:text-white mb-2">
                    Master Prompt Set
                  </h3>
                  {/* Tool chips */}
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="type-label-sm font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                      GPT-image2
                    </span>
                    <span className="type-label-sm font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                      Nano Banana 2
                    </span>
                  </div>
                </div>

                {/* Blurred prompt preview — per active SKU */}
                <div className="relative mb-5 bg-white/40 dark:bg-neutral-950/20 border border-neutral-100 dark:border-neutral-900 rounded-lg p-4 flex-1 min-h-0 flex items-center justify-center overflow-hidden">
                  <div
                    className="type-body-sm font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed select-none w-full text-left space-y-3 py-1"
                    style={{ filter: 'blur(4px)' }}
                  >
                    <p className="type-eyebrow text-neutral-400 dark:text-neutral-500">System Prompt & Parameters</p>
                    <p>{activeSku.promptPreview}</p>
                    <p>{activeSku.promptPreview}</p>
                    <p className="hidden sm:block">{activeSku.promptPreview}</p>
                    <p className="hidden md:block opacity-80">{activeSku.promptPreview}</p>
                    <p className="hidden lg:block opacity-60">{activeSku.promptPreview}</p>
                    <p className="hidden xl:block opacity-45">{activeSku.promptPreview}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-black/10 pointer-events-none">
                    <div className="bg-white/90 dark:bg-neutral-800/95 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-2 shadow-sm pointer-events-auto">
                      <span className="type-label-sm font-medium text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" />
                        Prompt locked
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-2.5 mt-auto flex-shrink-0">
                <a
                  href={unlockPromptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 text-white type-label-md font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  <Lock className="w-4 h-4" />
                  Unlock Prompt
                </a>
                <a
                  href={makeVisualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-neutral-900 type-label-md font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  <Wand2 className="w-4 h-4" />
                  Make This Visual
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: SKU Selector Section */}
        <section className="sku-selector-section mt-12 md:mt-16 border-t border-neutral-100 dark:border-neutral-800/50 pt-12 md:pt-16 max-w-5xl mx-auto w-full" aria-labelledby="sku-selector-title">
          <div className="sku-selector-header mb-6 md:mb-8">
            <p className="sku-selector-eyebrow type-eyebrow text-neutral-400 mb-2">
              Interactive Catalog
            </p>
            <h2 id="sku-selector-title" className="sku-selector-title type-display-lg text-neutral-900 dark:text-white tracking-tight mb-3">
              Other SKU Visual Sets
            </h2>
            <p className="type-body-sm font-normal text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
              Select any SKU cover below to preview and load its corresponding master prompt templates, asset slide decks, and fullscreen visual sets.
            </p>
          </div>

          <div className="sku-product-grid grid grid-cols-1 min-[520px]:grid-cols-2 min-[980px]:grid-cols-4 gap-4 md:gap-5">
            {skuSets.map((sku, idx) => {
              const isActive = idx === activeSkuIndex;
              return (
                <SkuProductCard
                  key={sku.id}
                  sku={sku}
                  idx={idx}
                  isActive={isActive}
                  onSelectSku={selectSku}
                />
              );
            })}
          </div>
        </section>
        </AppShell>

      {/* Fullscreen lightbox — navigates slides within active SKU */}
      {fullscreenOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col">
          {/* Close button at the top-right */}
          <button
            onClick={() => setFullscreenOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 md:px-8 py-4">
            <span className="text-white/70 text-sm">
              {activeSlideIndex + 1} / {slideCount}
            </span>
          </div>

          {/* Main image area */}
          <div className="flex-1 flex items-center justify-center relative min-h-0 px-12 md:px-20">
            <div className="relative flex items-center justify-center max-w-full max-h-[calc(100vh-200px)]">
              {/* Prev button */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrevSlide(); }}
                className="absolute left-2 md:left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white cursor-pointer top-1/2 -translate-y-1/2 md:-translate-x-12 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={activeSlideImage}
                alt={`${activeSku.title} — Slide ${activeSlideIndex + 1}`}
                className="max-h-[calc(100vh-200px)] max-w-full object-contain rounded-md select-none"
              />

              {/* Next button */}
              <button
                onClick={(e) => { e.stopPropagation(); goNextSlide(); }}
                className="absolute right-2 md:right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white cursor-pointer top-1/2 -translate-y-1/2 md:translate-x-12 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
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
    </>
  );
}
