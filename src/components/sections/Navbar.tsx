import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SharkLogo } from "@/components/shared/SharkLogo";

export function Navbar() {
  const { t, lang, setLang, isRtl, scrollToSection, openBooking } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = t.nav.map((item) => item.id);
    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.nav]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navigate = (id: string) => {
    setMobileOpen(false);
    window.setTimeout(() => scrollToSection(id), 60);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-navy-950/95 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-navy-950/50 to-transparent",
      )}
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <div className="flex flex-1 items-center">
          <SharkLogo />
        </div>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {t.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={cn(
                "relative rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors duration-300",
                active === item.id
                  ? "text-cyan-400"
                  : "text-white/70 hover:text-white",
              )}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-cyan-400" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div
            className="hidden items-center rounded-full border border-white/15 bg-white/5 p-1 text-[11px] font-bold sm:flex"
            role="group"
            aria-label={t.ui.language}
          >
            {(["en", "ar"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={cn(
                  "rounded-full px-2.5 py-1 transition-colors",
                  lang === code
                    ? "bg-cyan-500 text-navy-900"
                    : "text-white/60 hover:text-white",
                )}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => openBooking()}
          >
            {t.ui.bookNow}
          </Button>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-b border-white/10 bg-navy-950/98 px-5 pb-7 pt-3 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {t.nav.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, x: isRtl ? 18 : -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => navigate(item.id)}
                  className={cn(
                    "flex min-h-12 items-center justify-between border-b border-white/5 text-base font-semibold",
                    active === item.id ? "text-cyan-400" : "text-white/80",
                  )}
                >
                  {item.label}
                  <span className="text-xs text-white/25">0{index + 1}</span>
                </motion.button>
              ))}
            </nav>

            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex flex-1 items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs font-bold"
                role="group"
                aria-label={t.ui.language}
              >
                {(["en", "ar"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={cn(
                      "flex-1 rounded-full py-2 transition-colors",
                      lang === code
                        ? "bg-cyan-500 text-navy-900"
                        : "text-white/60",
                    )}
                  >
                    {code === "en" ? "EN" : "AR"}
                  </button>
                ))}
              </div>
              <Button
                className="flex-1"
                onClick={() => {
                  setMobileOpen(false);
                  window.setTimeout(() => openBooking(), 80);
                }}
              >
                {t.ui.bookNow}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
