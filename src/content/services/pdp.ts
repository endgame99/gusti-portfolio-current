export interface SkuSet {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  promptPreview: string;
  tools: string;
  slides: string[];
}

const skuMedia: Record<string, string[]> = {
  "sku-01": [
    "cover.webp",
    "thumb-01.webp",
    "thumb-02.webp",
    "thumb-03.webp",
    "thumb-04.webp",
    "thumb-05.webp",
    "thumb-06.webp",
    "thumb-07.webp",
    "thumb-08.webp"
  ],
  "sku-02": [
    "cover.webp",
    "thumb-01.webp",
    "thumb-03.webp",
    "thumb-04.webp",
    "thumb-05.webp",
    "thumb-06.webp",
    "thumb-07.webp",
    "thumb-08.webp"
  ],
  "sku-03": [
    "cover.webp",
    "thumb-01.webp",
    "thumb-02.webp",
    "thumb-03.webp",
    "thumb-04.webp",
    "thumb-05.webp",
    "thumb-06.webp",
    "thumb-07.webp",
    "thumb-08.webp"
  ],
  "sku-04": [
    "cover.webp",
    "thumb-01.webp",
    "thumb-02.webp",
    "thumb-03.webp",
    "thumb-04.webp",
    "thumb-05.webp",
    "thumb-06.webp",
    "thumb-07.webp",
    "thumb-08.webp"
  ],
  "sku-05": [
    "cover.webp",
    "thumb-01.webp",
    "thumb-02.webp",
    "thumb-03.webp",
    "thumb-04.webp",
    "thumb-05.webp",
    "thumb-06.webp",
    "thumb-07.webp",
    "thumb-08.webp"
  ],
  "sku-06": [
    "cover.webp",
    "thumb-01.webp",
    "thumb-02.webp",
    "thumb-03.webp",
    "thumb-04.webp",
    "thumb-05.webp",
    "thumb-06.webp",
    "thumb-07.webp",
    "thumb-08.webp"
  ],
  "sku-07": [
    "cover.webp",
    "thumb-01.webp",
    "thumb-02.webp",
    "thumb-03.webp",
    "thumb-04.webp",
    "thumb-05.webp",
    "thumb-06.webp",
    "thumb-07.webp",
    "thumb-08.webp"
  ],
  "sku-08": [
    "cover.webp",
    "thumb-01.webp",
    "thumb-02.webp",
    "thumb-03.webp",
    "thumb-04.webp",
    "thumb-05.webp",
    "thumb-06.webp",
    "thumb-07.webp",
    "thumb-08.webp"
  ]
};
const makeSkuSlides = (skuId: string) => skuMedia[skuId].map(file => `/media/services/pdp/${skuId}/${file}`);

export const skuSets: SkuSet[] = [
  {
    id: 'sku-01',
    title: 'Beauty PDP Visual Set',
    subtitle: 'Beauty & Personal Care',
    coverImage: '/media/services/pdp/sku-01/cover.webp',
    promptPreview: 'Master prompt set for Beauty PDP Visual Set. Clean background skincare studio photography, soft lighting, sharp details, cosmetic bottle setup...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-01'),
  },
  {
    id: 'sku-02',
    title: 'Fashion PDP Visual Set',
    subtitle: 'Apparel & Outfit',
    coverImage: '/media/services/pdp/sku-02/cover.webp',
    promptPreview: 'Master prompt set for Fashion PDP Visual Set. Soft studio lighting setup, front product shot of outfit on neutral grey background, clothing photography...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-02'),
  },
  {
    id: 'sku-03',
    title: 'Kids Product PDP Visual Set',
    subtitle: 'Kids & Family Product',
    coverImage: '/media/services/pdp/sku-03/cover.webp',
    promptPreview: 'Master prompt set for Kids Product PDP Visual Set. Bright natural light environment, playful toy backdrop elements, soft shadows...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-03'),
  },
  {
    id: 'sku-04',
    title: 'Food PDP Visual Set',
    subtitle: 'Food & Beverage',
    coverImage: '/media/services/pdp/sku-04/cover.webp',
    promptPreview: 'Master prompt set for Food PDP Visual Set. Overhead camera angle, crisp studio lightning, fresh ingredients as background props...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-04'),
  },
  {
    id: 'sku-05',
    title: 'Home Living PDP Visual Set',
    subtitle: 'Home & Lifestyle',
    coverImage: '/media/services/pdp/sku-05/cover.webp',
    promptPreview: 'Master prompt set for Home Living PDP Visual Set. Minimalist interior scene, warm natural daylight through window, household goods...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-05'),
  },
  {
    id: 'sku-06',
    title: 'Gadget PDP Visual Set',
    subtitle: 'Tech & Accessories',
    coverImage: '/media/services/pdp/sku-06/cover.webp',
    promptPreview: 'Master prompt set for Gadget PDP Visual Set. Sleek dark aesthetic or clean metallic surface, precise technical lighting highlights...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-06'),
  },
  {
    id: 'sku-07',
    title: 'Wellness PDP Visual Set',
    subtitle: 'Health & Wellness',
    coverImage: '/media/services/pdp/sku-07/cover.webp',
    promptPreview: 'Master prompt set for Wellness PDP Visual Set. Soft calming color palette, neutral background, organic textures, balanced composition...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-07'),
  },
  {
    id: 'sku-08',
    title: 'Premium Gift PDP Visual Set',
    subtitle: 'Gift & Seasonal Campaign',
    coverImage: '/media/services/pdp/sku-08/cover.webp',
    promptPreview: 'Master prompt set for Premium Gift PDP Visual Set. Elegant ribbon details, high-end seasonal box aesthetic, warm holiday ambient lights...',
    tools: 'GPT-image2 · Nano Banana 2',
    slides: makeSkuSlides('sku-08'),
  },
];
