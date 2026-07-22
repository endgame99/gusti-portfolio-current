import {
  Home,
  Flame,
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
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
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
  collapsed,
  setCollapsed,
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
      icon: Flame,
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
      <aside
        className={cx(
          "fixed left-0 top-0 bottom-0 z-[100] hidden bg-white transition-all duration-300 dark:bg-[#121212] md:flex md:flex-col shadow-[1px_0_10px_rgba(0,0,0,0.02)] dark:shadow-[1px_0_10px_rgba(0,0,0,0.2)]",
          collapsed ? "w-[56px]" : "w-[164px]"
        )}
      >
        <div
          className={cx(
            "flex h-12 items-center px-2",
            collapsed ? "justify-center" : "justify-between"
          )}
        >
          {collapsed ? (
            /* When collapsed, G mark is the expand toggle */
            <button
              type="button"
              onClick={() => setCollapsed(false)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-950 transition hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
              aria-label="Expand sidebar"
            >
              <span className="text-[13px] font-black tracking-[-0.06em]">G</span>
            </button>
          ) : (
            /* When expanded, GUSTI. is the Home button and there is a collapse button */
            <>
              <button
                type="button"
                onClick={goHome}
                className="flex h-9 items-center justify-center rounded-xl text-neutral-950 transition hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 px-2"
                aria-label="Go to home"
              >
                <span className="font-display text-[15px] font-extrabold tracking-[-0.04em]">GUSTI.</span>
              </button>

              <button
                type="button"
                onClick={() => setCollapsed(true)}
                className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                aria-label="Collapse sidebar"
              >
                <PanelLeftClose size={17} />
              </button>
            </>
          )}
        </div>

        <nav
          className={cx(
            "flex flex-1 flex-col gap-2 px-2 pt-4"
          )}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.isActive;

            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className={cx(
                  "group relative flex h-10 items-center rounded-xl type-nav transition",
                  collapsed ? "w-10 justify-center" : "w-full gap-3 px-3",
                  isActive
                    ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                )}
              >
                <Icon size={18} strokeWidth={2.2} />

                {!collapsed && <span>{item.label}</span>}

                {collapsed && (
                  <span className="pointer-events-none absolute left-[46px] top-1/2 z-[120] -translate-y-1/2 whitespace-nowrap rounded-lg bg-neutral-950 px-2 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 dark:bg-white dark:text-neutral-950">
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
              "group relative mt-auto mb-4 flex h-10 items-center rounded-xl text-[13px] font-semibold text-neutral-500 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-neutral-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
              collapsed ? "w-10 justify-center" : "w-full gap-3 px-3"
            )}
          >
            <MessageCircle size={18} strokeWidth={2.2} />

            {!collapsed && <span>WhatsApp</span>}

            {collapsed && (
              <span className="pointer-events-none absolute left-[46px] top-1/2 z-[120] -translate-y-1/2 whitespace-nowrap rounded-lg bg-neutral-950 px-2 py-1 text-[11px] font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 dark:bg-white dark:text-neutral-950">
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
                "flex h-full flex-1 flex-col items-center justify-center gap-1 text-[10px] font-bold transition",
                isActive
                  ? "text-neutral-950 dark:text-white"
                  : "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-400"
              )}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2.0} />
              <span className="type-label-xs tracking-wide">{item.label}</span>
            </button>
          );
        })}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-[10px] font-bold text-neutral-400 hover:text-emerald-600 dark:text-neutral-500 dark:hover:text-emerald-400 transition"
        >
          <MessageCircle size={18} strokeWidth={2.0} />
          <span className="text-[9px] tracking-wide">WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
