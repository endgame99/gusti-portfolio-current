import React from 'react';
import { Language } from '../types';
import { dictionary } from '../i18n';

interface TabsProps {
  activeTab: 'recommended' | 'services' | 'library';
  onTabChange: (tab: 'recommended' | 'services' | 'library') => void;
  lang: Language;
}

export function Tabs({ activeTab, onTabChange, lang }: TabsProps) {
  const d = dictionary[lang];

  const tabs = [
    { id: 'recommended', label: d.tab_recommended },
    { id: 'services', label: d.tab_services },
    { id: 'library', label: d.tab_library },
  ] as const;

  return (
    <div className="flex flex-col border-b border-neutral-100 dark:border-neutral-800/50">
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pt-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-2 text-[15px] font-bold whitespace-nowrap transition-colors relative ${
              activeTab === tab.id
                ? 'text-neutral-900 dark:text-white'
                : 'text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-white rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
