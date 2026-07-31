import React from 'react';
import { Language, WorkItem } from '../types';

interface RecommendedWorksProps {
  lang: Language;
  works: WorkItem[];
  onAssetClick: (work: WorkItem) => void;
  onProjectClick: (work: WorkItem) => void;
  searchQuery: string;
}

/**
 * Generates a 2-letter uppercase initial fallback for client names when no logo image exists.
 */
function getInitials(name: string): string {
  if (!name) return 'GS';
  const clean = name.replace(/[^a-zA-Z0-9\s]/g, '').trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  if (words.length === 1 && words[0].length >= 2) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase() || 'GS';
}

export function RecommendedWorks({
  works,
  onAssetClick,
  onProjectClick,
  searchQuery,
}: RecommendedWorksProps) {
  // Filter works by search query
  const filteredWorks = works.filter((work) => {
    const query = searchQuery.toLowerCase();
    if (!query) return true;
    return (
      work.title.toLowerCase().includes(query) ||
      work.label.toLowerCase().includes(query) ||
      (work.clientName && work.clientName.toLowerCase().includes(query)) ||
      work.tags.some((t) => t.toLowerCase().includes(query))
    );
  });

  // Strict requirement: Total exactly 12 work cards on default display grid
  const displayWorks = filteredWorks.slice(0, 12);

  return (
    <div className="py-0">
      {/* Behance-inspired Portfolio Grid Layout: 1 col Mobile, 2 cols Tablet, 3 cols Desktop (NEVER 4 cols) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-4 sm:mt-6">
        {displayWorks.map((work) => {
          const clientName =
            work.clientName || work.label.split('/')[0]?.trim() || 'Client Work';

          return (
            <div
              key={work.id}
              onClick={() =>
                work.type === 'asset' ? onAssetClick(work) : onProjectClick(work)
              }
              tabIndex={0}
              role="button"
              aria-label={`View project ${work.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  work.type === 'asset' ? onAssetClick(work) : onProjectClick(work);
                }
              }}
              className="group relative flex flex-col w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057ff] focus-visible:ring-offset-2 rounded-xl transition-all duration-300"
            >
              {/* A. Project Cover Container (4:3 aspect-ratio) */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60">
                {work.mediaType === 'video' && work.videoSrc ? (
                  <video
                    src={work.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                )}

                {/* B. Subtle Hover Overlay & Title Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 p-3.5 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="type-display-md text-white font-semibold line-clamp-2 drop-shadow-sm leading-snug">
                    {work.title}
                  </h3>
                </div>
              </div>

              {/* C. Client Information Row below cover */}
              <div className="flex items-center gap-2.5 w-full mt-2.5 px-0.5">
                {/* Client Logo or Initial Circle Fallback */}
                {work.clientLogo ? (
                  <img
                    src={work.clientLogo}
                    alt={clientName}
                    className="w-7 h-7 rounded-full object-cover shrink-0 border border-neutral-200 dark:border-neutral-800"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-[10px] font-bold text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 tracking-tight select-none">
                    {getInitials(clientName)}
                  </div>
                )}

                {/* Client Name */}
                <span className="type-label-md text-neutral-900 dark:text-white font-semibold truncate min-w-0">
                  {clientName}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {displayWorks.length === 0 && (
        <div className="py-12 text-center type-body-md text-neutral-500">
          No works found for this filter.
        </div>
      )}
    </div>
  );
}
