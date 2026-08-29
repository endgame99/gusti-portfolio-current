import type { Dispatch, SetStateAction } from "react";
import {
  Home,
  LayoutGrid,
  Layers,
  Bookmark,
  MessageCircle,
  PanelLeftClose,
} from "lucide-react";

type ActiveTab = "recommended" | "services" | "library";
type ActiveNav = "home" | "work" | "services" | "library";

type GustiSidebarProps = {
  activeNav: ActiveNav;
  setActiveNav: (nav: ActiveNav) => void;
  setActiveTab: (tab: ActiveTab) => void;
  isSidebarExpanded: boolean;
  setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>;
  whatsappUrl: string;
  onHomeClick?: () => void;
  onWorkClick?: () => void;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function GustiSidebar({
  activeNav,
  setActiveNav,
  setActiveTab,
  isSidebarExpanded,
  setIsSidebarExpanded,
  whatsappUrl,
  onHomeClick,
  onWorkClick,
}: GustiSidebarProps) {
  const goHome = () => {
    setActiveNav("home");
    setActiveTab("recommended");
    if (onHomeClick) onHomeClick();

    if (window.location.pathname !== "/") {
      window.location.href = "/";
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    {
      id: "home" as const,
      label: "Home",
      icon: Home,
      action: goHome,
      isActive: activeNav === "home",
    },
    {
      id: "work" as const,
      label: "Work",
      icon: LayoutGrid,
      action: () => {
        setActiveTab("recommended");
        setActiveNav("work");
        if (onWorkClick) onWorkClick();
      },
      isActive: activeNav === "work",
    },
    {
      id: "services" as const,
      label: "Services",
      icon: Layers,
      action: () => {
        setActiveTab("services");
        setActiveNav("services");
      },
      isActive: activeNav === "services",
    },
    {
      id: "library" as const,
      label: "Library",
      icon: Bookmark,
      action: () => {
        setActiveTab("library");
        setActiveNav("library");
      },
      isActive: activeNav === "library",
    },
  ];

  return (
    <>
      {/* Desktop Sidebar (Compact 44px by default, Expandable to 160px) */}
      <aside
        className={cx(
          "sidebar hidden md:flex md:flex-col shadow-[1px_0_10px_rgba(0,0,0,0.02)] dark:shadow-[1px_0_10px_rgba(0,0,0,0.2)] select-none",
          isSidebarExpanded ? "sidebarExpanded" : "sidebarCompact"
        )}
      >
        {/* Sidebar Header */}
        {isSidebarExpanded ? (
          <div className="sidebarHeaderExpanded flex h-12 w-full items-center justify-between px-3">
            <div className="sidebarLogoExpanded font-display type-display-md tracking-[-0.04em] text-neutral-950 dark:text-white">
              GUSTI.
            </div>

            <button
              type="button"
              className="sidebarCloseButton flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white transition"
              aria-label="Tutup sidebar"
              onClick={() => setIsSidebarExpanded(false)}
            >
              <PanelLeftClose size={18} />
            </button>
          </div>
        ) : (
          <div className="flex h-12 w-full items-center justify-center">
            <button
              type="button"
              className="sidebarLogoCompact flex h-8 w-8 items-center justify-center rounded-xl text-neutral-950 dark:text-white transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Buka sidebar"
              onClick={() => setIsSidebarExpanded(true)}
            >
              <span className="font-display type-display-md tracking-[-0.04em]">G</span>
            </button>
          </div>
        )}

        {/* Navigation Items */}
        <nav className={cx("sidebarNav flex flex-1 flex-col gap-2 pt-3 w-full", isSidebarExpanded ? "px-2.5" : "px-1.5 items-center")}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.isActive;

            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className={cx(
                  "group relative flex items-center rounded-xl transition type-nav font-semibold",
                  isSidebarExpanded ? "w-full h-9 gap-3 px-2.5 justify-start" : "w-8 h-8 justify-center mx-auto",
                  isActive
                    ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                )}
                aria-label={item.label}
              >
                <Icon size={18} strokeWidth={2.0} className="shrink-0" />

                <span className="sidebarLabel truncate">{item.label}</span>

                {/* Hover Tooltip when compact */}
                {!isSidebarExpanded && (
                  <span className="pointer-events-none absolute left-[48px] top-1/2 z-[120] -translate-y-1/2 whitespace-nowrap rounded-lg bg-neutral-950 px-2 py-1 type-label-sm font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 dark:bg-white dark:text-neutral-950">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={cx(
              "group relative mt-auto mb-4 flex items-center rounded-xl type-nav font-semibold text-neutral-500 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-neutral-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              isSidebarExpanded ? "w-full h-9 gap-3 px-2.5 justify-start" : "w-8 h-8 justify-center mx-auto"
            )}
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} strokeWidth={2.0} className="shrink-0" />

            <span className="sidebarLabel truncate">WhatsApp</span>

            {!isSidebarExpanded && (
              <span className="pointer-events-none absolute left-[48px] top-1/2 z-[120] -translate-y-1/2 whitespace-nowrap rounded-lg bg-neutral-950 px-2 py-1 type-label-sm font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 dark:bg-white dark:text-neutral-950">
                WhatsApp
              </span>
            )}
          </a>
        </nav>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] flex h-[58px] items-center justify-around border-t border-neutral-100 bg-white/95 px-2 pb-safe shadow-[0_-4px_16px_rgba(0,0,0,0.03)] backdrop-blur-md dark:border-neutral-800/80 dark:bg-[#121212]/95 md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.isActive;

          return (
            <button
              key={item.id}
              type="button"
              onClick={item.action}
              className={cx(
                "flex h-full flex-1 flex-col items-center justify-center gap-1 transition",
                isActive
                  ? "text-neutral-950 dark:text-white"
                  : "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-400"
              )}
            >
              <Icon size={18} strokeWidth={2.0} />
              <span className="type-label-sm font-semibold tracking-wide">{item.label}</span>
            </button>
          );
        })}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-neutral-400 hover:text-emerald-600 dark:text-neutral-500 dark:hover:text-emerald-400 transition"
        >
          <MessageCircle size={18} strokeWidth={2.0} />
          <span className="type-label-sm font-semibold tracking-wide">WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
