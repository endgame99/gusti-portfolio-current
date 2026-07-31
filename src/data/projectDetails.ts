import { Language } from '../types';

export interface ProjectDetailContent {
  overview: string;
  creativeDirection: string;
  scope: string;
}

export interface ProjectCredit {
  role: { [key in Language]: string };
  name: string;
}

export interface ProjectSection {
  id: string;
  title: { [key in Language]: string };
  subTitle?: { [key in Language]: string };
}

export interface ProjectMedia {
  url: string;
  type: 'image' | 'video';
  aspectRatio?: string;
  caption?: { [key in Language]: string };
  subText?: { [key in Language]: string };
}

export interface DetailedProject {
  id: string;
  client: string;
  year: string;
  role: { [key in Language]: string };
  services: { [key in Language]: string[] };
  content: { [key in Language]: ProjectDetailContent };
  images: string[];
  videoUrl?: string; // Optional main video
  credits?: ProjectCredit[]; // Custom credits like in ZCOOL
  mediaList?: ProjectMedia[]; // Advanced multi-format vertical assets
  sections?: ProjectSection[];
}

export const detailedProjectsData: Record<string, DetailedProject> = {
  w1: {
    id: 'w1',
    client: 'CONTOURA',
    year: '2025',
    role: {
      id: 'Sutradara Kreatif & Produser AI Utama',
      en: 'Creative Director & Lead AI Producer',
      cn: '创意总监与首席 AI 制作人'
    },
    services: {
      id: ['Sintesis Model Virtual AI', 'Generasi Lingkungan Kosmik', 'Penyempurnaan Tekstur PDP', 'Lookbook Editorial Digital'],
      en: ['Virtual AI Model Synthesis', 'Cosmic Environment Generation', 'PDP Texture Retouching', 'Digital Editorial Lookbook'],
      cn: ['虚拟 AI 模特合成', '宇宙环境背景生成', '详情页材质精修', '数字时尚 Lookbook']
    },
    content: {
      id: {
        overview: 'CONTOURA adalah proyek percontohan yang memindahkan seluruh biaya pemotretan lokasi fisik ke dalam workflow human-led AI production. Kampanye ini dirancang khusus untuk memposisikan lini produk intim & pakaian wanita ke tingkat estetika komersial kelas atas.',
        creativeDirection: 'Konsep penggabungan "Curves & Comfort". Mengawinkan pakaian intim wanita bergaya kontemporer dengan tata cahaya sinematik yang lembut dan pencahayaan studio bersih untuk menonjolkan tekstur kain premium dan kontur tubuh secara presisi.',
        scope: 'Generasi model virtual berbasis etnis lokal, sintesis lingkungan studio 3D, restrukturisasi visual listing produk (PDP), dan optimasi aspek rasio untuk efisiensi penjelajahan layaknya e-commerce global.'
      },
      en: {
        overview: 'CONTOURA is a pilot campaign that replaces traditional physical location shoots with a high-end, human-led AI production workflow, positioning premium intimates and shapewear at an elite commercial level.',
        creativeDirection: 'A conceptual fusion of "Curves & Comfort". We paired modern women intimates with soft cinematic backlighting and clean studio ambient tones to accentuate seamless fabric textures and silhouette contouring.',
        scope: 'Demographically targeted virtual model synthesis, custom 3D studio background generation, PDP listing card optimization, and high-fidelity texture stitching to maintain 100% material integrity.'
      },
      cn: {
        overview: 'CONTOURA 是一项试点活动，它用高端、由人主导的 AI 制作工作流取代了传统的实体外景拍摄，将高档女性贴身衣物定位在精英商业级别。',
        creativeDirection: '“曲线与舒适”的概念融合。我们将现代女性内衣与柔和的电影感逆光和干净的影棚光结合，以突出无缝面料纹理与廓形。',
        scope: '特定人群虚拟模特合成、定制 3D 影棚背景生成、详情页列表卡片优化，以及高保真材质缝合，以保持 100% 的面料真实性。'
      }
    },
    videoUrl: '/work-cards/Starmap/Video.mp4',
    images: Array.from({ length: 30 }, (_, i) => `/work-cards/Starmap/${i + 1}.webp`)
  },
  w2: {
    id: 'w2',
    client: 'Alfas Fragrance',
    year: '2025',
    role: {
      id: 'Fotografer & Desainer Visual Utama',
      en: 'Lead Visual Designer & Photographer',
      cn: '首席视觉设计师与摄影师'
    },
    services: {
      id: ['Sutradara Kampanye', 'Pemodelan Produk 3D', 'Estetika Minimalis'],
      en: ['Campaign Direction', '3D Product Rendering', 'Minimalist Aesthetics'],
      cn: ['战役策略', '3D 产品渲染', '极简美学']
    },
    content: {
      id: {
        overview: 'Pengembangan identitas visual premium untuk peluncuran parfum Alfas, memfokuskan pada kemewahan aroma dan kejernihan botol.',
        creativeDirection: 'Gaya tenang dengan pencahayaan sinematik yang lembut, mengekspresikan kesegaran alami dan keanggunan abadi.',
        scope: 'Desain kemasan digital, visual promosi marketplace, serta aset media sosial beresolusi tinggi.'
      },
      en: {
        overview: 'Premium visual identity development for Alfas Fragrance launch, emphasizing sensory depth and bottle clarity.',
        creativeDirection: 'Immersive low-key styling with soft cinematic lighting, representing natural freshness and timeless elegance.',
        scope: 'Digital packaging assets, e-commerce listing hero cards, and high-fidelity social promotional media.'
      },
      cn: {
        overview: 'Alfas 假发/香氛推出的高端视觉身份开发，强调感官深度和瓶身的清澈度。',
        creativeDirection: '带有柔和电影灯光的沉浸式暗调风格，代表着自然的新鲜感和永恒的优雅。',
        scope: '数字包装资产、电子商务列表英雄卡片以及高保真社交推广媒体。'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=1200&q=90',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&q=90',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&q=90'
    ]
  },
  w3: {
    id: 'w3',
    client: 'Fabil Natural',
    year: '2026',
    role: {
      id: 'Spesialis Visual E-commerce',
      en: 'E-commerce Visual Specialist',
      cn: '电商视觉专家'
    },
    services: {
      id: ['Seni Pengarah PDP', 'Komposisi Bahan Alami', 'Desain Banner'],
      en: ['PDP Art Direction', 'Natural Ingredient Composition', 'Banner Design'],
      cn: ['详情页美术指导', '天然成分构成', '横幅设计']
    },
    content: {
      id: {
        overview: 'Penyusunan visual halaman produk untuk Fabil Natural Skincare, menonjolkan bahan-bahan herbal alami yang murni.',
        creativeDirection: 'Palet warna bumi yang hangat dan organik, dipadukan dengan percikan air segar dan tanaman hijau segar.',
        scope: 'Fotografi makro bahan produk, pembuatan infografis edukatif, serta tata letak komersial marketplace.'
      },
      en: {
        overview: 'Product page visual curation for Fabil Natural Skincare, accentuating pure herbal ingredients and clean beauty.',
        creativeDirection: 'Warm, organic earth-toned color palettes combined with fresh water splashes and crisp botanical props.',
        scope: 'Macro ingredient product photography, educational infographic card design, and marketplace retail layouts.'
      },
      cn: {
        overview: 'Fabil 天然护肤品的产品页面视觉策划，突出纯草本成分和清洁美容。',
        creativeDirection: '温暖、有机的土色调色板，结合新鲜的水花和清脆的植物道具。',
        scope: '宏观成分产品摄影、教育性信息图卡片设计以及商城零售布局。'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1608248597481-496100c80836?w=1200&q=90',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=90',
      'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?w=1200&q=90'
    ]
  },
  w11: {
    id: 'w11',
    client: 'GUSTI. X 草本初色',
    year: '2025',
    role: {
      id: 'Sutradara Kampanye & Pengarah Seni Utama',
      en: 'Campaign Director & Lead Art Director',
      cn: '战役导演与首席艺术指导'
    },
    services: {
      id: ['Strategi Kreatif Visual', 'Sintesis Model Virtual', 'Sutradara Fotografi', 'Desain Tata Letak E-commerce'],
      en: ['Creative Visual Strategy', 'Virtual Model Synthesis', 'Director of Photography', 'E-commerce Layout Design'],
      cn: ['创意视觉策略', '虚拟模特合成', '摄影指导', '电商版面设计']
    },
    content: {
      id: {
        overview: 'Kampanye komersial prestisius "GUSTI. X 草本初色" dirancang khusus untuk merevolusi visual brand pakaian dalam premium. Dengan mengintegrasikan workflow human-led AI production, proyek ini sukses meluncurkan kategori produk baru "山茶花香氛内衣" (Camellia Fragrance Underwear), mencapai rekor penjualan spektakuler di pasar e-commerce global.',
        creativeDirection: 'Mengusung konsep "Dual-Core High Potential Energy". Menggabungkan keindahan alami bahan organik dengan siluet modern beresolusi tinggi, diperkuat oleh pencahayaan studio sinematik kontras tinggi untuk mengekspresikan kemewahan, keanggunan, dan rasa nyaman tanpa batas.',
        scope: 'Art direction menyeluruh, penyuntingan visual presisi tinggi, desain grafis editorial bergaya ZCOOL/Behance, pembuatan infografis pasar komprehensif, dan pengintegrasian media video/gambar panjang kebawah.'
      },
      en: {
        overview: 'The prestigious "GUSTI. X Herb Primary Color" commercial campaign was crafted to revolutionize premium underwear branding. By incorporating a high-end, human-led AI production workflow, we successfully launched the new "Camellia Fragrance Underwear" category, breaking sales records globally.',
        creativeDirection: 'A conceptual execution of "Dual-Core High Potential Energy". We paired organic, clean botanical elegance with high-contrast cinematic studio backlighting and razor-sharp structural silhouettes to express sensory comfort and timeless luxury.',
        scope: 'End-to-end campaign direction, high-fidelity texture/skin retouching, ZCOOL-inspired editorial graphic layouts, comprehensive market insight infographics, and dynamic long-scroll video/image sequences.'
      },
      cn: {
        overview: '“GUSTI. X 草本初色” 高端商业战役专为颠覆传统高端内衣视觉而设计。通过融入由人主导的 AI 生产工作流，成功推出了全新的“山茶花香氛内衣”战略级品类，在各大电商平台创下了惊人的销售新纪录。',
        creativeDirection: '“双核高势能”的概念执行。我们将有机的植物优雅与高对比度的电影影棚逆光相结合，采用锐利的身材轮廓与极其温润的皮肤质感，表达极致的身心愉悦与永恒的奢华感。',
        scope: '端到端战役美术指导、高保真织物与皮肤精修、启发自站酷 (ZCOOL) 的社论排版、完整的市场洞察信息图，以及动态长图视频/图像序列。'
      }
    },
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=90',
      'https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?w=1200&q=90',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=90'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fashion-woman-with-silver-makeup-41611-large.mp4',
    credits: [
      { role: { id: 'Pengarah Gaya Visual Baru', en: 'Brand Visual Stylist', cn: '品牌视觉新督导' }, name: 'Merry / Little Bai' },
      { role: { id: 'Model Fokus Utama', en: 'Lead Focus Model', cn: '焦点模特' }, name: 'Jian / Sanyue' },
      { role: { id: 'Sutradara & Strategi', en: 'Creative Director & Strategist', cn: '创意与战略' }, name: 'GUSTI. Creative' },
      { role: { id: 'Pengarah Fotografi', en: 'Director of Photography', cn: '摄影指导' }, name: 'Jian / Dong' },
      { role: { id: 'Desain Tata Letak & Grafis', en: 'Graphic & Editorial Layout', cn: '插画与版面设计' }, name: 'J&C DESIGN' },
      { role: { id: 'Arsitektur Visual Brand', en: 'Brand System Architect', cn: '品牌体系化模型' }, name: 'Liu wei' },
      { role: { id: 'Perencanaan Strategis', en: 'Brand New Strategy Plan', cn: '品牌新视觉策划' }, name: 'Kenny / Teng Li / DouDou' },
      { role: { id: 'Komunikasi Proyek', en: 'Project Communication', cn: '项目沟通' }, name: 'Lori' },
      { role: { id: 'Sutradara Pasca Produksi', en: 'Post-Production Lead', cn: '视觉中心' }, name: 'Bolun / YongKang / YongBo' },
      { role: { id: 'Seni Efek & Motion', en: 'Visual Effects & Motion', cn: '影视美术' }, name: 'QianHang' }
    ],
    mediaList: [
      {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90',
        type: 'image',
        aspectRatio: 'aspect-[3/5]',
        caption: {
          id: 'POSTER KAMPANYE EDITORIAL UTAMA - DUA MODEL VIRTUAL',
          en: 'MAIN EDITORIAL CAMPAIGN POSTER - TWO VIRTUAL MODELS',
          cn: '主战役海报 - 双虚拟模特视觉'
        },
        subText: {
          id: 'Model virtual dikembangkan khusus dengan karakteristik wajah unik, menyatu sempurna dengan gaun fungsional premium.',
          en: 'Custom-designed virtual models with high-fashion bone structure, perfectly paired with functional luxury outerwear.',
          cn: '定制研发的高级脸虚拟模特，完美契合高端功能性外套的外形要求。'
        }
      },
      {
        url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=90',
        type: 'image',
        aspectRatio: 'aspect-[3/4]',
        caption: {
          id: 'DETAIL STRUKTUR SERAT & LIPATAN BAHAN',
          en: 'MATERIAL FIBER STRUCTURE & SEAM WORK DETAIL',
          cn: '材质纤维结构与缝线细节精修'
        },
        subText: {
          id: 'Menunjukkan presisi jahitan dan pantulan cahaya alami dari kain camellia-infused.',
          en: 'Highlighting physical stitching precision and natural highlights on organic camellia-infused textiles.',
          cn: '展示有机山茶花注入织物的物理缝线精度和自然高光。'
        }
      },
      {
        url: 'https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?w=1200&q=90',
        type: 'image',
        aspectRatio: 'aspect-video',
        caption: {
          id: 'PRODUK DALAM SITUASI AKTIF / OLAHRAGA RINGAN',
          en: 'PRODUCT IN ACTIVE MOTION / LIGHT ATHLETIC CONTEXT',
          cn: '产品在动态运动 / 轻度体育运动场景'
        },
        subText: {
          id: 'Pembuktian fleksibilitas ergonomis pakaian dalam dalam pemakaian sehari-hari.',
          en: 'Demonstrating ergonomic flexibility and absolute fit during active physical motion.',
          cn: '展示在积极身体运动中的人体工学灵活性与绝对贴合度。'
        }
      }
    ]
  }
};

// Generates generic but highly realistic fallback details for items not explicitly configured above
export function getProjectDetail(id: string, defaultTitle: string, defaultTags: string[]): DetailedProject {
  if (detailedProjectsData[id]) {
    return detailedProjectsData[id];
  }

  // Fallback high-quality photos depending on tags
  const isFashion = defaultTags.includes('fashion') || defaultTags.includes('apparel') || defaultTags.includes('eyewear');
  const isBeauty = defaultTags.includes('beauty') || defaultTags.includes('skincare');
  const isSports = defaultTags.includes('sports');

  let fallbackImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=90',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=90'
  ];

  if (isFashion) {
    fallbackImages = [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=90',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=90'
    ];
  } else if (isBeauty) {
    fallbackImages = [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=90',
      'https://images.unsplash.com/photo-1608248597481-496100c80836?w=1200&q=90',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=90'
    ];
  } else if (isSports) {
    fallbackImages = [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&q=90',
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=90',
      'https://images.unsplash.com/photo-1502904581546-24b33d46f903?w=1200&q=90'
    ];
  }

  return {
    id,
    client: defaultTitle,
    year: '2026',
    role: {
      id: 'Fotografer & Pengarah Seni Visual',
      en: 'Lead Visual & Art Director',
      cn: '首席视觉与艺术指导'
    },
    services: {
      id: ['Pengarahan Seni', 'Fotografi Produk AI', 'Visual E-commerce'],
      en: ['Art Direction', 'AI Product Photography', 'E-commerce Visuals'],
      cn: ['艺术指导', 'AI 产品摄影', '电商视觉设计']
    },
    content: {
      id: {
        overview: `Kampanye representasi visual premium untuk ${defaultTitle}, meningkatkan konversi penjualan dan nilai brand secara digital.`,
        creativeDirection: 'Menggabungkan komposisi modern, elemen warna harmonis, dan pencahayaan dinamis untuk daya tarik maksimal.',
        scope: 'Produksi aset kreatif secara terpadu, retouching visual, dan penataan tata letak visual halaman produk.'
      },
      en: {
        overview: `Premium visual campaign for ${defaultTitle}, strategically crafted to lift conversion rates and elevate brand positioning.`,
        creativeDirection: 'Combining contemporary clean framing, harmonious color stories, and dynamic contrast styling for ultimate shelf impact.',
        scope: 'End-to-end photoshoot management, professional-grade visual post-production, and product list page assets design.'
      },
      cn: {
        overview: `为 ${defaultTitle} 倾力打造的高端视觉活动，旨在提升数字化销售转化率与品牌定位。`,
        creativeDirection: '将当代干净的构图、和谐的色彩故事和动感对比造型相结合，以产生极致的货架和视觉冲击力。',
        scope: '端到端创意资产策划、高保真视觉后处理和产品显示页面设计。'
      }
    },
    images: fallbackImages
  };
}
