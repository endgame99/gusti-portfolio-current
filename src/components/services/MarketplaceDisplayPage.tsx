import { useState, useEffect } from 'react';
import { Lock, Wand2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GustiSidebar } from '../GustiSidebar';
import { GustiTopHeader } from '../GustiTopHeader';
import { WHATSAPP_LINK } from '../../data';
import { Language, Theme } from '../../types';

interface MarketplaceItem {
  id: string;
  title: string;
  image: string;
}

const WHATSAPP_NUMBER = '6283897317974';

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const marketplaceItems: MarketplaceItem[] = Array.from({ length: 50 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    id: `item-${num}`,
    title: `Marketplace Display ${num}`,
    image: `/marketplace-display/item-${num}.jpg`,
  };
});

export function MarketplaceDisplayPage() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState<'home' | 'work' | 'services' | 'library'>('services');
  const [activeTab, setActiveTab] = useState<'recommended' | 'services' | 'library'>('services');

  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  // Sync theme to root class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

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

  const activeItem = marketplaceItems[activeIndex];

  const goPrevItem = () => {
    setActiveIndex((prev) => (prev - 1 + 50) % 50);
  };

  const goNextItem = () => {
    setActiveIndex((prev) => (prev + 1) % 50);
  };

  const selectItem = (idx: number) => {
    setActiveIndex(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const unlockPromptUrl = buildWhatsAppUrl(
    `Hi GUSTI,\n\nI'd like to unlock the prompt set for:\n\nService: Marketplace Display\nItem: ${activeItem.title}\nTools: GPT-image2, Nano Banana 2\n\nRequest: Prompt access only`
  );

  const makeVisualUrl = buildWhatsAppUrl(
    `Hi GUSTI,\n\nI'd like to request a custom visual:\n\nService: Marketplace Display\nItem: ${activeItem.title}\nTools: GPT-image2, Nano Banana 2\n\nRequest: Custom visual production`
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-neutral-900 dark:text-white font-sans transition-colors duration-300 flex">
      <GustiSidebar
        activeNav={activeNav}
        setActiveNav={(nav) => {
          setActiveNav(nav);
          if (window.location.pathname !== "/") {
            window.location.href = `/?tab=${nav === 'work' ? 'recommended' : nav}`;
          }
        }}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (window.location.pathname !== "/") {
            window.location.href = `/?tab=${tab}`;
          }
        }}
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
        whatsappUrl={WHATSAPP_LINK}
      />

      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-200 ${isSidebarExpanded ? 'pl-[160px]' : 'pl-[44px]'}`}>
        <GustiTopHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          theme={theme}
          setTheme={setTheme}
          language={lang.toUpperCase() as "ID" | "EN" | "CN"}
          setLanguage={(l) => setLang(l.toLowerCase() as Language)}
          whatsappUrl={WHATSAPP_LINK}
        />

        <main className="pageContainer internalPageTop pb-24 md:pb-12">
          {/* Title area */}
          <div className="mb-10 md:mb-14 max-w-5xl mx-auto w-full">
            <h1 className="type-display-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Marketplace Display
            </h1>
            <p className="mt-3 type-body-md font-normal leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-2xl">
              Prompt-based marketplace display visuals for product detail pages, campaign assets, and conversion-ready ecommerce layouts.
            </p>
          </div>

          {/* Top section: main preview + prompt panel */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_340px] gap-6 lg:gap-8 xl:gap-12 max-w-5xl mx-auto justify-center items-stretch">
            {/* Left: main image preview (9:16 aspect ratio, no thumbnail strip) */}
            <div className="flex flex-col max-w-[380px] w-full mx-auto lg:mx-0">
              <div
                className="w-full aspect-[9/16] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900/50 cursor-pointer relative group border border-neutral-200 dark:border-neutral-800/80 shadow-sm"
                onClick={() => setFullscreenOpen(true)}
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                {/* Prev arrow */}
                <button
                  onClick={(e) => { e.stopPropagation(); goPrevItem(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/85 dark:bg-neutral-800/85 backdrop-blur shadow-sm text-neutral-800 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-700 hover:scale-105 transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous item"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next arrow */}
                <button
                  onClick={(e) => { e.stopPropagation(); goNextItem(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/85 dark:bg-neutral-800/85 backdrop-blur shadow-sm text-neutral-800 dark:text-neutral-200 hover:bg-white dark:hover:bg-neutral-700 hover:scale-105 transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next item"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Pagination badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white type-label-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {activeIndex + 1} / 50
                </div>
              </div>

              {/* Caption block */}
              <div className="mt-4 text-left w-full">
                <h2 className="type-heading-lg font-bold text-neutral-900 dark:text-white leading-tight">
                  {activeItem.title}
                </h2>
                <p className="type-body-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                  E-commerce Display Visual
                </p>
              </div>
            </div>

            {/* Right: Master Prompt Set panel */}
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
                      <span className="type-label-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                        GPT-image2
                      </span>
                      <span className="type-label-xs font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                        Nano Banana 2
                      </span>
                    </div>
                  </div>

                  {/* Blurred prompt preview */}
                  <div className="relative mb-5 bg-white/40 dark:bg-neutral-950/20 border border-neutral-100 dark:border-neutral-900 rounded-lg p-4 flex-1 min-h-0 flex items-center justify-center overflow-hidden">
                    <div
                      className="type-body-sm font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed select-none w-full text-left space-y-3 py-1"
                      style={{ filter: 'blur(4px)' }}
                    >
                      <p className="type-eyebrow text-neutral-400 dark:text-neutral-500">System Prompt & Parameters</p>
                      <p>Master prompt set for {activeItem.title}. Clean layout, vertical format optimized for mobile commerce, high contrast ambient backdrop, soft shadows, studio-quality product lighting, sharp focus.</p>
                      <p>Master prompt set for {activeItem.title}. Clean layout, vertical format optimized for mobile commerce, high contrast ambient backdrop, soft shadows, studio-quality product lighting, sharp focus.</p>
                      <p className="hidden sm:block">Master prompt set for {activeItem.title}. Clean layout, vertical format optimized for mobile commerce, high contrast ambient backdrop, soft shadows, studio-quality product lighting, sharp focus.</p>
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

          {/* Selection section: Marketplace Display Gallery */}
          <section className="marketplace-display-section mt-20 md:mt-28 border-t border-neutral-100 dark:border-neutral-800/50 pt-16 md:pt-20 max-w-5xl mx-auto w-full" aria-labelledby="marketplace-gallery-title">
            <div className="mb-8">
              <p className="type-eyebrow text-neutral-400 mb-2">
                Interactive Catalog
              </p>
              <h2 id="marketplace-gallery-title" className="type-display-lg font-bold text-neutral-900 dark:text-white tracking-tight mb-3">
                Marketplace Display Gallery
              </h2>
              <p className="type-body-sm font-normal text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
                Browse and select templates from the gallery below to update the preview and load individual prompt configurations.
              </p>
            </div>

            <div className="marketplace-infinite-area">
              <div className="marketplace-waterfall-grid columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                {marketplaceItems.map((item, idx) => {
                  const makeVisualUrlItem = buildWhatsAppUrl(
                    `Hi GUSTI,\n\nI'd like to request a custom visual:\n\nService: Marketplace Display\nItem: ${item.title}\nTools: GPT-image2, Nano Banana 2\n\nRequest: Custom visual production`
                  );

                  return (
                    <article key={item.id} className="marketplace-waterfall-item break-inside-avoid" data-item-id={item.id}>
                      <div className="marketplace-card-root flex flex-col group">
                        <div className="marketplace-card relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 shadow-sm transition-all duration-200 select-none">
                          <div className="marketplace-card-preview">
                            <button
                              className="marketplace-card-trigger w-full block p-0 border-0 bg-transparent text-left cursor-pointer"
                              type="button"
                              aria-label={`Select Marketplace Display item ${String(idx + 1).padStart(2, '0')}`}
                              onClick={() => selectItem(idx)}
                            >
                              <picture className="marketplace-card-picture">
                                <img
                                  className="marketplace-card-image w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                  src={item.image}
                                  alt={item.title}
                                  loading="lazy"
                                />
                              </picture>
                            </button>
                          </div>

                          <div className="marketplace-card-actions absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                            <button
                              className="marketplace-card-action px-3.5 py-1.5 bg-white text-neutral-900 type-label-sm font-semibold rounded-full hover:bg-neutral-100 transition-colors shadow-md pointer-events-auto"
                              type="button"
                              onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(makeVisualUrlItem, '_blank', 'noopener,noreferrer');
                              }}
                            >
                              Make This Visual
                            </button>
                          </div>
                        </div>

                        <div className="marketplace-card-meta flex items-center gap-1.5 mt-2 px-1">
                          <span className="marketplace-card-dot w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" aria-hidden="true"></span>
                          <span className="marketplace-card-title type-body-sm font-medium text-neutral-800 dark:text-neutral-200">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Fullscreen lightbox overlay */}
      {fullscreenOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col justify-center items-center">
          {/* Close button at the top-right */}
          <button
            onClick={() => setFullscreenOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Top text indicator */}
          <div className="absolute top-4 left-4 md:left-6 z-40 text-white/70 text-sm font-medium">
            {activeIndex + 1} / 50 — {activeItem.title}
          </div>

          {/* Image & navigation area */}
          <div className="relative flex items-center justify-center max-w-full max-h-[calc(100vh-100px)] aspect-[9/16] px-4">
            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrevItem(); }}
              className="absolute left-2 md:left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white cursor-pointer top-1/2 -translate-y-1/2 md:-translate-x-16 transition-all"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[calc(100vh-100px)] max-w-full object-contain rounded-md select-none"
            />

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNextItem(); }}
              className="absolute right-2 md:right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 border border-white/10 text-white cursor-pointer top-1/2 -translate-y-1/2 md:translate-x-16 transition-all"
              aria-label="Next item"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
