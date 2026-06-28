
import { ChevronRight } from 'lucide-react';
import { Language, ServiceItem } from '../types';

import { worksData } from '../data';

interface ServicesProps {
  lang: Language;
  services: ServiceItem[];
  searchQuery: string;
}

export function Services({ lang, services, searchQuery }: ServicesProps) {


  const filteredServices = services.filter(s => {
    const query = searchQuery.toLowerCase();
    if (!query) return true;
    return s.title.toLowerCase().includes(query) || 
           s.subtitle.toLowerCase().includes(query) || 
           s.includes.some(inc => inc.toLowerCase().includes(query));
  });

  // Only show main 4 on Homepage style if no search
  const displayedServices = searchQuery ? filteredServices : filteredServices.filter(s => s.isMain);

  const getThumbnail = (index: number, serviceId: string) => {
    const num = (serviceId.charCodeAt(1) + index) % worksData.length;
    return worksData[num]?.image || 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80';
  };

  return (
    <div className="py-6">
      {/* Services Hero */}
      {!searchQuery && (
        <div className="mb-12 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left — Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.15] font-semibold text-neutral-900 dark:text-white tracking-tight">
                More visual content.{' '}
                <span className="text-neutral-400 dark:text-neutral-500">Lower production costs.</span>
              </h2>
              <p className="mt-4 md:mt-5 text-[15px] md:text-base leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-md">
                Create product images, ecommerce assets, videos, and campaign materials faster — without starting from scratch every time.
              </p>
            </div>

            {/* Right — Video */}
            <div className="w-full">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/60 shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/KUyRq7szZsM?rel=0"
                  title="GUSTI Services showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {displayedServices.map((service) => {
          return (
            <div key={service.id} className="w-full">
              <div className="flex justify-between items-end mb-2.5">
                <div>
                   <h3 className="text-sm font-bold text-neutral-900 dark:text-white">{service.title}</h3>
                   <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">{service.subtitle}</p>
                </div>
                <button className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0">
                  More <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {service.includes.slice(0, 4).map((inc, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-neutral-100 dark:bg-[#1c1c1c] border border-transparent dark:border-neutral-800 relative">
                       <img 
                          src={getThumbnail(i, service.id)} 
                          alt={inc} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                       />
                       <div className="absolute inset-x-0 bottom-0 py-2 px-2 bg-gradient-to-t from-black/60 to-transparent">
                          <p className="text-[10px] font-medium text-white leading-tight">
                            {inc}
                          </p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
         <div className="py-12 text-center text-sm text-neutral-500">No services found.</div>
      )}
    </div>
  );
}
