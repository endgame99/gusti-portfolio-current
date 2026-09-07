import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useSiteSettings } from '../../app/SiteSettings';
import { mainNavUrl, type ActiveNav } from '../../app/navigation';
import { WHATSAPP_LINK } from '../../content/site';
import type { Language } from '../../types/content';

export function AppShell({ children, activeNav, onNavigate, internal = false }: {
  children: ReactNode; activeNav: ActiveNav; onNavigate?: (nav: ActiveNav) => void; internal?: boolean;
}) {
  const { lang, setLang, theme, setTheme, searchQuery, setSearchQuery, isSidebarExpanded, setIsSidebarExpanded } = useSiteSettings();
  const header = <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} theme={theme} setTheme={setTheme} language={lang.toUpperCase() as 'ID' | 'EN' | 'CN'} setLanguage={value => setLang(value.toLowerCase() as Language)} whatsappUrl={WHATSAPP_LINK} />;
  const sidebar = <Sidebar activeNav={activeNav} onNavigate={onNavigate ?? (nav => { window.location.href = mainNavUrl(nav); })} isSidebarExpanded={isSidebarExpanded} setIsSidebarExpanded={setIsSidebarExpanded} whatsappUrl={WHATSAPP_LINK} />;
  const offset = isSidebarExpanded ? 'md:pl-[160px]' : 'md:pl-[44px]';
  return (
    <div className="appShell min-h-screen bg-white dark:bg-[#121212] text-neutral-900 dark:text-white font-sans transition-colors duration-300 flex">
      {sidebar}
      {internal ? (
        <div className={`flex-1 flex flex-col min-w-0 transition-all duration-200 ${offset}`}>
          {header}<main className="pageContainer internalPageTop page-bottom-pb">{children}</main>
        </div>
      ) : (
        <main className={`mainArea flex-1 flex flex-col min-w-0 transition-all duration-200 ${offset}`}>
          <div className="pageContainer page-bottom-pb">{header}{children}</div>
        </main>
      )}
    </div>
  );
}
