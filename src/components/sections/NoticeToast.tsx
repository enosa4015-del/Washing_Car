import { AnimatePresence, motion } from "framer-motion";
import { Info, X } from "lucide-react";
import { useApp } from "@/context/AppContext";

export function NoticeToast() {
  const { notice, showNotice, t } = useApp();

  return (
    <AnimatePresence>
      {notice && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.28 }}
          role="status"
          className="fixed bottom-6 start-1/2 z-[100] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-2xl border border-cyan-400/30 bg-navy-800/95 p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
          <p className="flex-1 text-xs leading-relaxed text-white/80">{notice}</p>
          <button
            type="button"
            onClick={() => showNotice("")}
            aria-label={t.ui.close}
            className="text-white/40 transition-colors hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
