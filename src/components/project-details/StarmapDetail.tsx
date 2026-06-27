import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProjectDetailPageProps, getLabel } from './SharedTypes';

// STARMAP detail page intentionally cleared. Awaiting new visual reference.

export function StarmapDetail({ work, lang, detail, onBack }: ProjectDetailPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [work.id]);

  return (
    <div
      id={`project-detail-${work.id}`}
      className="w-full min-h-screen bg-white dark:bg-[#121212] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 pb-20 relative font-sans"
    >
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-12">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-400 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200 transition-all duration-300 pb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>{getLabel('back', lang)}</span>
        </button>
      </div>
    </div>
  );
}
