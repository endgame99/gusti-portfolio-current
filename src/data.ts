import { WorkItem, ServiceItem, LibraryItem, SlideItem } from './types';

export const WHATSAPP_LINK = 'https://wa.me/6200000000000?text=Halo%20Gusti%2C%20saya%20mau%20bahas%20project%20visual%20untuk%20brand%20saya.';

export const SOCIAL_LINKS = {
  email: 'gustiansyaht@gmail.com',
  instagram: 'https://instagram.com/',
  linkedin: 'https://linkedin.com/'
};

export const worksData: WorkItem[] = [
  { id: 'w1', title: 'STARMAP', label: 'Client Work / Product Commerce Visuals', image: '/starmap.jpg', tags: ['fashion', 'ecommerce', 'PDP', 'AI photography'], type: 'project' },
  { id: 'w2', title: 'Alfas Fragrance', label: 'Client Work / Fragrance Creative Assets', image: '/alfas fragrance.jpeg', tags: ['fragrance', 'packaging', 'campaign', 'ecommerce'], type: 'project' },
  { id: 'w3', title: 'Fabil Natural', label: 'Client Work / Beauty & Skincare Visuals', image: '/fabil natural.jpg', tags: ['skincare', 'beauty', 'PDP', 'campaign'], type: 'project' },
  { id: 'w4', title: 'FATSPORT.ID', label: 'Client Work / Sports Product Creative', image: '/fatsport.id.jpg', tags: ['sports', 'campaign', 'AI video', 'product visual'], type: 'project' },
  { id: 'w5', title: 'PALESUN', label: 'Client Work / Eyewear Visual Assets', image: '/palesun.jpg', tags: ['eyewear', 'catalog', 'ecommerce', 'fashion'], type: 'project' },
  { id: 'w6', title: 'CONTOURA', label: 'Client Work / Shapewear Product Visuals', image: '/contoura.jpg', tags: ['apparel', 'shapewear', 'PDP', 'catalog'], type: 'project' },
  { id: 'w7', title: 'BOSIE', label: 'Client Work / Fashion Product Creative', image: '/bosie.jpg', tags: ['fashion', 'product visual', 'catalog'], type: 'project' },
  { id: 'w8', title: 'PDP Visual System', label: 'Ecommerce Asset / Product Display', image: '/pdp visual system.jpg', tags: ['PDP', 'ecommerce', 'marketplace'], type: 'asset' },
  { id: 'w9', title: 'AI UGC Video Direction', label: 'Video Asset / Product Storytelling', image: '/ai ugc video direction.jpg', tags: ['video', 'AI video', 'ads'], type: 'asset' },
  { id: 'w10', title: 'Upcoming Project', label: 'Client Work / Creative Production', image: '/upcoming project.jpg', tags: ['production', 'creative', 'campaign'], type: 'project' },
  { id: 'w11', title: 'XIONGJIAN Active', label: 'Client Work / Activewear Campaign', image: 'https://img.zcool.cn/community/6832f33ff2253xxxhm4hh04653.JPG?x-oss-process=image/saveexif,1/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp', tags: ['fashion', 'activewear', 'campaign'], type: 'project' },
  { id: 'w12', title: 'Daisy Essence', label: 'Client Work / Creative Perfume Shot', image: '/alfas fragrance.jpeg', tags: ['fragrance', 'creative', 'commercial'], type: 'project' },
  { id: 'w13', title: 'Fabil Sunscreen', label: 'Client Work / Cosmetics Art Direction', image: '/fabil natural.jpg', tags: ['beauty', 'skincare', 'PDP'], type: 'project' },
  { id: 'w14', title: 'Track & Field Visuals', label: 'Client Work / Sports Content Production', image: '/fatsport.id.jpg', tags: ['sports', 'catalog', 'AI photography'], type: 'project' },
  { id: 'w15', title: 'PALESUN Horizon', label: 'Client Work / Premium Eyewear Campaign', image: '/palesun.jpg', tags: ['eyewear', 'fashion', 'campaign'], type: 'project' },
  { id: 'w16', title: 'CONTOURA Silk', label: 'Client Work / Lingerie Visual Collection', image: '/contoura.jpg', tags: ['apparel', 'catalog', 'PDP'], type: 'project' },
  { id: 'w17', title: 'BOSIE Streetwear', label: 'Client Work / Youth Fashion Display', image: '/bosie.jpg', tags: ['fashion', 'streetwear', 'product visual'], type: 'project' },
  { id: 'w18', title: 'Smart Marketplace Templates', label: 'Ecommerce Asset / Campaign Overlays', image: '/pdp visual system.jpg', tags: ['PDP', 'assets', 'design'], type: 'asset' },
  { id: 'w19', title: 'TikTok UGC Hooks Creator', label: 'Video Asset / Short-form Ad Formula', image: '/ai ugc video direction.jpg', tags: ['video', 'UGC', 'TikTok'], type: 'asset' },
  { id: 'w20', title: 'Autumn Collection Launch', label: 'Client Work / Fashion Visual Identity', image: '/upcoming project.jpg', tags: ['fashion', 'creative', 'campaign'], type: 'project' },
  { id: 'w21', title: 'STARMAP Winter wear', label: 'Client Work / Winter Apparel PDP', image: '/starmap.jpg', tags: ['fashion', 'ecommerce', 'PDP'], type: 'project' },
  { id: 'w22', title: 'Alfas Fragrance Summer', label: 'Client Work / Seasonal Campaign Assets', image: '/alfas fragrance.jpeg', tags: ['fragrance', 'campaign', 'creative'], type: 'project' },
  { id: 'w23', title: 'Fabil Herbal Extract', label: 'Client Work / Natural Skincare Concept', image: '/fabil natural.jpg', tags: ['skincare', 'natural', 'PDP'], type: 'project' },
  { id: 'w24', title: 'Dynamic Athletics', label: 'Client Work / High Performance Apparel', image: '/fatsport.id.jpg', tags: ['sports', 'apparel', 'PDP'], type: 'project' },
];

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    title: 'AI Product Photography',
    subtitle: 'Create catalog visuals, lookbook images, product scenes, and commercial-ready product photos through AI-assisted production.',
    includes: ['Catalog', 'Lookbook', 'Product Scene', 'Commercial Retouching', 'Multi-angle Product Photos', 'Product-on-model Visuals'],
    image: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=800&q=80',
    icon: 'Camera',
    isMain: true,
  },
  {
    id: 's2',
    title: 'AI Video & UGC',
    subtitle: 'Create AI-generated creator-style videos for reviews, unboxing, product demos, ads, soft selling, hard selling, and product storytelling.',
    includes: ['AI UGC-style Video', 'Product Review', 'Unboxing', 'Product Demo', 'Ads', 'FOMO Content', 'AI Voiceover / TTS if scoped'],
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
    icon: 'Video',
    isMain: true,
  },
  {
    id: 's3',
    title: 'E-commerce Visual Creative',
    subtitle: 'Turn product photos into sales-ready PDP visuals, marketplace banners, promo graphics, and social media selling creatives.',
    includes: ['PDP Visuals', 'Marketplace Display', 'Promo Banner', 'Mega-sale Poster', 'Social Media Selling Creative', 'Product Infographics'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    icon: 'ShoppingCart',
    isMain: true,
  },
  {
    id: 's4',
    title: 'Promo & Live Assets',
    subtitle: 'Create live-shopping visuals, discount badges, voucher pop-ups, stickers, overlays, and campaign support elements.',
    includes: ['Live Shopping Background', 'Voucher Pop-up', 'Discount Badge', 'Stickers', 'CTA Overlay', 'Cutout Elements', 'Promo Labels'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    icon: 'Tag',
    isMain: true,
  },
  {
    id: 's5',
    title: 'Packaging & Covers',
    subtitle: 'Create packaging concepts, product covers, labels, and offline-ready visual assets for digital and physical product presentation.',
    includes: ['Packaging Concept', 'Box Design', 'Product Cover', 'Label Design', 'Offline Display Assets', 'Print-ready Product Presentation'],
    image: 'https://images.unsplash.com/photo-1600188769045-bc602adbbdd6?w=800&q=80',
    icon: 'Package',
    isMain: false,
  },
  {
    id: 's6',
    title: 'Motion Graphic',
    subtitle: 'Add movement to your assets for enhanced storytelling and engagement.',
    includes: ['Animated Typography', 'Product Callouts', 'Looping Backgrounds'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    icon: 'Film',
    isMain: false,
  },
];

export const libraryData: LibraryItem[] = [
  { id: 'l1', title: 'China E-commerce Beauty', category: 'China E-commerce References', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80', tags: ['beauty', 'layout'] },
  { id: 'l2', title: 'Effective PDP Flow', category: 'PDP Logic', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80', tags: ['pdp', 'ecommerce'] },
  { id: 'l3', title: 'Korean Skincare Style', category: 'Korean Product Page Style', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80', tags: ['skincare', 'clean'] },
  { id: 'l4', title: 'Studio Lighting Setup AI', category: 'AI Photoshoot References', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&q=80', tags: ['lighting', 'ai'] },
  { id: 'l5', title: 'High Conv UGC Layout', category: 'UGC Hooks', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80', tags: ['ugc', 'video'] },
  { id: 'l6', title: 'Double 11 Promo Layout', category: 'Campaign Patterns', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80', tags: ['promo', 'campaign'] },
  { id: 'l7', title: 'Clean Cosmetics Box', category: 'Packaging References', image: 'https://images.unsplash.com/photo-1600188769045-bc602adbbdd6?w=400&q=80', tags: ['packaging', 'minimal'] },
  { id: 'l8', title: 'Live Sales Overlays', category: 'Live Commerce Assets', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&q=80', tags: ['live', 'assets'] },
];

export const slides: SlideItem[] = [
  { id: 'sl1', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80' },
  { id: 'sl2', image: 'https://images.unsplash.com/photo-1434389678232-05fd5a9ce59f?w=1600&q=80' },
  { id: 'sl3', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80' },
];
