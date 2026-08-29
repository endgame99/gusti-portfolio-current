import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Moon,
  Sun,
  ChevronDown,
  Check,
  Download,
  Mail,
  MessageCircle,
} from "lucide-react";
import { SOCIAL_LINKS } from "../data";

type ThemeMode = "light" | "dark";
type LanguageMode = "ID" | "EN" | "CN";

const languageOptions: Array<{ value: LanguageMode; label: string; flag: string }> = [
  { value: "EN", label: "English", flag: "/flags/us.svg" },
  { value: "CN", label: "简体中文", flag: "/flags/cn.svg" },
  { value: "ID", label: "Bahasa Indonesia", flag: "/flags/id.svg" },
];

type GustiTopHeaderProps = {
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
  searchQuery,
  setSearchQuery,
  theme,
  setTheme,
  language,
  setLanguage,
  whatsappUrl,
}: GustiTopHeaderProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const currentLanguage =
    languageOptions.find((option) => option.value === language) ?? languageOptions[0];

  return (
    <header className="header sticky top-0 z-[90] flex h-14 w-full min-w-0 items-center justify-between gap-3 bg-white/95 backdrop-blur-md transition-colors duration-200 dark:bg-[#121212]/95 border-b border-neutral-100/80 dark:border-neutral-800/50">
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <div className="relative flex h-8 w-40 min-[480px]:w-52 sm:w-64 md:w-72 lg:w-80 items-center rounded-full bg-neutral-100 dark:bg-neutral-900 transition-all duration-300">
            <Search size={13} className="absolute left-3 text-neutral-400 pointer-events-none" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search..."
              className="h-full w-full rounded-full bg-transparent pl-8 pr-3 text-xs font-medium text-neutral-800 outline-none placeholder:text-neutral-400 dark:text-white dark:placeholder:text-neutral-500"
            />
          </div>

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
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
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="/cv/cv-reference-dummy.pdf"
            download="Gustiansyah-CV.pdf"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 sm:w-auto sm:gap-1.5 sm:px-3"
            aria-label="Download CV"
            title="Download temporary CV reference"
          >
            <Download size={14} strokeWidth={2} />
            <span className="hidden type-label-md font-semibold sm:inline">Download CV</span>
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setLanguageOpen(false);
                setProfileOpen((value) => !value);
              }}
              className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-neutral-200 ring-1 ring-neutral-300 transition dark:bg-neutral-800 dark:ring-neutral-700"
              aria-label="Open profile"
            >
              <img
                src="/profile/gusti-profile.jpeg"
                alt=""
                className="h-full w-full object-cover object-center"
                draggable={false}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-10 z-[120] w-[280px] rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xl dark:border-neutral-800 dark:bg-[#181818]">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-neutral-200 dark:ring-neutral-700">
                    <img
                      src="/profile/gusti-profile.jpeg"
                      alt="Gustiansyah"
                      className="h-full w-full object-cover object-center"
                      draggable={false}
                    />
                  </div>

                  <div>
                    <p className="type-heading-md font-bold text-neutral-950 dark:text-white">
                      Gustiansyah
                    </p>
                    <p className="type-body-sm font-medium text-neutral-500 dark:text-neutral-400">
                      Visual Creative / AI Creative Production
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="flex h-9 items-center gap-2 rounded-xl bg-neutral-100 px-3 type-label-sm font-semibold text-neutral-700 transition hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  >
                    <Mail size={14} />
                    Email
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 items-center gap-2 rounded-xl bg-emerald-500 px-3 type-label-sm font-semibold text-white transition hover:bg-emerald-600"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>

                <p className="mt-3 type-body-sm font-normal text-neutral-500 dark:text-neutral-400">
                  Human-led AI creative production for product brands and
                  ecommerce teams.
                </p>
              </div>
            )}
          </div>

          <div className="relative ml-1.5">
            <button
              type="button"
              onClick={() => {
                setProfileOpen(false);
                setLanguageOpen((value) => !value);
              }}
              className="flex h-8 items-center gap-1 rounded-full px-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Change language"
              aria-expanded={languageOpen}
              aria-haspopup="menu"
            >
              <span className="flex h-4 w-6 shrink-0 items-center justify-center">
                <img
                  src={currentLanguage.flag}
                  alt=""
                  className="h-3 w-auto rounded-[1px] shadow-[0_0_0_1px_rgba(0,0,0,0.10)]"
                  draggable={false}
                />
              </span>
              <ChevronDown
                size={12}
                strokeWidth={2}
                className={cx("transition-transform", languageOpen && "rotate-180")}
              />
            </button>

            {languageOpen && (
              <div
                role="menu"
                className="absolute right-0 top-10 z-[120] w-48 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl dark:border-neutral-800 dark:bg-[#181818]"
              >
                {languageOptions.map((option) => {
                  const isSelected = language === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isSelected}
                      onClick={() => {
                        setLanguage(option.value);
                        setLanguageOpen(false);
                      }}
                      className={cx(
                        "flex h-9 w-full items-center justify-between rounded-lg px-2.5 text-left type-label-sm transition-colors",
                        isSelected
                          ? "bg-neutral-100 font-semibold text-neutral-950 dark:bg-neutral-800 dark:text-white"
                          : "font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                      )}
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <span className="flex h-4 w-7 shrink-0 items-center justify-center">
                          <img
                            src={option.flag}
                            alt=""
                            className="h-3.5 w-auto rounded-[1px] shadow-[0_0_0_1px_rgba(0,0,0,0.10)]"
                            draggable={false}
                          />
                        </span>
                        <span className="truncate">{option.label}</span>
                      </span>
                      {isSelected && <Check size={14} strokeWidth={2} />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
    </header>
  );
}
