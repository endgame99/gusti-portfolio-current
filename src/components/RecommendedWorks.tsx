import React, { useState } from 'react';
import { Language, WorkItem } from '../types';
import { dictionary } from '../i18n';

interface RecommendedWorksProps {
  lang: Language;
  works: WorkItem[];
  onAssetClick: (work: WorkItem) => void;
  onProjectClick: (work: WorkItem) => void;
  searchQuery: string;
}

const ITEMS_PER_PAGE = 12;

export function RecommendedWorks({ lang, works, onAssetClick, onProjectClick, searchQuery }: RecommendedWorksProps) {
  const d = dictionary[lang];
  const [currentPage, setCurrentPage] = useState(1);

  const filteredWorks = works.filter((work) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || 
      work.title.toLowerCase().includes(query) || 
      work.label.toLowerCase().includes(query) || 
      work.tags.some(t => t.toLowerCase().includes(query));
    
    return matchesSearch;
  });

  // Calculate pages
  const totalPages = Math.ceil(filteredWorks.length / ITEMS_PER_PAGE);

  // Reset page if filter/search reduces results
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedWorks = filteredWorks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mt-6">
        {paginatedWorks.map((work) => (
          <button
            key={work.id}
            onClick={() => work.type === 'asset' ? onAssetClick(work) : onProjectClick(work)}
            className="group flex flex-col items-start w-full text-left bg-[#F5F6F8] dark:bg-[#161616] p-3.5 rounded-[20px] hover:bg-white dark:hover:bg-[#1e1e1e] shadow-none hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 border-0"
          >
            <div className="w-full aspect-[3/2] rounded-[12px] overflow-hidden bg-neutral-200 dark:bg-[#2C2C2C] mb-3 relative">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300" />
            </div>
            
            <div className="px-1 w-full pb-0.5">
              <h3 className="text-[14px] font-semibold text-neutral-900 dark:text-white line-clamp-1">{work.title}</h3>
              <p className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-1.5 line-clamp-1">{work.label}</p>
            </div>
          </button>
        ))}
      </div>
      
      {filteredWorks.length === 0 && (
         <div className="py-12 text-center text-sm text-neutral-500">No works found for this filter.</div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10 mb-4 select-none">
           <button 
             disabled={currentPage === 1}
             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
             className={`w-8 h-8 flex items-center justify-center text-sm rounded-lg transition-colors ${
               currentPage === 1 
                 ? 'text-neutral-300 dark:text-neutral-700 cursor-not-allowed' 
                 : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
             }`}
           >
             &lt;
           </button>
           
           {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
             <button
               key={pageNum}
               onClick={() => setCurrentPage(pageNum)}
               className={`w-8 h-8 flex items-center justify-center text-xs font-semibold rounded-lg transition-all ${
                 currentPage === pageNum
                   ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold shadow-sm'
                   : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
               }`}
             >
               {pageNum}
             </button>
           ))}
           
           <button 
             disabled={currentPage === totalPages}
             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
             className={`w-8 h-8 flex items-center justify-center text-sm rounded-lg transition-colors ${
               currentPage === totalPages 
                 ? 'text-neutral-300 dark:text-neutral-700 cursor-not-allowed' 
                 : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800'
             }`}
           >
             &gt;
           </button>
        </div>
      )}
    </div>
  );
}
