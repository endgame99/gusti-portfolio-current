import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUp, Check, Play } from 'lucide-react';
import { ProjectDetailPageProps } from './SharedTypes';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  alt: string;
}

export function StarmapDetail({ work, lang, detail, onBack }: ProjectDetailPageProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'details'>('overview');
  const [activeMediaSwitch, setActiveMediaSwitch] = useState<'gallery' | 'video' | 'details'>('gallery');
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // Discover local media files inside /work-cards/Starmap/ in natural numeric order
  const imageFiles = Array.from({ length: 30 }, (_, i) => `/work-cards/Starmap/${i + 1}.webp`);
  const videoFile = detail.videoUrl || '/work-cards/Starmap/Video.mp4';

  const mediaList: MediaItem[] = [
    {
      id: 'v1',
      type: 'video',
      src: videoFile,
      thumbnail: imageFiles[0],
      alt: 'CONTOURA AI Video Showcase',
    },
    ...imageFiles.map((src, idx) => ({
      id: `img-${idx + 1}`,
      type: 'image' as const,
      src,
      thumbnail: src,
      alt: `CONTOURA product visual ${String(idx + 1).padStart(2, '0')}`,
    })),
  ];

  // Local verified visual color variants
  const colorVariants = [
    { id: 'c1', label: 'Nude Comfort', image: imageFiles[0], mediaIndex: 1 },
    { id: 'c2', label: 'Blush Rose', image: imageFiles[1], mediaIndex: 2 },
    { id: 'c3', label: 'Onyx Black', image: imageFiles[2], mediaIndex: 3 },
  ];

  // Sizes present in project artwork
  const sizeOptions = ['S', 'M', 'L', 'XL'];

  // Auto-scroll to top when project loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [work.id]);

  // Show back-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDetails = () => {
    setActiveTab('details');
    const el = document.getElementById('product-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentMedia = mediaList[activeMediaIndex] || mediaList[0];

  return (
    <div
      id={`project-detail-${work.id}`}
      className="contouraProductDetail w-full min-h-screen bg-white dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 relative font-sans pb-24"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* ── 1. Back to Gallery Control ── */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="Back to gallery"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to gallery</span>
          </button>
        </div>

        {/* ── 2. Clean CONTOURA Brand Header ── */}
        <header className="brandHeader mb-8 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 shrink-0">
              <img
                src={work.image || '/starmap.jpg'}
                alt="CONTOURA logo"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                CONTOURA
              </h2>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                <span>Client Work</span>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">/</span>
                <span>Product Commerce Visuals</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── 3. Two-Column Desktop Showcase ── */}
        <div className="contouraDetailMain">
          
          {/* ── Left Column: Media & Specs ── */}
          <div className="contouraLeftColumn flex flex-col gap-8 min-w-0">
            
            {/* Gallery Section */}
            <div className="contouraGalleryWrapper">
              
              {/* Vertical Thumbnail Strip */}
              <div className="contouraThumbnailStrip">
                {mediaList.map((media, idx) => (
                  <button
                    key={media.id}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`contouraThumbnailItem ${activeMediaIndex === idx ? 'is-active' : ''}`}
                    aria-label={`View thumbnail ${idx + 1}`}
                  >
                    <img src={media.thumbnail} alt="" loading="lazy" draggable={false} />
                    {media.type === 'video' && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Main Media Viewer (Square 1:1, object-fit: contain) */}
              <div className="contouraMainMediaViewer">
                {currentMedia.type === 'video' ? (
                  <video
                    src={currentMedia.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    loading="eager"
                    draggable={false}
                    className="w-full h-full object-contain"
                  />
                )}

                <div className="contouraMediaCounter">
                  <span>{activeMediaIndex + 1} / {mediaList.length}</span>
                </div>
              </div>
            </div>

            {/* Media Switch Nav */}
            <nav className="mediaSwitch flex items-center gap-2 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg w-fit text-xs font-semibold">
              <button
                onClick={() => {
                  setActiveMediaSwitch('gallery');
                  setActiveMediaIndex(1);
                }}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeMediaSwitch === 'gallery'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Gallery ({imageFiles.length})
              </button>
              <button
                onClick={() => {
                  setActiveMediaSwitch('video');
                  setActiveMediaIndex(0);
                }}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeMediaSwitch === 'video'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Video (1)
              </button>
              <button
                onClick={scrollToDetails}
                className="px-3 py-1.5 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Product Details
              </button>
            </nav>

            {/* Content Navigation Tabs */}
            <div className="border-b border-neutral-200 dark:border-neutral-800">
              <nav className="flex items-center gap-6 text-sm font-semibold">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-3 border-b-2 transition-colors ${
                    activeTab === 'overview'
                      ? 'border-[#0057ff] text-[#0057ff]'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Product Overview
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`py-3 border-b-2 transition-colors ${
                    activeTab === 'specs'
                      ? 'border-[#0057ff] text-[#0057ff]'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Size &amp; Specifications
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`py-3 border-b-2 transition-colors ${
                    activeTab === 'details'
                      ? 'border-[#0057ff] text-[#0057ff]'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Product Details
                </button>
              </nav>
            </div>

            {/* Tab 1: Product Overview */}
            {activeTab === 'overview' && (
              <section className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">Product Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/60">
                  <div>
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">Brand</span>
                    <span className="font-medium text-neutral-900 dark:text-white">CONTOURA</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">Project Type</span>
                    <span className="font-medium text-neutral-900 dark:text-white">Client Work</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">Category</span>
                    <span className="font-medium text-neutral-900 dark:text-white">Product Commerce Visuals</span>
                  </div>
                </div>
                <p>
                  {detail.content[lang]?.overview || detail.content.en.overview}
                </p>
                <div className="pt-2">
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Creative Direction</h4>
                  <p>{detail.content[lang]?.creativeDirection || detail.content.en.creativeDirection}</p>
                </div>
              </section>
            )}

            {/* Tab 2: Size & Specifications */}
            {activeTab === 'specs' && (
              <section className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">Size &amp; Specifications</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-neutral-500">Brand</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">CONTOURA</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-neutral-500">Category</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Women's Underwear / Shapewear</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-neutral-500">Production Workflow</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Human-Led AI Production</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <span className="text-neutral-500">Deliverables</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">PDP Visuals, Commercial Video, Catalog Images</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 italic mt-2">Sizes shown in project artwork</p>
              </section>
            )}

            {/* Tab 3 & Long-Form Sequence Container */}
            <section id="product-details" className="space-y-6 pt-4">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Product Details</h3>
              
              {/* Seamless Long-Form Media Stack (All 30 webp images in natural numeric order) */}
              <div className="contouraLongformSequence">
                {videoFile && (
                  <video
                    src={videoFile}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto mb-4"
                  />
                )}
                {imageFiles.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`CONTOURA detail image ${idx + 1}`}
                    loading={idx < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                  />
                ))}
              </div>
            </section>

          </div>

          {/* ── Right Column: Product Panel ── */}
          <aside className="contouraPurchasePanel">
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800 space-y-6">
              
              {/* Title & Metadata Block */}
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white leading-snug">
                  Curves in Comfort - Women's Underwear - Ecommerce
                </h1>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mt-2">
                  <span>Client Work</span>
                  <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">/</span>
                  <span>Product Commerce Visuals</span>
                </div>
              </div>

              {/* Verified Color Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                  Color: <span className="font-normal text-neutral-500">{colorVariants[selectedColorIndex].label}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {colorVariants.map((variant, idx) => (
                    <button
                      key={variant.id}
                      onClick={() => {
                        setSelectedColorIndex(idx);
                        setActiveMediaIndex(variant.mediaIndex);
                      }}
                      className={`relative flex items-center gap-2 p-1.5 rounded-lg border text-xs font-semibold transition-all ${
                        selectedColorIndex === idx
                          ? 'border-[#0057ff] bg-blue-50/50 dark:bg-blue-950/30 text-[#0057ff]'
                          : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      <img src={variant.image} alt="" className="w-7 h-7 rounded object-cover" />
                      <span className="pr-1">{variant.label}</span>
                      {selectedColorIndex === idx && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Verified Size Selector */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Size</label>
                  <span className="text-neutral-400">Sizes shown in project artwork</span>
                </div>
                <div className="flex items-center gap-2">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 rounded-lg text-xs font-bold border transition-all ${
                        selectedSize === size
                          ? 'border-[#0057ff] bg-[#0057ff] text-white shadow-sm'
                          : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Control (Visual Interaction) */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                  Quantity
                </label>
                <div className="inline-flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="w-10 h-10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 disabled:opacity-40 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-neutral-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Single Portfolio CTA */}
              <div className="pt-2">
                <button
                  onClick={scrollToDetails}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0057ff] hover:bg-blue-600 active:scale-[0.99] text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-200 text-center"
                >
                  View Full Visual Story
                </button>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* ── Scroll to Top Button ── */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
