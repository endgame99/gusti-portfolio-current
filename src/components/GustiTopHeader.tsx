import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Moon,
  Sun,
  Globe2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { SOCIAL_LINKS } from "../data";

type ThemeMode = "light" | "dark";
type LanguageMode = "ID" | "EN" | "CN";

type GustiTopHeaderProps = {
  collapsed: boolean;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  theme: ThemeMode;
  setTheme: (value: ThemeMode) => void;
  language: LanguageMode;
  setLanguage: (value: LanguageMode) => void;
  whatsappUrl: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function GustiTopHeader({
  collapsed,
  searchQuery,
  setSearchQuery,
  theme,
  setTheme,
  language,
  setLanguage,
  whatsappUrl,
}: GustiTopHeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false);

  const nextLanguage = () => {
    if (language === "ID") setLanguage("EN");
    else if (language === "EN") setLanguage("CN");
    else setLanguage("ID");
  };

  return (
    <header
      className={cx(
        "fixed top-0 right-0 z-[90] flex h-12 items-center bg-white/95 backdrop-blur-md transition-all duration-300 dark:bg-[#121212]/95",
        collapsed ? "left-0 md:left-[56px]" : "left-0 md:left-[164px]"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-[clamp(1rem,4vw,3.5rem)] flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center">
          <div className="relative flex h-8 w-40 xs:w-52 sm:w-64 md:w-72 lg:w-80 items-center rounded-full bg-neutral-100 dark:bg-neutral-900 transition-all duration-300">
            <Search size={13} className="absolute left-3 text-neutral-400 pointer-events-none" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search..."
              className="h-full w-full rounded-full bg-transparent pl-8 pr-3 text-xs font-medium text-neutral-800 outline-none placeholder:text-neutral-400 dark:text-white dark:placeholder:text-neutral-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-8 items-center rounded-full bg-neutral-950 px-4 type-label-sm font-bold text-white transition hover:scale-[1.03] active:scale-95 dark:bg-white dark:text-neutral-950"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white overflow-hidden"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -12, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 12, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <button
            type="button"
            onClick={nextLanguage}
            className="hidden h-8 items-center gap-1 rounded-full px-2 type-label-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white sm:flex"
            aria-label="Change language"
          >
            <Globe2 size={13} />
            {language}
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((value) => !value)}
              className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-neutral-200 text-[11px] font-black text-neutral-700 ring-1 ring-neutral-300 transition hover:scale-105 dark:bg-neutral-800 dark:text-white dark:ring-neutral-700"
              aria-label="Open profile"
            >
              G
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-10 z-[120] w-[280px] rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xl dark:border-neutral-800 dark:bg-[#181818]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-sm font-black text-white dark:bg-white dark:text-neutral-950">
                    G
                  </div>

                  <div>
                    <p className="text-sm font-black text-neutral-950 dark:text-white">
                      Gustiansyah
                    </p>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      Visual Creative / AI Creative Production
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="flex h-9 items-center gap-2 rounded-xl bg-neutral-100 px-3 text-xs font-bold text-neutral-700 transition hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  >
                    <Mail size={14} />
                    Email
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 items-center gap-2 rounded-xl bg-emerald-500 px-3 text-xs font-bold text-white transition hover:bg-emerald-600"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>

                <p className="mt-3 text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Human-led AI creative production for product brands and
                  ecommerce teams.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
