import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

import { productShotTemplates } from '../data/serviceProductShots';
import { Language, ServiceItem } from '../types';

interface ServicesProps {
  lang: Language;
  services: ServiceItem[];
  searchQuery: string;
}

const categories = [
  'All',
  'Product Shot',
  'Influencer',
  'Ads',
  'Posters',
  'Marketplace',
  'Packaging',
  'Motion',
] as const;

type Category = Exclude<(typeof categories)[number], 'All'>;
type Aspect = 'portrait' | 'square' | 'landscape' | 'tall';

interface ServiceTemplate {
  id: string;
  title: string;
  category: Category;
  media: string;
  mediaType?: 'image' | 'video';
  aspect: Aspect;
  gallery?: string[];
}

const creatorVideos = [
  'ssstik.io_@shiroujin_1785619144686.mp4',
  'ssstik.io_@shiroujin_1785619165507.mp4',
  'ssstik.io_@shiroujin_1785619182234.mp4',
  'ssstik.io_@shiroujin_1785619198357.mp4',
  'ssstik.io_@shiroujin_1785619244161.mp4',
  'ssstik.io_@shiroujin_1785619294401.mp4',
] as const;

const creatorVideoPath = (file: string) => `/work-cards/Starmap/creator-videos/${file}`;

// Dummy catalog: titles and media use names already present in the repository.
const serviceTemplates: ServiceTemplate[] = [
  ...productShotTemplates,

  { id: 'shiroujin-01', title: 'shiroujin 1785619144686', category: 'Influencer', media: creatorVideoPath(creatorVideos[0]), mediaType: 'video', aspect: 'tall' },
  { id: 'shiroujin-02', title: 'shiroujin 1785619165507', category: 'Influencer', media: creatorVideoPath(creatorVideos[1]), mediaType: 'video', aspect: 'portrait' },
  { id: 'shiroujin-03', title: 'shiroujin 1785619182234', category: 'Influencer', media: creatorVideoPath(creatorVideos[2]), mediaType: 'video', aspect: 'tall' },
  { id: 'shiroujin-04', title: 'shiroujin 1785619198357', category: 'Influencer', media: creatorVideoPath(creatorVideos[3]), mediaType: 'video', aspect: 'portrait' },

  { id: 'fatsport-01', title: 'FATSPORT.ID', category: 'Ads', media: '/fatsport.id.jpg', aspect: 'landscape' },
  { id: 'ugc-direction-01', title: 'AI UGC Video Direction', category: 'Ads', media: '/ai ugc video direction.jpg', aspect: 'portrait' },
  { id: 'shiroujin-05', title: 'shiroujin 1785619244161', category: 'Ads', media: creatorVideoPath(creatorVideos[4]), mediaType: 'video', aspect: 'tall' },
  { id: 'shiroujin-06', title: 'shiroujin 1785619294401', category: 'Ads', media: creatorVideoPath(creatorVideos[5]), mediaType: 'video', aspect: 'portrait' },

  { id: 'poster-01', title: 'Mega Sale Poster', category: 'Posters', media: '/service-covers/ecommerce-visual/mega-sale-poster.webp', aspect: 'tall' },
  { id: 'poster-02', title: 'Promo Banner', category: 'Posters', media: '/service-covers/ecommerce-visual/promo-banner.webp', aspect: 'landscape' },
  { id: 'poster-03', title: 'Upcoming Project', category: 'Posters', media: '/upcoming project.jpg', aspect: 'portrait' },

  { id: 'marketplace-01', title: 'Marketplace Display 01', category: 'Marketplace', media: '/marketplace-display/item-01.jpg', aspect: 'portrait' },
  { id: 'marketplace-02', title: 'Marketplace Display 02', category: 'Marketplace', media: '/marketplace-display/item-02.jpg', aspect: 'square' },
  { id: 'marketplace-03', title: 'Marketplace Display 03', category: 'Marketplace', media: '/marketplace-display/item-03.jpg', aspect: 'tall' },
  { id: 'marketplace-04', title: 'Marketplace Display 04', category: 'Marketplace', media: '/marketplace-display/item-04.jpg', aspect: 'portrait' },
  { id: 'marketplace-05', title: 'PDP Visual System', category: 'Marketplace', media: '/service-covers/ecommerce-visual/pdp-visuals.webp', aspect: 'landscape' },

  { id: 'packaging-01', title: 'Alfas Fragrance', category: 'Packaging', media: '/alfas fragrance.jpeg', aspect: 'tall' },
  { id: 'packaging-02', title: 'Fabil Natural', category: 'Packaging', media: '/fabil natural.jpg', aspect: 'square' },
  { id: 'packaging-03', title: 'PDP SKU 01', category: 'Packaging', media: '/pdp-sku-selector/sku-01/cover.webp', aspect: 'portrait' },
  { id: 'packaging-04', title: 'PDP SKU 02', category: 'Packaging', media: '/pdp-sku-selector/sku-02/cover.webp', aspect: 'landscape' },

  { id: 'motion-01', title: 'STARMAP Video', category: 'Motion', media: '/work-cards/Starmap/pdp 1/Detail page 1/Video.mp4', mediaType: 'video', aspect: 'landscape' },
  { id: 'motion-02', title: 'shiroujin 1785619315234', category: 'Motion', media: creatorVideoPath('ssstik.io_@shiroujin_1785619315234.mp4'), mediaType: 'video', aspect: 'tall' },
  { id: 'motion-03', title: 'shiroujin 1785619346373', category: 'Motion', media: creatorVideoPath('ssstik.io_@shiroujin_1785619346373.mp4'), mediaType: 'video', aspect: 'portrait' },
  { id: 'motion-04', title: 'shiroujin 1785619355628', category: 'Motion', media: creatorVideoPath('ssstik.io_@shiroujin_1785619355628.mp4'), mediaType: 'video', aspect: 'tall' },
];

const aspectClasses: Record<Aspect, string> = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  tall: 'aspect-[9/16]',
};

function TemplateMedia({ template, modal = false }: { template: ServiceTemplate; modal?: boolean }) {
  const className = `h-full w-full ${modal ? 'object-contain' : 'object-cover'}`;

  if (template.mediaType === 'video') {
    return (
      <video
        key={template.media}
        src={template.media}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return <img src={template.media} alt={template.title} className={className} loading={modal ? 'eager' : 'lazy'} />;
}

export function Services({ searchQuery }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [selectedTemplate, setSelectedTemplate] = useState<ServiceTemplate | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const modalTemplates = selectedTemplate
    ? serviceTemplates.filter((template) => template.category === selectedTemplate.category)
    : [];
  const selectedTemplateIndex = selectedTemplate
    ? modalTemplates.findIndex((template) => template.id === selectedTemplate.id)
    : -1;
  const hasProductGallery = Boolean(selectedTemplate?.gallery?.length);
  const modalMedia = selectedTemplate?.gallery?.length
    ? selectedTemplate.gallery.map((media, index) => ({
        ...selectedTemplate,
        id: `${selectedTemplate.id}-media-${index + 1}`,
        media,
      }))
    : modalTemplates;
  const activeModalIndex = hasProductGallery ? selectedMediaIndex : selectedTemplateIndex;
  const activeModalTemplate = modalMedia[activeModalIndex] ?? selectedTemplate;

  const showAdjacentTemplate = (direction: -1 | 1) => {
    if (modalMedia.length === 0) return;

    if (hasProductGallery) {
      setSelectedMediaIndex(
        (currentIndex) => (currentIndex + direction + modalMedia.length) % modalMedia.length,
      );
      return;
    }

    if (selectedTemplateIndex < 0) return;
    const nextIndex = (selectedTemplateIndex + direction + modalTemplates.length) % modalTemplates.length;
    setSelectedTemplate(modalTemplates[nextIndex]);
  };

  const visibleTemplates = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return serviceTemplates.filter((template) => {
      const matchesCategory = activeCategory === 'All' || template.category === activeCategory;
      const matchesSearch = !query || `${template.title} ${template.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (!selectedTemplate) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleDialogKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedTemplate(null);
        return;
      }

      const categoryTemplates = serviceTemplates.filter(
        (template) => template.category === selectedTemplate.category,
      );
      const currentIndex = categoryTemplates.findIndex((template) => template.id === selectedTemplate.id);
      const galleryLength = selectedTemplate.gallery?.length ?? 0;

      if (event.key === 'ArrowLeft') {
        if (galleryLength > 0) {
          setSelectedMediaIndex((index) => (index - 1 + galleryLength) % galleryLength);
          return;
        }
        const previousIndex = (currentIndex - 1 + categoryTemplates.length) % categoryTemplates.length;
        setSelectedTemplate(categoryTemplates[previousIndex]);
      }

      if (event.key === 'ArrowRight') {
        if (galleryLength > 0) {
          setSelectedMediaIndex((index) => (index + 1) % galleryLength);
          return;
        }
        const nextIndex = (currentIndex + 1) % categoryTemplates.length;
        setSelectedTemplate(categoryTemplates[nextIndex]);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleDialogKeyboard);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleDialogKeyboard);
    };
  }, [selectedTemplate]);

  return (
    <div className="py-6">
      {!searchQuery && (
        <section className="mb-12 mt-2 md:mb-16" aria-labelledby="services-heading">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center">
              <h2 id="services-heading" className="type-display-xl text-neutral-900 dark:text-white">
                Turn any product into{' '}
                <span className="font-normal text-neutral-400 dark:text-neutral-500">ready to post content</span>
              </h2>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black">
              <video
                src={creatorVideoPath(creatorVideos[0])}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Services trailer"
              />
              <div className="pointer-events-none absolute inset-x-4 bottom-4 flex gap-1.5" aria-hidden="true">
                <span className="h-0.5 flex-1 bg-white" />
                <span className="h-0.5 flex-1 bg-white/35" />
                <span className="h-0.5 flex-1 bg-white/35" />
                <span className="h-0.5 flex-1 bg-white/35" />
              </div>
            </div>
          </div>
        </section>
      )}

      <section aria-label="Explore templates">
        <div className="mb-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-1 border-b border-neutral-200 dark:border-neutral-800">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-3 py-3 type-label-md transition-colors ${
                    isActive
                      ? 'text-neutral-950 dark:text-white'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white'
                  }`}
                  aria-pressed={isActive}
                >
                  {category}
                  {isActive && <span className="absolute inset-x-3 -bottom-px h-0.5 bg-neutral-950 dark:bg-white" />}
                </button>
              );
            })}
          </div>
        </div>

        {visibleTemplates.length > 0 ? (
          <div className="columns-2 gap-3 md:columns-3 md:gap-4 xl:columns-4">
            {visibleTemplates.map((template) => (
              <button
                key={template.id}
                type="button"
                onClick={() => {
                  setSelectedTemplate(template);
                  setSelectedMediaIndex(0);
                }}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-md bg-neutral-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:bg-neutral-900 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 md:mb-4"
                aria-label={`Open ${template.title}`}
              >
                <div className={aspectClasses[template.aspect]}>
                  <TemplateMedia template={template} />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/0 to-transparent p-3 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                  <div className="min-w-0">
                    <p className="truncate type-label-md font-semibold text-white">{template.title}</p>
                    <p className="mt-0.5 type-label-sm text-white/70">{template.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center type-body-sm text-neutral-500">No templates found.</div>
        )}
      </section>

      {selectedTemplate && (
        <div
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-white text-neutral-950 dark:bg-[#121212] dark:text-white"
          role="dialog"
          aria-modal="true"
          aria-labelledby="template-dialog-title"
        >
          <header className="grid h-16 flex-none grid-cols-[1fr_minmax(0,2fr)_1fr] items-center border-b border-neutral-200 px-4 dark:border-neutral-800 sm:px-6">
            <p className="invisible truncate type-label-sm font-semibold uppercase text-neutral-500 sm:visible">
              {selectedTemplate.category}
            </p>

            <div className="min-w-0 text-center">
              <h2 id="template-dialog-title" className="truncate type-label-md font-semibold">
                {selectedTemplate.title}
              </h2>
              <p className="mt-0.5 type-label-sm text-neutral-400">
                {activeModalIndex + 1} / {modalMedia.length}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedTemplate(null)}
              className="justify-self-end type-label-sm font-semibold uppercase text-neutral-600 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:text-neutral-400 dark:hover:text-white dark:focus-visible:ring-white"
            >
              View All
            </button>
          </header>

          <div className="relative min-h-0 flex-1 bg-neutral-50 px-4 py-4 dark:bg-[#0a0a0b] sm:px-16 sm:py-6">
            <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center overflow-hidden rounded-md">
              {activeModalTemplate && <TemplateMedia template={activeModalTemplate} modal />}
            </div>

            {modalMedia.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => showAdjacentTemplate(-1)}
                  className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-white/90 text-neutral-900 shadow-sm backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-white dark:hover:bg-neutral-800 dark:focus-visible:ring-white sm:left-6"
                  aria-label="Previous media"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => showAdjacentTemplate(1)}
                  className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-neutral-200 bg-white/90 text-neutral-900 shadow-sm backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-white dark:hover:bg-neutral-800 dark:focus-visible:ring-white sm:right-6"
                  aria-label="Next media"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          <div className="flex-none border-t border-neutral-200 bg-white px-3 py-3 dark:border-neutral-800 dark:bg-[#121212] sm:px-6">
            <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {modalMedia.map((template, index) => {
                const isSelected = index === activeModalIndex;
                return (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() => {
                      if (hasProductGallery) {
                        setSelectedMediaIndex(index);
                      } else {
                        setSelectedTemplate(template);
                      }
                    }}
                    className={`relative aspect-[3/4] w-14 flex-none overflow-hidden rounded-md transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-white sm:w-16 ${
                      isSelected ? 'opacity-100' : 'opacity-35 hover:opacity-70'
                    }`}
                    aria-label={`Show ${template.title} media ${index + 1}`}
                    aria-pressed={isSelected}
                  >
                    <TemplateMedia template={template} />
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedTemplate(null)}
            className="flex h-12 flex-none items-center justify-center gap-2 border-t border-neutral-200 bg-white type-label-sm font-semibold uppercase transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-950 dark:border-neutral-800 dark:bg-[#121212] dark:hover:bg-neutral-900 dark:focus-visible:ring-white"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back
          </button>
        </div>
      )}
    </div>
  );
}
