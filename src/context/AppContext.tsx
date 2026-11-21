import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Content, type Language } from "@/data/content";

type BookingState = {
  open: boolean;
  service?: string;
};

type AppContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  isRtl: boolean;
  t: Content;
  notice: string | null;
  showNotice: (message: string) => void;
  booking: BookingState;
  openBooking: (service?: string) => void;
  closeBooking: () => void;
  goToBookingForm: (service?: string) => void;
  preselectedService: string | null;
  scrollToSection: (id: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem("shark-clean-language");
  return saved === "ar" ? "ar" : "en";
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);
  const [notice, setNotice] = useState<string | null>(null);
  const [booking, setBooking] = useState<BookingState>({ open: false });
  const [preselectedService, setPreselectedService] = useState<string | null>(null);
  const isRtl = lang === "ar";
  const t = content[lang];

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    window.localStorage.setItem("shark-clean-language", next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 4200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const showNotice = useCallback((message: string) => setNotice(message), []);

  const scrollToSection = useCallback((id: string) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  const openBooking = useCallback((service?: string) => {
    setBooking({ open: true, service });
  }, []);

  const closeBooking = useCallback(() => setBooking({ open: false }), []);

  const goToBookingForm = useCallback(
    (service?: string) => {
      setPreselectedService(service ?? null);
      setBooking({ open: false });
      window.setTimeout(() => scrollToSection("contact"), 120);
    },
    [scrollToSection],
  );

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      setLang,
      isRtl,
      t,
      notice,
      showNotice,
      booking,
      openBooking,
      closeBooking,
      goToBookingForm,
      preselectedService,
      scrollToSection,
    }),
    [
      lang,
      setLang,
      isRtl,
      t,
      notice,
      showNotice,
      booking,
      openBooking,
      closeBooking,
      goToBookingForm,
      preselectedService,
      scrollToSection,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
