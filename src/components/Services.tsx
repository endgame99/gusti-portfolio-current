
import { Language, ServiceItem } from '../types';

import { worksData } from '../data';

interface ServicesProps {
  lang: Language;
  services: ServiceItem[];
  searchQuery: string;
}

export function Services({ lang, services, searchQuery }: ServicesProps) {

  // Display overrides for section titles and descriptions
  const sectionOverrides: Record<string, { title: string; subtitle: string }> = {
    s3: {
      title: 'E-commerce Visual Creative',
      subtitle: 'Create high-converting visual assets for every stage of the e-commerce customer journey.',
    },
    s4: {
      title: 'Brand & Marketing Design',
      subtitle: 'Build a consistent brand presence through social media, packaging, identity, and print design.',
    },
  };

  // Display overrides for card labels (first 4 cards only)
  const cardLabelOverrides: Record<string, string[]> = {
    s3: ['Product Visuals', 'Product Detail Pages', 'Live Commerce Assets', 'Campaign Creatives'],
    s4: ['Social Media Design', 'Packaging Design', 'Brand Identity', 'Print Collateral'],
  };

  const filteredServices = services.filter(s => {
    const query = searchQuery.toLowerCase();
    if (!query) return true;
    // Search against both original and overridden labels
    const overriddenTitle = sectionOverrides[s.id]?.title || s.title;
    const overriddenSubtitle = sectionOverrides[s.id]?.subtitle || s.subtitle;
    const overriddenIncludes = cardLabelOverrides[s.id] || s.includes;
    return overriddenTitle.toLowerCase().includes(query) || 
           overriddenSubtitle.toLowerCase().includes(query) || 
           overriddenIncludes.some(inc => inc.toLowerCase().includes(query)) ||
           s.includes.some(inc => inc.toLowerCase().includes(query));
  });

  // Only show main 4 on Homepage style if no search
  const mainServices = searchQuery ? filteredServices : filteredServices.filter(s => s.isMain);

  // Preferred display order for service categories
  const serviceOrder = ['s3', 's4', 's2', 's1'];
  const displayedServices = [...mainServices].sort((a, b) => {
    const aIdx = serviceOrder.indexOf(a.id);
    const bIdx = serviceOrder.indexOf(b.id);
    // Services not in the order list go to the end, preserving original order
    if (aIdx === -1 && bIdx === -1) return 0;
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });

  // E-commerce Visual Creative (s3) card covers — real uploaded images
  const ecommerceCovers: Record<number, string> = {
    0: '/service-covers/ecommerce-visual/pdp-visuals.webp',
    1: '/service-covers/ecommerce-visual/marketplace-display.webp',
    2: '/service-covers/ecommerce-visual/promo-banner.webp',
    3: '/service-covers/ecommerce-visual/mega-sale-poster.webp',
  };

  const getThumbnail = (index: number, serviceId: string) => {
    if (serviceId === 's3' && index in ecommerceCovers) {
      return ecommerceCovers[index];
    }
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

      <div className="space-y-10">
        {displayedServices.map((service) => {
          const titleOverride = sectionOverrides[service.id];
          const displayTitle = titleOverride?.title || service.title;
          const displaySubtitle = titleOverride?.subtitle || service.subtitle;
          const labelOverrides = cardLabelOverrides[service.id];

          return (
            <div key={service.id} className="w-full">
              <div className="mb-3.5">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">{displayTitle}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">{displaySubtitle}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.includes.slice(0, 4).map((_inc, i) => {
                  // Use overridden label if available, otherwise use original
                  const displayLabel = labelOverrides?.[i] ?? _inc;

                  // PDP Visuals route: s3 index 0 (was "PDP Visuals", now "Product Visuals")
                  const isPdpVisuals = service.id === 's3' && i === 0;
                  // Marketplace Display route: s3 index 1 (was "Marketplace Display", now "Product Detail Pages")
                  const isMarketplaceDisplay = service.id === 's3' && i === 1;

                  const cardContent = (
                    <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-neutral-100 dark:bg-[#1c1c1c] border border-transparent dark:border-neutral-800 relative">
                       <img 
                          src={getThumbnail(i, service.id)} 
                          alt={displayLabel} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                       />
                       <div className="absolute inset-x-0 bottom-0 py-2 px-2 bg-gradient-to-t from-black/60 to-transparent">
                          <p className="text-[11px] font-medium text-white leading-tight">
                            {displayLabel}
                          </p>
                       </div>
                    </div>
                  );

                  if (isPdpVisuals) {
                    return (
                      <a
                        key={i}
                        href="/services/pdp-visuals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        {cardContent}
                      </a>
                    );
                  }

                  if (isMarketplaceDisplay) {
                    return (
                      <a
                        key={i}
                        href="/services/marketplace-display"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        {cardContent}
                      </a>
                    );
                  }

                  return (
                    <div key={i} className="group cursor-pointer">
                      {cardContent}
                    </div>
                  );
                })}
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
