import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { SlideItem } from '../types';
import { heroSlidesData } from '../data';

interface HeroCarouselProps {
  slidesData?: SlideItem[];
  works?: any[];
  onSlideClick?: (work: any) => void;
}

const AUTOPLAY_INTERVAL = 4000;
const TRANSITION_MS = 600;

export function HeroCarousel({ slidesData }: HeroCarouselProps) {
  const slides: SlideItem[] =
    slidesData && slidesData.length > 0 ? slidesData : heroSlidesData;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const carouselRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const fallbackFired = useRef<Set<number>>(new Set());

  const total = slides.length;

  // ── Tab visibility listener ──
  useEffect(() => {
    const handler = () => setIsTabHidden(document.hidden);
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, []);

  // ── Autoplay Effect (4000ms interval, auto-reset on slide change, pause on hover/hidden tab) ──
  useEffect(() => {
    if (isHovered || isTabHidden || total <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [activeIndex, isHovered, isTabHidden, total]);

  // ── Video playback management ──
  useEffect(() => {
    slides.forEach((slide, idx) => {
      const video = videoRefs.current[idx];
      if (video && slide.mediaType === 'video') {
        if (idx === activeIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex, slides]);

  // ── Navigation ──
  const goNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // ── Keyboard navigation ──
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      }
    };
    el.addEventListener('keydown', handler);
    return () => el.removeEventListener('keydown', handler);
  }, [goPrev, goNext]);

  // ── Touch swipe navigation ──
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -40) {
      goNext();
    } else if (delta > 40) {
      goPrev();
    }
    touchStartX.current = null;
  };

  // ── Card click handler ──
  const handleCardClick = (e: React.MouseEvent, index: number, slide: SlideItem) => {
    if (index === activeIndex) {
      if (slide.href) {
        if (slide.external !== false) {
          window.open(slide.href, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = slide.href;
        }
      }
    } else {
      e.preventDefault();
      e.stopPropagation();
      setActiveIndex(index);
    }
  };

  // ── Determine card role per ZCOOL 3D stacked model ──
  const getCardRole = (index: number): 'active' | 'left' | 'right' | 'hidden' => {
    if (total <= 0) return 'hidden';
    const diff = ((index - activeIndex) % total + total) % total;
    if (diff === 0) return 'active';
    if (total === 1) return 'hidden';
    if (total === 2) {
      return diff === 1 ? 'right' : 'hidden';
    }
    const leftDiff = ((activeIndex - index) % total + total) % total;
    if (diff === 1) return 'right';
    if (leftDiff === 1) return 'left';
    return 'hidden';
  };

  // ── Image Fallback handler ──
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    if (fallbackFired.current.has(index)) return;
    fallbackFired.current.add(index);
    const target = e.currentTarget;
    if (target.src.includes('maxresdefault.jpg')) {
      target.src = target.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
    }
  };

  if (total === 0) return null;

  return (
    <div className="heroBannerArea bannerArea">
      <section
        ref={carouselRef}
        tabIndex={0}
        role="region"
        aria-label="Highlight Carousel"
        aria-roledescription="carousel"
        className="heroCarousel bannerCarousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="heroViewport viewport">
          {slides.map((slide, index) => {
            const role = getCardRole(index);
            const isActive = role === 'active';
            const isLeft = role === 'left';
            const isRight = role === 'right';
            const isHidden = role === 'hidden';

            const cardClasses = [
              'heroCard',
              'card',
              isActive && 'heroActiveCard activeCard',
              isLeft && 'heroSideCard heroLeftSideCard leftSideCard',
              isRight && 'heroSideCard heroRightSideCard rightSideCard',
              isHidden && 'heroHiddenCard hiddenCard',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <div
                key={slide.id}
                className={cardClasses}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                style={{ pointerEvents: isHidden ? 'none' : 'auto' }}
              >
                <a
                  className="heroCardLink"
                  href={isActive ? slide.href : undefined}
                  target={isActive && slide.external !== false ? '_blank' : undefined}
                  rel={isActive && slide.external !== false ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                    }
                    handleCardClick(e as unknown as React.MouseEvent, index, slide);
                  }}
                  tabIndex={-1}
                  draggable={false}
                >
                  <span className="heroSurface relative group/card">
                    {slide.mediaType === 'video' ? (
                      <video
                        ref={(el) => { videoRefs.current[index] = el; }}
                        src={slide.src}
                        autoPlay={isActive}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="heroImage"
                      />
                    ) : (
                      <img
                        src={slide.src}
                        alt={slide.alt || `Highlight ${index + 1}`}
                        className="heroImage"
                        draggable={false}
                        loading={isActive ? 'eager' : 'lazy'}
                        onError={(e) => handleImgError(e, index)}
                      />
                    )}

                    {/* Play Badge Overlay — Only on active front card with 70% opacity */}
                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover/card:bg-black/35 pointer-events-none">
                        <Play className="h-10 w-10 sm:h-12 sm:w-12 fill-white text-white opacity-70 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover/card:scale-115 group-hover/card:opacity-95" />
                      </div>
                    )}
                  </span>
                </a>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="heroNavButton heroPrevButton prevButton"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="heroNavIcon" />
        </button>

        <button
          type="button"
          className="heroNavButton heroNextButton nextButton"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next slide"
        >
          <ChevronRight className="heroNavIcon" />
        </button>
      </section>
    </div>
  );
}
