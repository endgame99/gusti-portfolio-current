import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language, Theme } from '../types/content';

function useSettingsState() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); }, [theme]);
  return { lang, setLang, theme, setTheme, searchQuery, setSearchQuery, isSidebarExpanded, setIsSidebarExpanded };
}
const SiteSettings = createContext<ReturnType<typeof useSettingsState> | null>(null);
export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  return <SiteSettings.Provider value={useSettingsState()}>{children}</SiteSettings.Provider>;
}
export function useSiteSettings() {
  const settings = useContext(SiteSettings);
  if (!settings) throw new Error('SiteSettingsProvider is required');
  return settings;
}
