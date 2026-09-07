import { creatorVideoFilenames } from '../projects/contoura';
import { productShotTemplates } from './productShots';

export const servicePages = [
  { title: 'PDP Visuals', href: '/services/pdp-visuals' },
  { title: 'Marketplace Display', href: '/services/marketplace-display' },
] as const;

export const categories = [
  'All',
  'Product Shot',
  'Influencer',
  'Ads',
  'Posters',
  'Marketplace',
  'Packaging',
  'Motion',
] as const;

export type Category = Exclude<(typeof categories)[number], 'All'>;
export type Aspect = 'portrait' | 'square' | 'landscape' | 'tall';

export interface ServiceTemplate {
  id: string;
  title: string;
  category: Category;
  media: string;
  mediaType?: 'image' | 'video';
  aspect: Aspect;
  gallery?: string[];
}

export const creatorVideos = creatorVideoFilenames.slice(0, 6);

export const creatorVideoPath = (file: string) => `/media/projects/contoura/creator-videos/${file}`;

// Existing output catalog. Project facts belong in the project content modules.
export const serviceTemplates: ServiceTemplate[] = [
  ...productShotTemplates,

  { id: 'shiroujin-01', title: 'shiroujin 1785619144686', category: 'Influencer', media: creatorVideoPath(creatorVideos[0]), mediaType: 'video', aspect: 'tall' },
  { id: 'shiroujin-02', title: 'shiroujin 1785619165507', category: 'Influencer', media: creatorVideoPath(creatorVideos[1]), mediaType: 'video', aspect: 'portrait' },
  { id: 'shiroujin-03', title: 'shiroujin 1785619182234', category: 'Influencer', media: creatorVideoPath(creatorVideos[2]), mediaType: 'video', aspect: 'tall' },
  { id: 'shiroujin-04', title: 'shiroujin 1785619198357', category: 'Influencer', media: creatorVideoPath(creatorVideos[3]), mediaType: 'video', aspect: 'portrait' },

  { id: 'fatsport-01', title: 'FATSPORT.ID', category: 'Ads', media: '/media/projects/covers/fatsport.id.jpg', aspect: 'landscape' },
  { id: 'ugc-direction-01', title: 'AI UGC Video Direction', category: 'Ads', media: '/media/projects/covers/ai-ugc-video-direction.jpg', aspect: 'portrait' },
  { id: 'shiroujin-05', title: 'shiroujin 1785619244161', category: 'Ads', media: creatorVideoPath(creatorVideos[4]), mediaType: 'video', aspect: 'tall' },
  { id: 'shiroujin-06', title: 'shiroujin 1785619294401', category: 'Ads', media: creatorVideoPath(creatorVideos[5]), mediaType: 'video', aspect: 'portrait' },

  { id: 'poster-01', title: 'Mega Sale Poster', category: 'Posters', media: '/media/services/covers/ecommerce-visual/mega-sale-poster.webp', aspect: 'tall' },
  { id: 'poster-02', title: 'Promo Banner', category: 'Posters', media: '/media/services/covers/ecommerce-visual/promo-banner.webp', aspect: 'landscape' },
  { id: 'poster-03', title: 'Upcoming Project', category: 'Posters', media: '/media/projects/covers/upcoming-project.jpg', aspect: 'portrait' },

  { id: 'marketplace-01', title: 'Marketplace Display 01', category: 'Marketplace', media: '/media/services/marketplace/item-01.jpg', aspect: 'portrait' },
  { id: 'marketplace-02', title: 'Marketplace Display 02', category: 'Marketplace', media: '/media/services/marketplace/item-02.jpg', aspect: 'square' },
  { id: 'marketplace-03', title: 'Marketplace Display 03', category: 'Marketplace', media: '/media/services/marketplace/item-03.jpg', aspect: 'tall' },
  { id: 'marketplace-04', title: 'Marketplace Display 04', category: 'Marketplace', media: '/media/services/marketplace/item-04.jpg', aspect: 'portrait' },
  { id: 'marketplace-05', title: 'PDP Visual System', category: 'Marketplace', media: '/media/services/covers/ecommerce-visual/pdp-visuals.webp', aspect: 'landscape' },

  { id: 'packaging-01', title: 'Alfas Fragrance', category: 'Packaging', media: '/media/projects/covers/alfas-fragrance.jpeg', aspect: 'tall' },
  { id: 'packaging-02', title: 'Fabil Natural', category: 'Packaging', media: '/media/projects/covers/fabil-natural.jpg', aspect: 'square' },
  { id: 'packaging-03', title: 'PDP SKU 01', category: 'Packaging', media: '/media/services/pdp/sku-01/cover.webp', aspect: 'portrait' },
  { id: 'packaging-04', title: 'PDP SKU 02', category: 'Packaging', media: '/media/services/pdp/sku-02/cover.webp', aspect: 'landscape' },

  { id: 'motion-01', title: 'STARMAP Video', category: 'Motion', media: '/media/projects/contoura/pdp 1/Detail page 1/Video.mp4', mediaType: 'video', aspect: 'landscape' },
  { id: 'motion-02', title: 'shiroujin 1785619315234', category: 'Motion', media: creatorVideoPath('ssstik.io_@shiroujin_1785619315234.mp4'), mediaType: 'video', aspect: 'tall' },
  { id: 'motion-03', title: 'shiroujin 1785619346373', category: 'Motion', media: creatorVideoPath('ssstik.io_@shiroujin_1785619346373.mp4'), mediaType: 'video', aspect: 'portrait' },
  { id: 'motion-04', title: 'shiroujin 1785619355628', category: 'Motion', media: creatorVideoPath('ssstik.io_@shiroujin_1785619355628.mp4'), mediaType: 'video', aspect: 'tall' },
];
