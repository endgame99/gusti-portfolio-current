import { CONTOURA_SKUS, creatorVideos } from '../../content/projects/contoura';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { ProjectDetailPageProps } from './projectHelpers';

export function ContouraDetail({ work, lang, onBack }: Omit<ProjectDetailPageProps, 'detail'>) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedSkuId, setSelectedSkuId] = useState<string>('bra-cup-3d-seamless');
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  // Multi-SKU selection handler
  const selectedSku = CONTOURA_SKUS.find((sku) => sku.id === selectedSkuId) ?? CONTOURA_SKUS[0];
  const selectedSkuIndex = CONTOURA_SKUS.findIndex((sku) => sku.id === selectedSku.id);

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
      <div className="detail-container pt-6 sm:pt-8">
        
        {/* ── 1. Back to Gallery Control ── */}
        <div className="mb-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 type-label-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Back to gallery"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to gallery</span>
          </button>
        </div>

        {/* ── 2. Top-Level Shell & Main Layout ── */}
        <section className="productDetailShell">
          <div className="productDetailMain">
            
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
                              <span className="type-label-xs font-bold tracking-wider text-white uppercase leading-none">Video</span>
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

              {/* SKU Recommendation Section */}
              <section className="contouraSkuSwitcher">
                <div className="contouraSectionHeading">
                  <div>
                    <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                      {lang === 'id' ? 'Koleksi klien' : 'Client collection'}
                    </span>
                    <h2 className="type-heading-lg font-bold text-neutral-900 dark:text-white">
                      {lang === 'id' ? 'Karya Contoura lainnya' : 'More from Contoura'}
                    </h2>
                  </div>
                  <p className="type-body-sm text-neutral-500 dark:text-neutral-400">
                    {lang === 'id'
                      ? 'Ganti karya tanpa meninggalkan halaman ini.'
                      : 'Switch work without leaving this page.'}
                  </p>
                </div>

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

                      <p className="recommendedSkuCard__title type-label-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {sku.title}
                      </p>
                    </button>
                  ))}
                </div>
              </section>

              {/* ── Creator Video Output ── */}
              <section id="creator-videos" className="creatorVideosSection contouraEvidenceSection">
                <div className="creatorVideosHeader contouraSectionHeading">
                  <div>
                    <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                      {lang === 'id' ? 'Output bergerak' : 'Motion output'}
                    </span>
                    <h2 className="type-heading-lg font-bold text-neutral-900 dark:text-white">
                      {lang === 'id' ? 'Video kreator' : 'Creator video output'}
                    </h2>
                  </div>
                  <p className="type-body-sm text-neutral-500 dark:text-neutral-400">
                    {creatorVideos.length} {lang === 'id' ? 'video tersedia' : 'videos available'}
                  </p>
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
                            ? 'Belum ada video dari kreator lokal yang diunggah di public/media/projects/contoura/creator-videos/.'
                            : 'No local creator videos available in public/media/projects/contoura/creator-videos/.'}
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

              {/* ── Long-form Visual Output ── */}
              <section id="long-form-output" className="contouraEvidenceSection">
                <div className="contouraSectionHeading">
                  <div>
                    <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                      {lang === 'id' ? 'Output visual' : 'Visual output'}
                    </span>
                    <h2 className="type-heading-lg font-bold text-neutral-900 dark:text-white">
                      {lang === 'id' ? 'Rangkaian visual panjang' : 'Long-form visual sequence'}
                    </h2>
                  </div>
                  <p className="type-body-sm text-neutral-500 dark:text-neutral-400">
                    {selectedSku.detailMedia.length} {lang === 'id' ? 'frame tersedia' : 'frames available'}
                  </p>
                </div>
                
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

            {/* ── 4. Sticky Project Context ── */}
            <aside
              className="contouraProjectPanel"
              aria-label={lang === 'id' ? 'Ringkasan proyek Contoura' : 'Contoura project summary'}
            >
              <div className="contouraProjectPanel__inner">
                <header className="contouraProjectPanel__identity">
                  <div className="contouraProjectPanel__avatar">
                    <img
                      src={work.image || '/media/projects/covers/starmap.jpg'}
                      alt=""
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                      {lang === 'id' ? 'Karya klien' : 'Client work'}
                    </span>
                    <p className="type-heading-lg font-bold text-neutral-900 dark:text-white leading-tight">
                      CONTOURA
                    </p>
                  </div>
                </header>

                <div className="contouraProjectPanel__title">
                  <h1 className="contouraProjectTitle text-neutral-900 dark:text-white">
                    {work.title}
                  </h1>
                  <div className="contouraProjectPanel__activeWork">
                    <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                      {lang === 'id' ? 'Karya aktif' : 'Selected work'} · {selectedSku.category}
                    </span>
                    <h2 className="contouraActiveSkuTitle text-neutral-900 dark:text-neutral-100">
                      {selectedSku.title}
                    </h2>
                  </div>
                </div>

                <div className="contouraProjectPanel__story">
                  <article>
                    <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                      01 — Challenge
                    </span>
                    <p>Present multiple underwear SKUs through one consistent e-commerce experience.</p>
                  </article>
                  <article>
                    <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                      02 — Idea
                    </span>
                    <p>Connect gallery visuals, long-form sequences, and creator videos in one reusable system.</p>
                  </article>
                  <article>
                    <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                      03 — My role
                    </span>
                    <p>Commerce visual direction, product visualization, creator-video production, and interaction direction.</p>
                  </article>
                  <article className="contouraProjectPanel__draft">
                    <div className="contouraProjectPanel__draftLabel">
                      <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                        04 — Project note
                      </span>
                      <span className="contouraDraftBadge">
                        {lang === 'id' ? 'DUMMY' : 'PLACEHOLDER'}
                      </span>
                    </div>
                    <p>
                      {lang === 'id'
                        ? 'Bagian ini sengaja dibuat dummy. Isi final mengikuti materi Contoura yang sudah disetujui.'
                        : 'This fourth note is intentionally a placeholder until the final Contoura material is approved.'}
                    </p>
                  </article>
                </div>

                <div className="contouraProjectPanel__selection" aria-live="polite">
                  <span className="type-eyebrow text-neutral-500 dark:text-neutral-400">
                    {lang === 'id' ? 'Status tampilan' : 'Viewing status'}
                  </span>
                  <div className="contouraProjectPanel__selectionMeta">
                    <span>
                      {lang === 'id' ? 'Karya' : 'Work'} {selectedSkuIndex + 1} / {CONTOURA_SKUS.length}
                    </span>
                    <span>
                      {lang === 'id' ? 'Media' : 'Media'} {activeMediaIndex + 1} / {selectedSku.gallery.length}
                    </span>
                  </div>
                </div>
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
