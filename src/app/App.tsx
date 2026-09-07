import { AppShell } from '../components/layout/AppShell';
import { useSiteSettings } from './SiteSettings';
import { mainNavUrl, type ActiveNav, type ActiveTab } from './navigation';
import React, { useState, useEffect } from 'react';
import type { WorkItem } from '../types/content';
import { worksData } from '../content/projects/works';
import { libraryData } from '../content/library/entries';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { ContentTabs } from '../components/layout/ContentTabs';
import { WorkGrid } from '../components/work/WorkGrid';
import { ServicesPage } from '../pages/ServicesPage';
import { LibraryPage } from '../pages/LibraryPage';

import { ProjectPage } from '../pages/ProjectPage';
import { PdpVisualsPage } from '../pages/services/PdpVisualsPage';
import { MarketplaceDisplayPage } from '../pages/services/MarketplaceDisplayPage';
import { dictionary } from '../content/translations';


function getTabFromUrl(): ActiveTab {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab');
  if (tab === 'services' || tab === 'library') return tab;
  return 'recommended';
}

function getNavFromUrl(): ActiveNav {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab');
  if (tab === 'services' || tab === 'library') return tab;
  if (tab === 'recommended') return 'work';
  return 'home';
}

function pushMainNavUrl(nav: ActiveNav) {
  const nextPath = mainNavUrl(nav);
  const currentPath = `${window.location.pathname}${window.location.search}`;
  if (currentPath !== nextPath) {
    window.history.pushState(null, '', nextPath);
  }
}

export default function App() {
  // Destination components share AppShell and SiteSettingsProvider.
  const pathname = window.location.pathname;
  if (pathname === '/services/pdp-visuals') {
    return <PdpVisualsPage />;
  }
  if (pathname === '/services/marketplace-display') {
    return <MarketplaceDisplayPage />;
  }

  return <PortfolioPage />;
}

function PortfolioPage() {
  const { lang, searchQuery } = useSiteSettings();

  // Initialize tab/nav from URL query parameters
  const [activeTab, setActiveTab] = useState<ActiveTab>(() => getTabFromUrl());

  const [activeNav, setActiveNav] = useState<ActiveNav>(() => getNavFromUrl());

  const [activeProject, setActiveProject] = useState<WorkItem | null>(null);

  // Sync tab clicks on the webpage with the sidebar activeNav
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    setActiveProject(null);
    if (tab === 'recommended') {
      setActiveNav('work');
      pushMainNavUrl('work');
    } else {
      setActiveNav(tab);
      pushMainNavUrl(tab);
    }
  };

  // Clear active project when typing in search
  useEffect(() => {
    if (searchQuery) {
      setActiveProject(null);
    }
  }, [searchQuery]);

  useEffect(() => {
    const syncStateFromHistory = () => {
      setActiveTab(getTabFromUrl());
      setActiveNav(getNavFromUrl());
      setActiveProject(null);
    };

    window.addEventListener('popstate', syncStateFromHistory);
    return () => window.removeEventListener('popstate', syncStateFromHistory);
  }, []);

  const navigate = (nav: ActiveNav) => {
    setActiveNav(nav);
    setActiveTab(nav === 'home' || nav === 'work' ? 'recommended' : nav);
    setActiveProject(null);
    pushMainNavUrl(nav);
    if (nav === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    if (nav === 'work') document.getElementById('navigation-tabs')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <AppShell activeNav={activeNav} onNavigate={navigate}>
          {activeProject ? (
            <ProjectPage
              work={activeProject}
              lang={lang}
              onBack={() => setActiveProject(null)}
            />
          ) : (
            <>
              {!searchQuery && activeTab !== 'services' && (
                <div className="heroSection mb-8 md:mb-12 pt-4 sm:pt-6">
                  <HeroCarousel />
                </div>
              )}

              <div id="navigation-tabs" className="tabsRow sticky top-14 z-20 bg-white dark:bg-[#121212] pt-3 pb-1">
                 <ContentTabs activeTab={activeTab} onTabChange={handleTabChange} lang={lang} />
              </div>

              <div className="workSection mt-6 md:mt-8">
                {(!searchQuery && activeTab === 'recommended') && (
                  <WorkGrid
                    lang={lang}
                    works={worksData}
                    onAssetClick={setActiveProject}
                    onProjectClick={setActiveProject}
                    searchQuery={searchQuery}
                  />
                )}

                {(!searchQuery && activeTab === 'services') && (
                  <ServicesPage searchQuery={searchQuery} />
                )}

                {(!searchQuery && activeTab === 'library') && (
                  <LibraryPage items={libraryData} searchQuery={searchQuery} />
                )}

                {/* Display all matching content when searching regardless of tabs */}
                {searchQuery && (
                  <div className="space-y-12 mt-8">
                     <div>
                        <h3 className="type-heading-md font-bold mb-3">{dictionary[lang].tab_recommended}</h3>
                        <WorkGrid
                          lang={lang}
                          works={worksData}
                          onAssetClick={setActiveProject}
                          onProjectClick={setActiveProject}
                          searchQuery={searchQuery}
                        />
                     </div>
                     <div className="border-t border-neutral-100 dark:border-neutral-800/50 pt-6">
                        <h3 className="type-heading-md font-bold mb-3">{dictionary[lang].tab_services}</h3>
                        <ServicesPage searchQuery={searchQuery} />
                     </div>
                     <div className="border-t border-neutral-100 dark:border-neutral-800/50 pt-6">
                        <h3 className="type-heading-md font-bold mb-3">{dictionary[lang].tab_library}</h3>
                        <LibraryPage items={libraryData} searchQuery={searchQuery} />
                     </div>
                  </div>
                )}
              </div>


            </>
          )}
    </AppShell>
  );
}
