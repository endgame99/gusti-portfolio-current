import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowUpRight, ChevronsLeftRight } from 'lucide-react';
import { Language, WorkItem } from '../types';
import { dictionary } from '../i18n';

interface RecommendedWorksProps {
  lang: Language;
  works: WorkItem[];
  onAssetClick: (work: WorkItem) => void;
  onProjectClick: (work: WorkItem) => void;
  searchQuery: string;
}

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      e.stopPropagation();
      e.preventDefault();
      updatePosition(e.clientX);
    };

    const handlePointerUp = (e: PointerEvent) => {
      e.stopPropagation();
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, updatePosition]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.stopPropagation();
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.stopPropagation();
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden"
    >
      {/* After image (background) */}
      <img
        src={afterImage}
        alt={`${title} - After`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped top layer) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: containerRef.current ? containerRef.current.clientWidth : '100%',
            maxWidth: 'none',
          }}
          draggable={false}
        />
      </div>

      {/* Accessible labels */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <span className="rounded bg-black/50 px-2 py-0.5 type-label-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs">
          Before
        </span>
      </div>
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <span className="rounded bg-black/50 px-2 py-0.5 type-label-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs">
          After
        </span>
      </div>

      {/* Vertical divider line & handle */}
      <div
        className="absolute top-0 bottom-0 z-30 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)] -translate-x-1/2"
        style={{ left: `${sliderPos}%` }}
      >
        <div
          tabIndex={0}
          role="slider"
          aria-valuenow={Math.round(sliderPos)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Before and after comparison slider"
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex h-7 w-7 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-ew-resize"
        >
          <ChevronsLeftRight className="h-3.5 w-3.5 text-neutral-900" />
        </div>
      </div>
    </div>
  );
}

export function RecommendedWorks({
  works,
  onAssetClick,
  onProjectClick,
  searchQuery,
}: RecommendedWorksProps) {
  const filteredWorks = works.filter((work) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      work.title.toLowerCase().includes(query) ||
      work.label.toLowerCase().includes(query) ||
      work.tags.some((t) => t.toLowerCase().includes(query));

    return matchesSearch;
  });

  return (
    <div className="py-0">
      {/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card-gap mt-4 sm:mt-6">
        {filteredWorks.map((work) => {
          const isComparison =
            work.mediaType === 'comparison' ||
            (Boolean(work.beforeImage) && Boolean(work.afterImage));
          const isVideo = work.mediaType === 'video' && Boolean(work.videoSrc);

          // Get verified client name
          const clientName =
            work.clientName ||
            work.label.split('/')[0]?.trim() ||
            'Client Work';

          // Extract display tags — capitalize first letter
          const displayTags = work.tags.map(
            (tag) => tag.charAt(0).toUpperCase() + tag.slice(1)
          );

          return (
            <div
              key={work.id}
              onClick={() =>
                work.type === 'asset' ? onAssetClick(work) : onProjectClick(work)
              }
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  work.type === 'asset' ? onAssetClick(work) : onProjectClick(work);
                }
              }}
              className="group relative flex flex-col items-start w-full text-left bg-[#F5F6F8] dark:bg-[#161616] p-3.5 sm:p-4 rounded-2xl hover:bg-white dark:hover:bg-[#1e1e1e] shadow-none hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 border border-neutral-200/60 dark:border-neutral-800/60 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
            >
              {/* Media Container (4:3 aspect ratio) */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 mb-3">
                {isComparison ? (
                  <BeforeAfterSlider
                    beforeImage={work.beforeImage!}
                    afterImage={work.afterImage!}
                    title={work.title}
                  />
                ) : isVideo ? (
                  <video
                    src={work.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {/* Dark bottom gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                {/* Project title overlaid at bottom-left of media */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4">
                  <h3 className="type-display-md text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] line-clamp-1">
                    {work.title}
                  </h3>
                </div>
              </div>

              {/* Metadata row below media */}
              <div className="w-full flex items-center justify-between gap-2 px-0.5 mt-1">
                {/* Left side: circular logo (if exists) + client name */}
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  {work.clientLogo && (
                    <img
                      src={work.clientLogo}
                      alt={clientName}
                      className="h-6 w-6 rounded-full object-cover border border-neutral-200 dark:border-neutral-700 shrink-0"
                    />
                  )}
                  <span className="type-label-md text-neutral-900 dark:text-white truncate">
                    {clientName}
                  </span>
                </div>

                {/* Right side: VIEW PROJECT reveal button */}
                <div className="flex items-center justify-end shrink-0">
                  <div className="flex items-center justify-center gap-1.5 h-8 w-8 group-hover:w-auto group-hover:px-3 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 transition-all duration-300 overflow-hidden shadow-xs">
                    <span className="type-label-xs font-bold tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[100px] transition-all duration-300">
                      VIEW PROJECT
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Service-category chips below metadata row */}
              <div className="w-full flex items-center gap-1.5 overflow-hidden whitespace-nowrap mt-2.5 px-0.5 no-scrollbar">
                {displayTags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-neutral-200/60 dark:bg-neutral-800/80 px-2.5 py-0.5 type-label-xs text-neutral-600 dark:text-neutral-400 shrink-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredWorks.length === 0 && (
        <div className="py-12 text-center type-body-md text-neutral-500">
          No works found for this filter.
        </div>
      )}
    </div>
  );
}
