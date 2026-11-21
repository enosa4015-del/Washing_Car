import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function BackToTop() {
  const { t } = useApp();
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduced ? "auto" : "smooth",
            })
          }
          aria-label={t.ui.backToTop}
          whileHover={reduced ? undefined : { y: -4 }}
          whileTap={{ scale: 0.94 }}
          initial={reduced ? false : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 end-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500 text-navy-900 shadow-glow transition-colors hover:bg-cyan-400 lg:end-8"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
