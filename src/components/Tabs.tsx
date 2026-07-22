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
            className={`py-2 type-tab tracking-wide whitespace-nowrap transition-colors relative ${
              activeTab === tab.id
                ? 'text-neutral-950 dark:text-white font-bold'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-950 dark:bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
