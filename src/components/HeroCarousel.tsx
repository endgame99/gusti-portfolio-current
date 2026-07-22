import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WorkItem } from '../types';

interface HeroCarouselProps {
  works: WorkItem[];
  onSlideClick: (work: WorkItem) => void;
}

const AUTOPLAY_INTERVAL = 5000;
const FEATURED_COUNT = 5;

export function HeroCarousel({ works, onSlideClick }: HeroCarouselProps) {
  const featuredWorks = works.slice(0, FEATURED_COUNT);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = featuredWorks.length;

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % total);
      }, AUTOPLAY_INTERVAL);
    }
  }, [isHovered, total]);

  // Autoplay management
  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplay]);

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % total);
    resetAutoplay();
    setTimeout(() => setIsTransitioning(false), 600);
  }, [total, resetAutoplay, isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + total) % total);
    resetAutoplay();
    setTimeout(() => setIsTransitioning(false), 600);
  }, [total, resetAutoplay, isTransitioning]);

  if (total === 0) return null;

  const currentWork = featuredWorks[activeIndex];

  // Extract display categories from tags — capitalize first letter
  const categories = currentWork.tags.map(
    (tag) => tag.charAt(0).toUpperCase() + tag.slice(1)
  );

  return (
    <div
      className="relative w-full overflow-hidden rounded-[1.75rem] sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs"
      style={{ isolation: 'isolate' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div
        className="relative h-[clamp(250px,50vw,500px)] w-full cursor-pointer"
        onClick={() => onSlideClick(currentWork)}
      >
        {/* Slide Track */}
        <div
          className="flex h-full transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${(activeIndex * 100) / total}%)`,
          }}
        >
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / total}%` }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Bottom content overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-4 sm:p-6 lg:p-8">
          {/* Left: Title + client info + categories */}
          <div className="min-w-0 flex-1 pr-16 sm:pr-24 lg:pr-32">
            {/* Project title */}
            <h2 className="type-display-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {currentWork.title}
            </h2>

            {/* Client row: circular thumbnail + categories */}
            <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Circular client thumbnail */}
              <div className="h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white/40 shadow-sm sm:h-7 sm:w-7">
                <img
                  src={currentWork.image}
                  alt={currentWork.title}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/15 px-3 py-1 type-label-xs text-white/95 backdrop-blur-md"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Navigation arrows */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-1.5 inset-x-0 z-20 flex justify-center gap-1.5">
          {featuredWorks.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (i !== activeIndex) {
                  setIsTransitioning(true);
                  setActiveIndex(i);
                  resetAutoplay();
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 bg-white/90'
                  : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
