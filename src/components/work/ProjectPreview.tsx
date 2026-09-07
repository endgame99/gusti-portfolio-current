import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Language, WorkItem } from '../../types/content';
import { getCustomWhatsAppLink, getLabel } from './projectHelpers';

export function ProjectPreview({ work, lang, onBack }: { work: WorkItem; lang: Language; onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, [work.id]);
  return (
    <article id={`project-detail-${work.id}`} className="detail-container internalPageTop page-bottom-pb space-y-8">
      <button type="button" onClick={onBack} className="inline-flex items-center gap-2 type-label-md"><ArrowLeft size={16} />{getLabel('back', lang)}</button>
      <div><h1 className="type-display-xl">{work.title}</h1><p className="mt-3 type-body-md text-neutral-500">{work.label}</p></div>
      <img src={work.image} alt={work.title} className="w-full rounded-xl" />
      <a href={getCustomWhatsAppLink(work, lang)} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-neutral-950 px-5 py-3 type-label-md text-white dark:bg-white dark:text-neutral-950">{lang === 'id' ? 'Kirim Pesan' : 'Message'}</a>
    </article>
  );
}
