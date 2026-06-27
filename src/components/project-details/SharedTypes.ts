import { Language, WorkItem } from '../../types';
import { DetailedProject } from '../../data/projectDetails';
import { WHATSAPP_LINK } from '../../data';

export interface ProjectDetailPageProps {
  work: WorkItem;
  lang: Language;
  detail: DetailedProject;
  onBack: () => void;
}

export function getLabel(key: string, lang: Language): string {
  const labels: Record<string, Record<Language, string>> = {
    back: {
      id: 'Kembali ke Galeri',
      en: 'Back to Works',
      cn: '返回作品集'
    },
    client: {
      id: 'Klien Brand',
      en: 'Brand Client',
      cn: '合作客户'
    },
    year: {
      id: 'Tahun Rilis',
      en: 'Release Year',
      cn: '发布年度'
    },
    role: {
      id: 'Peran Utama Gusti',
      en: 'Gusti\'s Core Role',
      cn: 'Gusti 核心角色'
    },
    services: {
      id: 'Spesialisasi Terapan',
      en: 'Applied Specialties',
      cn: '应用专业领域'
    },
    overview: {
      id: 'Abstraksi Strategi',
      en: 'Strategic Brief',
      cn: '战略简述'
    },
    direction: {
      id: 'Konsep Kreatif',
      en: 'Creative Direction',
      cn: '创意方向'
    },
    scope: {
      id: 'Lingkup Delivery',
      en: 'Scope of Delivery',
      cn: '交付工作范围'
    },
    interest: {
      id: 'Butuh Visual Sekelas Ini?',
      en: 'Ready for High-End Assets?',
      cn: '需要此等级的商业视觉吗？'
    },
    chat_gusti: {
      id: 'Mulai Scoping Project Beserta Anggaran',
      en: 'Initiate Scoping & Production Quotation',
      cn: '开始项目策划与商业报价讨论'
    }
  };
  return labels[key]?.[lang] || labels[key]?.['en'] || '';
}

export function getCustomWhatsAppLink(work: WorkItem, lang: Language): string {
  let baseUrl = 'https://wa.me/6200000000000';
  if (WHATSAPP_LINK) {
    const match = WHATSAPP_LINK.match(/https:\/\/wa\.me\/([0-9]+)/);
    if (match && match[1]) {
      baseUrl = `https://wa.me/${match[1]}`;
    }
  }
  const text = encodeURIComponent(
    lang === 'id' 
      ? `Halo Gusti, saya tertarik dengan project "${work.title}" (${work.label}). Bisa bantu saya membuat visual serupa untuk produk saya?`
      : lang === 'cn'
      ? `您好 Gusti，我对您的项目 "${work.title}" (${work.label}) 非常感兴趣。您能帮我的品牌制作类似的视觉资产吗？`
      : `Hello Gusti, I am interested in your project "${work.title}" (${work.label}). Can you help me produce similar visual assets for my product?`
  );
  return `${baseUrl}?text=${text}`;
}
