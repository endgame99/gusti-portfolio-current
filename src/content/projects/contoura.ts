export type CreatorVideo = {
  id: string;
  name: string;
  avatar: string;
  thumbnail: string;
  video: string;
  caption?: string;
};

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  thumbnail?: string;
  alt: string;
}

export type ContouraSku = {
  id: string;
  title: string;
  category: 'Bra' | 'Underwear' | 'Corset' | string;
  cover: string;
  gallery: MediaItem[];
  detailMedia: string[];
};

export const CONTOURA_SKUS: ContouraSku[] = [
  {
    id: 'bra-cup-3d-seamless',
    title:
      'Contoura - Bra Cup 3D Seamless Tali Bling Harum bunga unik BH Sport Wanita Menaikkan memadatkan Tanpa Kawat Adem Nyaman Dipakai',
    category: 'Bra',
    cover: '/media/projects/contoura/pdp 1/1.jpg',
    gallery: [
      {
        id: 'bra-1-video',
        type: 'video' as const,
        src: '/media/projects/contoura/pdp 1/Detail page 1/Video.mp4',
        poster: '/media/projects/contoura/pdp 1/1.jpg',
        thumbnail: '/media/projects/contoura/pdp 1/1.jpg',
        alt: 'Contoura Bra 3D Seamless product video',
      },
      ...Array.from({ length: 9 }, (_, i) => ({
        id: `bra-1-img-${i + 1}`,
        type: 'image' as const,
        src: `/media/projects/contoura/pdp 1/${i + 1}.jpg`,
        thumbnail: `/media/projects/contoura/pdp 1/${i + 1}.jpg`,
        alt: `Contoura Bra 3D Seamless visual ${String(i + 1).padStart(2, '0')}`,
      })),
    ],
    detailMedia: Array.from({ length: 30 }, (_, i) => `/media/projects/contoura/pdp 1/Detail page 1/${i + 1}.webp`),
  },
  {
    id: 'underwear-seamless-comfort',
    title:
      'Contoura - Seamless Ultra-Comfort Women Underwear Ergonomic Fit High-Breathability Seamless Fabric',
    category: 'Underwear',
    cover: '/media/projects/contoura/pdp 2/1.jpg',
    gallery: Array.from({ length: 8 }, (_, i) => ({
      id: `und-1-img-${i + 1}`,
      type: 'image' as const,
      src: `/media/projects/contoura/pdp 2/${i + 1}.jpg`,
      thumbnail: `/media/projects/contoura/pdp 2/${i + 1}.jpg`,
      alt: `Contoura Underwear visual ${String(i + 1).padStart(2, '0')}`,
    })),
    detailMedia: Array.from({ length: 10 }, (_, i) => `/media/projects/contoura/pdp 2/detail page/${i + 1}.webp`),
  },
];


// 2. LOCAL CREATOR VIDEOS DATA STRUCTURE
export const creatorVideoFilenames = [
  'ssstik.io_@shiroujin_1785619144686.mp4',
  'ssstik.io_@shiroujin_1785619165507.mp4',
  'ssstik.io_@shiroujin_1785619182234.mp4',
  'ssstik.io_@shiroujin_1785619198357.mp4',
  'ssstik.io_@shiroujin_1785619244161.mp4',
  'ssstik.io_@shiroujin_1785619294401.mp4',
  'ssstik.io_@shiroujin_1785619315234.mp4',
  'ssstik.io_@shiroujin_1785619346373.mp4',
  'ssstik.io_@shiroujin_1785619355628.mp4',
  'ssstik.io_@shiroujin_1785619369699.mp4',
];

export const creatorVideos: CreatorVideo[] = creatorVideoFilenames.map((filename, idx) => ({
  id: `creator-${idx + 1}`,
  name: '@shiroujin',
  avatar: '',
  thumbnail: '',
  video: `/media/projects/contoura/creator-videos/${filename}`,
  caption: `CONTOURA Creator Video ${idx + 1}`,
}));
