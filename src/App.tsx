import React, { useState, useEffect } from 'react';
import { Language, Theme, WorkItem } from './types';
import { worksData, servicesData, libraryData, WHATSAPP_LINK } from './data';
import { GustiSidebar } from './components/GustiSidebar';
import { GustiTopHeader } from './components/GustiTopHeader';
import { Home, Flame, Layers, Bookmark, MessageCircle, Globe2, Download } from 'lucide-react';
import { HeroCarousel } from './components/HeroCarousel';
import { Tabs } from './components/Tabs';
import { RecommendedWorks } from './components/RecommendedWorks';
import { Services } from './components/Services';
import { Library } from './components/Library';

import { ProjectDetail } from './components/ProjectDetail';
import { PdpVisualsPage } from './components/services/PdpVisualsPage';
import { MarketplaceDisplayPage } from './components/services/MarketplaceDisplayPage';
import { dictionary } from './i18n';

export default function App() {
  // Standalone service pages — rendered without the main app shell
  const pathname = window.location.pathname;
  if (pathname === '/services/pdp-visuals') {
    return <PdpVisualsPage />;
  }
  if (pathname === '/services/marketplace-display') {
    return <MarketplaceDisplayPage />;
  }

  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');
  
  // Initialize tab/nav from URL query parameters
  const [activeTab, setActiveTab] = useState<'recommended' | 'services' | 'library'>(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab === 'services' || tab === 'library') return tab;
    return 'recommended';
  });
  
  const [activeNav, setActiveNav] = useState<'home' | 'work' | 'services' | 'library'>(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab === 'services' || tab === 'library') return tab as any;
    if (tab === 'recommended') return 'work';
    return 'home';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const [activeProject, setActiveProject] = useState<WorkItem | null>(null);

  // Sync tab clicks on the webpage with the sidebar activeNav
  const handleTabChange = (tab: 'recommended' | 'services' | 'library') => {
    setActiveTab(tab);
    setActiveProject(null);
    if (tab === 'recommended') {
      setActiveNav('work');
    } else {
      setActiveNav(tab as any);
    }
  };

  // Sync theme to root class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Clear active project when typing in search
  useEffect(() => {
    if (searchQuery) {
      setActiveProject(null);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-neutral-900 dark:text-white font-sans transition-colors duration-300 flex">
      
      <GustiSidebar 
        activeNav={activeNav} 
        setActiveNav={(nav) => {
          setActiveNav(nav);
          setActiveProject(null);
        }}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setActiveProject(null);
        }} 
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        whatsappUrl={WHATSAPP_LINK}
        onHomeClick={() => {
          setActiveProject(null);
        }}
        onWorkClick={() => {
          setActiveProject(null);
          const element = document.getElementById("navigation-tabs");
          if (element) {
            const yOffset = -48; // top-12 header offset
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
      />

      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${sidebarCollapsed ? 'md:pl-[56px]' : 'md:pl-[164px]'}`}>
        <GustiTopHeader 
          collapsed={sidebarCollapsed}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          theme={theme}
          setTheme={setTheme}
          language={lang.toUpperCase() as "ID" | "EN" | "CN"}
          setLanguage={(l) => setLang(l.toLowerCase() as Language)}
          whatsappUrl={WHATSAPP_LINK}
        />

        <main className="px-4 sm:px-6 lg:px-[clamp(1rem,4vw,3.5rem)] w-full max-w-[1400px] mx-auto pb-24 md:pb-12 pt-16">
          {activeProject ? (
            <ProjectDetail 
              work={activeProject} 
              lang={lang} 
              onBack={() => setActiveProject(null)} 
            />
          ) : (
            <>
              {!searchQuery && (
                <div className="mb-6 sm:mb-8">
                  <HeroCarousel works={worksData} onSlideClick={setActiveProject} />
                </div>
              )}

              <div id="navigation-tabs" className="sticky top-12 z-20 bg-white dark:bg-[#121212] pt-3 pb-1">
                 <Tabs activeTab={activeTab} onTabChange={handleTabChange} lang={lang} />
              </div>

              <div className="mt-4 sm:mt-6">
                {(!searchQuery && activeTab === 'recommended') && (
                  <RecommendedWorks 
                    lang={lang} 
                    works={worksData} 
                    onAssetClick={setActiveProject} 
                    onProjectClick={setActiveProject}
                    searchQuery={searchQuery}
                  />
                )}
                
                {(!searchQuery && activeTab === 'services') && (
                  <Services lang={lang} services={servicesData} searchQuery={searchQuery} />
                )}

                {(!searchQuery && activeTab === 'library') && (
                  <Library lang={lang} items={libraryData} searchQuery={searchQuery} />
                )}

                {/* Display all matching content when searching regardless of tabs */}
                {searchQuery && (
                  <div className="space-y-10 mt-6">
                     <div>
                        <h3 className="text-sm font-bold mb-3">{dictionary[lang].tab_recommended}</h3>
                        <RecommendedWorks 
                          lang={lang} 
                          works={worksData} 
                          onAssetClick={setActiveProject} 
                          onProjectClick={setActiveProject}
                          searchQuery={searchQuery}
                        />
                     </div>
                     <div className="border-t border-neutral-100 dark:border-neutral-800/50 pt-6">
                        <h3 className="text-sm font-bold mb-3">{dictionary[lang].tab_services}</h3>
                        <Services lang={lang} services={servicesData} searchQuery={searchQuery} />
                     </div>
                     <div className="border-t border-neutral-100 dark:border-neutral-800/50 pt-6">
                        <h3 className="text-sm font-bold mb-3">{dictionary[lang].tab_library}</h3>
                        <Library lang={lang} items={libraryData} searchQuery={searchQuery} />
                     </div>
                  </div>
                )}
              </div>


            </>
          )}
        </main>
      </div>
    </div>
  );
}
