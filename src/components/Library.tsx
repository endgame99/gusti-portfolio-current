import React from 'react';
import { Language, LibraryItem } from '../types';
import { dictionary } from '../i18n';

interface LibraryProps {
  lang: Language;
  items: LibraryItem[];
  searchQuery: string;
}

export function Library({ lang, items, searchQuery }: LibraryProps) {
  const d = dictionary[lang];

  const filteredItems = items.filter(item => {
    const query = searchQuery.toLowerCase();
    if (!query) return true;
    return item.title.toLowerCase().includes(query) || 
           item.category.toLowerCase().includes(query) || 
           item.tags.some(t => t.toLowerCase().includes(query));
  });

  return (
    <div className="py-6">
      <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="break-inside-avoid group relative cursor-pointer font-sans bg-transparent">
            <div className="rounded-xl overflow-hidden bg-neutral-100 dark:bg-[#1c1c1c] relative border border-neutral-200/50 dark:border-neutral-800/60">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-300" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="pt-2 pb-1">
              <h3 className="type-heading-md font-semibold text-neutral-900 dark:text-white line-clamp-1">{item.title}</h3>
              <div className="flex flex-wrap mt-0.5">
                 <span className="type-label-sm font-medium text-neutral-500 dark:text-neutral-400">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
         <div className="py-12 text-center type-body-sm font-normal text-neutral-500">No library references found.</div>
      )}
    </div>
  );
}
