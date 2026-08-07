import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Play, X, Check } from 'lucide-react';
import { ProjectDetailPageProps } from './SharedTypes';

export type CreatorVideo = {
  id: string;
  name: string;
  avatar: string;
  thumbnail: string;
  video: string;
  caption?: string;
};

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  thumbnail?: string;
  alt: string;
}

export type ContouraSku = {
  id: string;
  title: string;
  category: 'Bra' | 'Underwear' | 'Corset' | string;
  cover: string;
  gallery: MediaItem[];
  detailMedia: string[];
};

export const CONTOURA_SKUS: ContouraSku[] = [
  {
    id: 'bra-cup-3d-seamless',
    title:
      'Contoura - Bra Cup 3D Seamless Tali Bling Harum bunga unik BH Sport Wanita Menaikkan memadatkan Tanpa Kawat Adem Nyaman Dipakai',
    category: 'Bra',
    cover: '/work-cards/Starmap/pdp 1/1.jpg',
    gallery: [
      {
        id: 'bra-1-video',
        type: 'video' as const,
        src: '/work-cards/Starmap/pdp 1/Detail page 1/Video.mp4',
        poster: '/work-cards/Starmap/pdp 1/1.jpg',
        thumbnail: '/work-cards/Starmap/pdp 1/1.jpg',
        alt: 'Contoura Bra 3D Seamless product video',
      },
      ...Array.from({ length: 9 }, (_, i) => ({
        id: `bra-1-img-${i + 1}`,
        type: 'image' as const,
        src: `/work-cards/Starmap/pdp 1/${i + 1}.jpg`,
        thumbnail: `/work-cards/Starmap/pdp 1/${i + 1}.jpg`,
        alt: `Contoura Bra 3D Seamless visual ${String(i + 1).padStart(2, '0')}`,
      })),
    ],
    detailMedia: Array.from({ length: 30 }, (_, i) => `/work-cards/Starmap/pdp 1/Detail page 1/${i + 1}.webp`),
  },
  {
    id: 'underwear-seamless-comfort',
    title:
      'Contoura - Seamless Ultra-Comfort Women Underwear Ergonomic Fit High-Breathability Seamless Fabric',
    category: 'Underwear',
    cover: '/work-cards/Starmap/pdp 2/1.jpg',
    gallery: Array.from({ length: 8 }, (_, i) => ({
      id: `und-1-img-${i + 1}`,
      type: 'image' as const,
      src: `/work-cards/Starmap/pdp 2/${i + 1}.jpg`,
      thumbnail: `/work-cards/Starmap/pdp 2/${i + 1}.jpg`,
      alt: `Contoura Underwear visual ${String(i + 1).padStart(2, '0')}`,
    })),
    detailMedia: Array.from({ length: 10 }, (_, i) => `/work-cards/Starmap/pdp 2/detail page/${i + 1}.webp`),
  },
];

export type ServiceId =
  | 'pdp-images'
  | 'long-form-pdp'
  | 'creator-videos'
  | 'campaign-assets'
  | 'complete-system';

export type ContinuationMethod = 'free-chat' | 'consultation' | null;

interface ServiceOption {
  id: ServiceId;
  title: string;
  description: string;
}

const SERVICES_LIST: ServiceOption[] = [
  {
    id: 'pdp-images',
    title: 'PDP Product Images',
    description: 'Product-focused visuals for the main marketplace gallery.',
  },
  {
    id: 'long-form-pdp',
    title: 'Long-form Product Detail Page',
    description: 'A structured visual story for benefits, features, and product education.',
  },
  {
    id: 'creator-videos',
    title: 'AI Creator Videos',
    description: 'Vertical creator-style videos for marketplace and social content.',
  },
  {
    id: 'campaign-assets',
    title: 'Campaign & Marketplace Assets',
    description: 'Adapted visual formats for launches, promotions, and platform campaigns.',
  },
  {
    id: 'complete-system',
    title: 'Complete Commerce Visual System',
    description: 'A connected system combining gallery images, long-form details, creator videos, and multi-SKU content.',
  },
];

interface WayToWork {
  title: string;
  description: string;
  price: string;
}

const WAYS_TO_WORK: WayToWork[] = [
  {
    title: 'Paid Pilot',
    description: 'Start with one product and a controlled scope before scaling.',
    price: 'Custom quote',
  },
  {
    title: 'Fixed Project',
    description: 'For clearly defined deliverables, quantities, and deadlines.',
    price: 'Custom quote',
  },
  {
    title: 'Hourly',
    description: 'For flexible production, visual iteration, revisions, creative direction, and ongoing support.',
    price: 'USD 10 / hour',
  },
  {
    title: 'Monthly Production',
    description: 'For brands with recurring SKUs, campaigns, and marketplace content needs.',
    price: 'Custom quote',
  },
];

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'whats-included',
    title: "WHAT’S INCLUDED",
    content: (
      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
        The final deliverables, file formats, dimensions, and approved scope are confirmed before production begins.
      </p>
    ),
  },
  {
    id: 'process',
    title: 'PROCESS',
    content: (
      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono">
        Product references → Visual direction → Production → Review → Final delivery
      </p>
    ),
  },
  {
    id: 'product-accuracy',
    title: 'PRODUCT ACCURACY',
    content: (
      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Outputs are reviewed against the supplied references for product shape, colour, visible construction, material appearance, and brand details.
      </p>
    ),
  },
  {
    id: 'revisions',
    title: 'REVISIONS',
    content: (
      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
        The number of revision rounds is confirmed in the approved quotation before production begins.
      </p>
    ),
  },
  {
    id: 'usage-rights',
    title: 'USAGE RIGHTS & CONFIDENTIALITY',
    content: (
      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Usage rights, confidentiality, source-file access, and white-label requirements are confirmed before production begins.
      </p>
    ),
  },
  {
    id: 'payment-delivery',
    title: 'PAYMENT & DELIVERY',
    content: (
      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Payment milestones, final delivery formats, and delivery timing are confirmed after scope approval.
      </p>
    ),
  },
  {
    id: 'faq',
    title: 'FAQ',
    content: (
      <div className="space-y-3 text-xs">
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">What do you need from me?</p>
          <p className="text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
            Product references, brand assets, target platforms, and required deliverables.
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">Can this support multiple SKUs?</p>
          <p className="text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
            Yes. Each SKU can use its own gallery, long-form details, and video content within one consistent system.
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">Can content be adapted for different marketplaces?</p>
          <p className="text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
            Yes. Final formats are confirmed based on the selected platforms and approved scope.
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">How is the price calculated?</p>
          <p className="text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
            Pricing depends on the selected deliverables, production volume, complexity, and timeline.
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">Can the project remain confidential?</p>
          <p className="text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
            Confidential or white-label production can be discussed before the project begins.
          </p>
        </div>
      </div>
    ),
  },
];

const WHATSAPP_PHONE = '6283897317974';

export function ContouraDetail({ work, lang, detail, onBack }: ProjectDetailPageProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedSkuId, setSelectedSkuId] = useState<string>('bra-cup-3d-seamless');
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'videos' | 'description' | 'details'>('videos');

  // Sidebar Commerce Configuration State
  const [selectedServices, setSelectedServices] = useState<ServiceId[]>([]);
  const [continuationMethod, setContinuationMethod] = useState<ContinuationMethod>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleService = (id: ServiceId) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectContinuation = (method: ContinuationMethod) => {
    setContinuationMethod(method);
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  // WhatsApp CTA Calculation
  const isServiceEmpty = selectedServices.length === 0;
  const isContinuationEmpty = continuationMethod === null;
  const isCtaDisabled = isServiceEmpty || isContinuationEmpty;

  let ctaHelperText: string | null = null;
  if (isServiceEmpty) {
    ctaHelperText = 'Select at least one service.';
  } else if (isContinuationEmpty) {
    ctaHelperText = 'Choose Free Chat or Consultation.';
  }

  const ctaButtonLabel =
    continuationMethod === 'consultation'
      ? 'REQUEST CONSULTATION ON WHATSAPP'
      : 'CONTINUE ON WHATSAPP';

  const selectedServiceLabels = selectedServices
    .map((id) => SERVICES_LIST.find((s) => s.id === id)?.title)
    .filter(Boolean)
    .map((title) => `- ${title}`)
    .join('\n');

  let whatsAppMessageText = '';
  if (continuationMethod === 'free-chat') {
    whatsAppMessageText = `Hi Gusti, I’m interested in your AI commerce visual services.\n\nSelected services:\n${selectedServiceLabels}\n\nI would like to ask a few questions and receive an initial estimate.\n\nProject details:\n[Continue typing here]`;
  } else if (continuationMethod === 'consultation') {
    whatsAppMessageText = `Hi Gusti, I would like to request a 30-minute consultation.\n\nConsultation fee:\nUSD 5\n\nSelected services:\n${selectedServiceLabels}\n\nI would like to discuss:\n- Product and brand requirements\n- Recommended project scope\n- Timeline and estimated budget\n\nProject details:\n[Continue typing here]`;
  }

  const whatsAppUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsAppMessageText)}`;

  // Multi-SKU selection handler
  const selectedSku = CONTOURA_SKUS.find((sku) => sku.id === selectedSkuId) ?? CONTOURA_SKUS[0];

  // Desktop Hover Zoom State & Handler
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('50% 50%');

  const handleZoomMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
  };

  const handleSelectSku = (skuId: string) => {
    setSelectedSkuId(skuId);
    setActiveMediaIndex(0);
    setIsImageZoomed(false);
    setZoomOrigin('50% 50%');
    if (thumbnailViewportRef.current) {
      thumbnailViewportRef.current.scrollTop = 0;
    }
  };

  // Thumbnail Rail & Video Refs and State
  const thumbnailViewportRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [canScrollBottom, setCanScrollBottom] = useState(false);

  const checkThumbScrollState = () => {
    if (thumbnailViewportRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = thumbnailViewportRef.current;
      setCanScrollBottom(scrollTop + clientHeight < scrollHeight - 5);
    }
  };

  useEffect(() => {
    checkThumbScrollState();
  }, [activeMediaIndex, selectedSkuId]);

  // Scroll active thumbnail into view
  useEffect(() => {
    const activeBtn = thumbnailRefs.current[activeMediaIndex];
    if (activeBtn && thumbnailViewportRef.current) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [activeMediaIndex]);

  // Reset scroll to top on SKU change
  useEffect(() => {
    if (thumbnailViewportRef.current) {
      thumbnailViewportRef.current.scrollTop = 0;
    }
    checkThumbScrollState();
  }, [selectedSkuId]);

  // Carousel & Modal State
  const viewportRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeCreatorIndex, setActiveCreatorIndex] = useState<number | null>(null);

  // 2. LOCAL CREATOR VIDEOS DATA STRUCTURE
  const creatorVideoFilenames = [
    'ssstik.io_@shiroujin_1785619144686.mp4',
    'ssstik.io_@shiroujin_1785619165507.mp4',
    'ssstik.io_@shiroujin_1785619182234.mp4',
    'ssstik.io_@shiroujin_1785619198357.mp4',
    'ssstik.io_@shiroujin_1785619244161.mp4',
    'ssstik.io_@shiroujin_1785619294401.mp4',
    'ssstik.io_@shiroujin_1785619315234.mp4',
    'ssstik.io_@shiroujin_1785619346373.mp4',
    'ssstik.io_@shiroujin_1785619355628.mp4',
    'ssstik.io_@shiroujin_1785619369699.mp4',
  ];

  const creatorVideos: CreatorVideo[] = creatorVideoFilenames.map((filename, idx) => ({
    id: `creator-${idx + 1}`,
    name: '@shiroujin',
    avatar: '',
    thumbnail: '',
    video: `/work-cards/Starmap/creator-videos/${filename}`,
    caption: `CONTOURA Creator Video ${idx + 1}`,
  }));

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

  // Update carousel scroll button states
  const checkScrollState = () => {
    if (viewportRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = viewportRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener('resize', checkScrollState);
    return () => window.removeEventListener('resize', checkScrollState);
  }, [creatorVideos.length]);

  const scrollCarousel = (direction: number) => {
    if (viewportRef.current) {
      const scrollAmount = viewportRef.current.clientWidth * 0.75 * direction;
      viewportRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Lock body scroll and manage keyboard focus when modal is open
  useEffect(() => {
    if (activeCreatorIndex !== null) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeCreatorVideo();
        } else if (e.key === 'ArrowLeft' && activeCreatorIndex > 0) {
          setActiveCreatorIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'ArrowRight' && activeCreatorIndex < creatorVideos.length - 1) {
          setActiveCreatorIndex((prev) => (prev !== null && prev < creatorVideos.length - 1 ? prev + 1 : prev));
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeCreatorIndex, creatorVideos.length]);

  const openCreatorVideo = (index: number) => {
    setActiveCreatorIndex(index);
  };

  const closeCreatorVideo = () => {
    setActiveCreatorIndex(null);
  };

  const showPreviousCreatorVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeCreatorIndex !== null && activeCreatorIndex > 0) {
      setActiveCreatorIndex(activeCreatorIndex - 1);
    }
  };

  const showNextCreatorVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeCreatorIndex !== null && activeCreatorIndex < creatorVideos.length - 1) {
      setActiveCreatorIndex(activeCreatorIndex + 1);
    }
  };

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

  const scrollToSection = (
    sectionId: string,
    tab: 'videos' | 'description' | 'details'
  ) => {
    setActiveTab(tab);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentMedia = selectedSku.gallery[activeMediaIndex] || selectedSku.gallery[0];
  const activeVideoItem = activeCreatorIndex !== null ? creatorVideos[activeCreatorIndex] : null;

  // Video Playback Controller
  useEffect(() => {
    if (currentMedia.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [activeMediaIndex, selectedSkuId, currentMedia.type]);

  return (
    <div
      id={`project-detail-${work.id}`}
      className="contouraProductDetail w-full min-h-screen bg-white dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 relative font-sans pb-24"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* ── 1. Back to Gallery Control ── */}
        <div className="mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Back to gallery"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to gallery</span>
          </button>
        </div>

        {/* ── 2. Top-Level Shell & Main Layout ── */}
        <section className="productDetailShell">
          <div className="productDetailMain grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-stretch">
            
            {/* ── 3. Left Dominant Column (Gallery & Content) ── */}
            <div className="productDetailLeft flex flex-col gap-6 min-w-0">
              
              {/* Product Gallery Container */}
              <div className="productGallery">
                <div className="productThumbnailRail">
                  <div
                    ref={thumbnailViewportRef}
                    className="productThumbnailViewport"
                    onScroll={checkThumbScrollState}
                    style={
                      canScrollBottom
                        ? {
                            WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%)',
                          }
                        : undefined
                    }
                  >
                    <div className="productThumbnailTrack">
                      {selectedSku.gallery.map((media, idx) => (
                        <button
                          key={media.id}
                          ref={(el) => { thumbnailRefs.current[idx] = el; }}
                          onClick={() => {
                            setActiveMediaIndex(idx);
                            setIsImageZoomed(false);
                            setZoomOrigin('50% 50%');
                          }}
                          className={`productThumbnail ${activeMediaIndex === idx ? 'is-active' : ''}`}
                          aria-label={`View thumbnail ${idx + 1}`}
                        >
                          <img
                            src={media.poster || media.thumbnail || media.src}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                          {media.type === 'video' && (
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-0.5 pointer-events-none">
                              <div className="w-5 h-5 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white">
                                <Play className="w-2.5 h-2.5 fill-white translate-x-[0.5px]" />
                              </div>
                              <span className="text-[9px] font-bold tracking-wider text-white uppercase leading-none">Video</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Media Surface */}
                <div className="productGalleryMain">
                  {currentMedia.type === 'video' ? (
                    <video
                      ref={videoRef}
                      key={currentMedia.id}
                      src={currentMedia.src}
                      poster={currentMedia.poster}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full relative overflow-hidden cursor-zoom-in"
                      onMouseEnter={() => setIsImageZoomed(true)}
                      onMouseMove={handleZoomMove}
                      onMouseLeave={() => {
                        setIsImageZoomed(false);
                        setZoomOrigin('50% 50%');
                      }}
                    >
                      <img
                        src={currentMedia.src}
                        alt={currentMedia.alt}
                        loading="eager"
                        draggable={false}
                        className="productGalleryImage w-full h-full object-cover"
                        style={{
                          transformOrigin: zoomOrigin,
                          transform: isImageZoomed ? 'scale(1.8)' : 'scale(1)',
                        }}
                      />
                    </div>
                  )}

                  {/* Left (Previous) Overlay Arrow */}
                  {activeMediaIndex > 0 && (
                    <button
                      type="button"
                      className="mainGalleryArrow mainGalleryArrow--left"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMediaIndex(activeMediaIndex - 1);
                        setIsImageZoomed(false);
                        setZoomOrigin('50% 50%');
                      }}
                      aria-label="Previous media"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}

                  {/* Right (Next) Overlay Arrow */}
                  {activeMediaIndex < selectedSku.gallery.length - 1 && (
                    <button
                      type="button"
                      className="mainGalleryArrow mainGalleryArrow--right"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMediaIndex(activeMediaIndex + 1);
                        setIsImageZoomed(false);
                        setZoomOrigin('50% 50%');
                      }}
                      aria-label="Next media"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}

                  <div className="productMediaCounter">
                    <span>{activeMediaIndex + 1} / {selectedSku.gallery.length}</span>
                  </div>
                </div>
              </div>

              {/* Active SKU Title */}
              <div className="pt-2 pb-1">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-white leading-snug">
                  {selectedSku.title}
                </h1>
              </div>

              {/* SKU Recommendation Section */}
              <section className="space-y-3 pt-4 pb-2 border-t border-neutral-200/80 dark:border-neutral-800">
                <h2 className="text-sm font-bold text-neutral-900 dark:text-white">
                  Direkomendasikan oleh toko ini
                </h2>

                <div className="recommendedSkuGrid">
                  {CONTOURA_SKUS.slice(0, 6).map((sku) => (
                    <button
                      key={sku.id}
                      type="button"
                      className={`recommendedSkuCard ${
                        selectedSkuId === sku.id ? 'isSelected' : ''
                      }`}
                      onClick={() => handleSelectSku(sku.id)}
                    >
                      <div className="recommendedSkuCard__image">
                        <img
                          src={sku.cover}
                          alt={sku.title}
                          draggable={false}
                        />
                      </div>

                      <h3 className="recommendedSkuCard__title text-neutral-900 dark:text-neutral-100">
                        {sku.title}
                      </h3>
                    </button>
                  ))}
                </div>
              </section>

              {/* Product Content Tabs Navigation */}
              <div className="border-b border-neutral-200 dark:border-neutral-800 mt-2">
                <nav className="flex items-center gap-6 text-sm font-semibold overflow-x-auto">
                  <button
                    onClick={() => scrollToSection('creator-videos', 'videos')}
                    className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === 'videos'
                        ? 'border-[#0057ff] text-[#0057ff]'
                        : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {lang === 'id' ? 'Video dari Kreator (30+)' : 'Creator Videos (30+)'}
                  </button>
                  <button
                    onClick={() => scrollToSection('product-description', 'description')}
                    className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === 'description'
                        ? 'border-[#0057ff] text-[#0057ff]'
                        : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    Product Description
                  </button>
                  <button
                    onClick={() => scrollToSection('product-details', 'details')}
                    className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === 'details'
                        ? 'border-[#0057ff] text-[#0057ff]'
                        : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    Product Details
                  </button>
                </nav>
              </div>

              {/* ── SECTION 1 (TOP): Creator Videos Section ── */}
              <section id="creator-videos" className="creatorVideosSection space-y-4 pt-4 pb-2 border-t border-neutral-200 dark:border-neutral-800/80">
                <div className="creatorVideosHeader">
                  <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                    {lang === 'id' ? 'Video dari Kreator (30+)' : 'Creator Videos (30+)'}
                  </h2>
                </div>

                <div className="creatorVideosCarouselWrapper">
                  <div
                    className="creatorVideosViewport"
                    ref={viewportRef}
                    onScroll={checkScrollState}
                  >
                    {creatorVideos.length > 0 ? (
                      <div className="creatorVideosTrack">
                        {creatorVideos.map((item, index) => (
                          <button
                            key={item.id}
                            ref={(el) => (cardRefs.current[index] = el)}
                            type="button"
                            className="creatorVideoCard"
                            onClick={() => openCreatorVideo(index)}
                          >
                            {item.thumbnail ? (
                              <img
                                className="creatorVideoCard__thumbnail"
                                src={item.thumbnail}
                                alt={`${item.name} creator video`}
                                draggable={false}
                              />
                            ) : (
                              <video
                                className="creatorVideoCard__previewVideo"
                                src={item.video}
                                muted
                                playsInline
                                preload="metadata"
                              />
                            )}

                            <div className="creatorVideoCard__play">
                              <Play fill="currentColor" />
                            </div>

                            <div className="creatorVideoCard__gradient" />

                            <div className="creatorVideoCard__identity">
                              {item.avatar ? (
                                <img
                                  className="creatorVideoCard__avatar"
                                  src={item.avatar}
                                  alt=""
                                />
                              ) : (
                                <div className="creatorVideoCard__avatarInitials">
                                  {item.name.replace(/^@/, '').charAt(0).toUpperCase() || 'S'}
                                </div>
                              )}
                              <span>{item.name}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="creatorVideosEmptyState">
                        <p>
                          {lang === 'id'
                            ? 'Belum ada video dari kreator lokal yang diunggah di public/work-cards/Starmap/creator-videos/.'
                            : 'No local creator videos available in public/work-cards/Starmap/creator-videos/.'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Overlay Arrows (Positioned relative to wrapper, outside overflow viewport) */}
                  {creatorVideos.length > 0 && canScrollLeft && (
                    <button
                      type="button"
                      className="creatorVideosOverlayArrow creatorVideosOverlayArrow--left"
                      aria-label={lang === 'id' ? 'Geser ke kiri' : 'Scroll left'}
                      onClick={() => scrollCarousel(-1)}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  {creatorVideos.length > 0 && canScrollRight && (
                    <button
                      type="button"
                      className="creatorVideosOverlayArrow creatorVideosOverlayArrow--right"
                      aria-label={lang === 'id' ? 'Geser ke kanan' : 'Scroll right'}
                      onClick={() => scrollCarousel(1)}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </section>

              {/* ── SECTION 2: Product Description ── */}
              <section id="product-description" className="space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-800/50">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">Product Description</h3>
                
                <div className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    Bra dengan wangi bunga berkelas dengan tali tipis berkilau seperti permata yang bisa pancarkan cantikmu.
                  </p>
                  <p>
                    Bisa nopang dan naikin payudara biar looksnya lebih kencang serta berisi lebih bulat dan bisa tampil jauh lebih percaya diri. Tidak bikin sesak, natural bikin tampil montok, bikin body nampak proporsional.
                  </p>

                  <ul className="space-y-2.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/60 font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0057ff] font-bold text-base leading-none">•</span>
                      <span>Bra beraroma bunga kamelia berkelas antibakteri</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0057ff] font-bold text-base leading-none">•</span>
                      <span>Pad bra memiliki banyak pori-pori 0,01 mm yang breathable— sirkulasi udara 1,5x lebih sejuk</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0057ff] font-bold text-base leading-none">•</span>
                      <span>Tali bra bling-bling bagai permata—didesain dengan kilauan cantik</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0057ff] font-bold text-base leading-none">•</span>
                      <span>Cup 3D+Jelly Strap Melingkar di Bawah Cup</span>
                    </li>
                  </ul>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
                    <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Warna:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold">
                      <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50">Dream Black</div>
                      <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50">Sky Blue</div>
                      <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50">Frost Milk</div>
                      <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50">Foundation Skin</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── SECTION 4: Long-Form Product Details ── */}
              <section id="product-details" className="space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-800/50">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Product Details</h3>
                
                {/* Seamless Long-Form Media Stack */}
                <div className="productDetailSequence">
                  {selectedSku.detailMedia.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      alt={`${selectedSku.title} detail image ${idx + 1}`}
                      loading={idx < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      draggable={false}
                    />
                  ))}
                </div>
              </section>

            </div>

            {/* ── 4. Right Information Panel (Integrated Commerce Configuration System) ── */}
            <aside className="contouraServiceSidebar">
              <div className="contouraServiceSidebar__scroll space-y-6 text-neutral-900 dark:text-neutral-100">
                
                {/* 1. CONTOURA Identity */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 shrink-0">
                    <img
                      src={work.image || '/starmap.jpg'}
                      alt="CONTOURA logo"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                      CONTOURA
                    </h2>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                      <span>Client Work</span>
                      <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">/</span>
                      <span>Product Commerce Visuals</span>
                    </div>
                  </div>
                </div>

                {/* 2. Project Story */}
                <div className="space-y-3.5 pb-4 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-0.5">
                      01 — Challenge
                    </span>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      Present multiple underwear SKUs through one consistent e-commerce experience.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                    <span className="font-mono text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-0.5">
                      02 — Idea
                    </span>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      Connect PDP images, long-form product details, and AI creator videos in one reusable visual system.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                    <span className="font-mono text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-0.5">
                      03 — My Role
                    </span>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      AI e-commerce design, product visualization, creator-video production, and interaction direction.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                    <span className="font-mono text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block mb-1">
                      04 — Delivered
                    </span>
                    <ul className="space-y-0.5 font-medium text-neutral-800 dark:text-neutral-200">
                      <li>09 PDP Images</li>
                      <li>01 Long-form Product Detail Page</li>
                      <li>30+ AI Creator Videos</li>
                      <li>Multi-SKU Visual System</li>
                    </ul>
                  </div>
                </div>

                {/* 3. Shown in This Project */}
                <div className="space-y-2 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  <h3 className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Shown in This Project
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-200">
                      09 PDP Images
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-200">
                      01 Long-form PDP
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-200">
                      30+ AI Creator Videos
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 font-medium text-neutral-800 dark:text-neutral-200">
                      Multi-SKU Visual System
                    </div>
                  </div>
                </div>

                {/* 4. Build a Similar System */}
                <div className="space-y-1.5 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                    BUILD A SIMILAR SYSTEM
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Choose the visual outputs that match your product, marketplace, and content needs.
                  </p>
                </div>

                {/* 5. What Do You Need? (Multi-select Services) */}
                <div className="space-y-3 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                    What Do You Need?
                  </h3>
                  <div className="space-y-2">
                    {SERVICES_LIST.map((service) => {
                      const isSelected = selectedServices.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => toggleService(service.id)}
                          className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                            isSelected
                              ? 'border-[#0057ff] bg-blue-50/40 dark:bg-blue-950/20 ring-1 ring-[#0057ff]'
                              : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700'
                          }`}
                        >
                          <div className="space-y-0.5 min-w-0 pr-1">
                            <span className="text-xs font-bold text-neutral-900 dark:text-white block">
                              {service.title}
                            </span>
                            <span className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed block">
                              {service.description}
                            </span>
                          </div>
                          <div
                            className={`w-4 h-4 rounded shrink-0 flex items-center justify-center mt-0.5 transition-colors ${
                              isSelected
                                ? 'bg-[#0057ff] text-white'
                                : 'border border-neutral-300 dark:border-neutral-700 bg-transparent'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {selectedServices.length > 0 && (
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 italic pt-1">
                      You can share more project details in the next step.
                    </p>
                  )}
                </div>

                {/* 6. How Would You Like to Continue? (Exclusive Selection) */}
                <div className="space-y-3 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                    How Would You Like to Continue?
                  </h3>
                  
                  {/* Option A: Free WhatsApp Chat */}
                  <button
                    type="button"
                    onClick={() => selectContinuation('free-chat')}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      continuationMethod === 'free-chat'
                        ? 'border-[#0057ff] bg-blue-50/40 dark:bg-blue-950/20 ring-1 ring-[#0057ff]'
                        : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-neutral-900 dark:text-white">
                        Free WhatsApp Chat
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/60">
                        Free
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Have a quick question or need an initial estimate? Share your selected services and basic project details through WhatsApp.
                    </p>
                    <span className="text-[11px] text-neutral-400 dark:text-neutral-500 block mt-1.5">
                      No booking required.
                    </span>
                  </button>

                  {/* Option B: 30-Minute Consultation */}
                  <button
                    type="button"
                    onClick={() => selectContinuation('consultation')}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      continuationMethod === 'consultation'
                        ? 'border-[#0057ff] bg-blue-50/40 dark:bg-blue-950/20 ring-1 ring-[#0057ff]'
                        : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-neutral-900 dark:text-white">
                        30-Minute Consultation
                      </span>
                      <span className="text-xs font-bold text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700">
                        USD 5
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Discuss your product, visual needs, production scope, budget, and the most suitable way to structure the project.
                    </p>
                    <div className="mt-2 pt-2 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] text-neutral-500 dark:text-neutral-400 space-y-1">
                      <p>Duration: 30 minutes</p>
                      <p>You can share your project details in the next step. Payment instructions will be sent after the consultation request is accepted.</p>
                    </div>
                  </button>
                </div>

                {/* 7. Ways to Work */}
                <div className="space-y-3 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                    Ways to Work
                  </h3>
                  <div className="space-y-2">
                    {WAYS_TO_WORK.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-neutral-50/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                            {item.title}
                          </span>
                          <span className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8. Your Interest (Dynamic Receipt-style Summary) */}
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 space-y-3 text-xs">
                  <h3 className="font-mono text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider border-b border-neutral-200/60 dark:border-neutral-800 pb-1.5">
                    YOUR INTEREST
                  </h3>
                  
                  <div className="space-y-1.5">
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold block">
                      Selected Services
                    </span>
                    {selectedServices.length > 0 ? (
                      <ul className="space-y-1 font-medium text-neutral-900 dark:text-white">
                        {selectedServices.map((id) => (
                          <li key={id} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0057ff] shrink-0" />
                            <span>{SERVICES_LIST.find((s) => s.id === id)?.title}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-neutral-400 dark:text-neutral-500 italic">
                        No services selected yet.
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-800 space-y-0.5">
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold block">
                      Next Step
                    </span>
                    <p className="font-bold text-neutral-900 dark:text-white">
                      {continuationMethod === 'free-chat' && 'Free WhatsApp Chat'}
                      {continuationMethod === 'consultation' && '30-Minute Consultation — USD 5'}
                      {!continuationMethod && (
                        <span className="text-neutral-400 dark:text-neutral-500 font-normal italic">
                          Choose a continuation option.
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* 9. Project Information Accordions (Loro Piana-style Progressive Disclosure) */}
                <div className="space-y-1 pt-1 pb-2">
                  <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2">
                    Project Information
                  </h3>
                  <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-xl overflow-hidden divide-y divide-neutral-200/80 dark:divide-neutral-800">
                    {ACCORDION_ITEMS.map((item) => {
                      const isOpen = openAccordion === item.id;
                      return (
                        <div key={item.id} className="bg-white dark:bg-neutral-900">
                          <button
                            type="button"
                            onClick={() => toggleAccordion(item.id)}
                            className="w-full py-3 px-3.5 text-left flex items-center justify-between gap-2 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer"
                          >
                            <span className="text-xs font-bold tracking-tight text-neutral-900 dark:text-white">
                              {item.title}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-3.5 pb-3.5 pt-1 text-xs border-t border-neutral-100 dark:border-neutral-800/50 bg-neutral-50/40 dark:bg-neutral-900/40">
                              {item.content}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* 10. Sticky WhatsApp CTA */}
              <div className="contouraServiceSidebar__actions space-y-2">
                {ctaHelperText && (
                  <p className="text-center text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                    {ctaHelperText}
                  </p>
                )}
                {isCtaDisabled ? (
                  <button
                    type="button"
                    disabled
                    className="w-full py-3 px-4 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 font-bold text-xs tracking-wider uppercase cursor-not-allowed text-center transition-colors"
                  >
                    {ctaButtonLabel}
                  </button>
                ) : (
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-3 px-4 rounded-xl bg-[#0057ff] hover:bg-blue-600 active:scale-[0.99] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-blue-500/20 transition-all text-center cursor-pointer"
                  >
                    {ctaButtonLabel}
                  </a>
                )}
              </div>
            </aside>

          </div>
        </section>

      </div>

      {/* ── 5. Fullscreen Creator Video Preview Modal ── */}
      {activeCreatorIndex !== null && activeVideoItem && (
        <div
          className="creatorVideoModal"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'id' ? 'Pratinjau video dari kreator' : 'Creator video preview'}
          onClick={closeCreatorVideo}
        >
          <div
            className="creatorVideoModal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="creatorVideoModal__close"
              aria-label={lang === 'id' ? 'Tutup video' : 'Close creator video'}
              onClick={closeCreatorVideo}
              ref={closeButtonRef}
            >
              <X className="w-5 h-5" />
            </button>

            <video
              key={activeVideoItem.video}
              className="creatorVideoModal__video"
              src={activeVideoItem.video}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />

            <button
              type="button"
              className="creatorVideoModal__previous"
              aria-label={lang === 'id' ? 'Video sebelumnya' : 'Previous creator video'}
              onClick={showPreviousCreatorVideo}
              disabled={activeCreatorIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              className="creatorVideoModal__next"
              aria-label={lang === 'id' ? 'Video berikutnya' : 'Next creator video'}
              onClick={showNextCreatorVideo}
              disabled={activeCreatorIndex === creatorVideos.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* ── 6. Scroll to Top Button ── */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
