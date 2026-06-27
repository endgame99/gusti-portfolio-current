import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Language, WorkItem } from '../types';
import { dictionary } from '../i18n';

interface CaseStudyModalProps {
  work: WorkItem | null;
  onClose: () => void;
  lang: Language;
}

export function CaseStudyModal({ work, onClose, lang }: CaseStudyModalProps) {
  if (!work) return null;
  const d = dictionary[lang];

  return (
    <div className="fixed inset-0 z-50 flex flex-col md:items-center justify-center bg-black/80 p-0 md:p-4 backdrop-blur-md">
      <div className="w-full h-full md:h-auto md:max-w-3xl bg-white dark:bg-[#121212] md:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-neutral-200 dark:border-neutral-800">
        
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white dark:bg-[#121212] z-10">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{work.title}</h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{d.case_study}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col items-center justify-center text-center">
           <div className="w-24 h-24 mb-6 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
              <ExternalLink className="w-8 h-8 text-neutral-400" />
           </div>
           <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{work.title}</h3>
           <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-sm">
             {d.case_study_coming_soon}
           </p>
           
           <img 
            src={work.image} 
            alt={work.title} 
            className="w-full max-w-md rounded-xl object-cover shadow-lg border border-neutral-200 dark:border-neutral-800 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />

           <button onClick={onClose} className="mt-10 px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
             Close Preview
           </button>
        </div>

      </div>
    </div>
  );
}
