import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck2, ShieldCheck, X } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";

export function BookingModal() {
  const { t, booking, closeBooking, goToBookingForm, isRtl } = useApp();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!booking.open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [booking.open, closeBooking]);

  const selected = booking.service
    ? (t.services.items.find((item) => item.id === booking.service)?.title ??
      booking.service)
    : t.booking.noService;

  return (
    <AnimatePresence>
      {booking.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-lg"
          onClick={closeBooking}
          role="dialog"
          aria-modal="true"
          aria-label={t.booking.title}
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-cyan-400/25 bg-navy-900 p-7 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] sm:p-10"
          >
            <div className="absolute -start-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-[80px]" />

            <button
              type="button"
              onClick={closeBooking}
              aria-label={t.ui.close}
              className="absolute end-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-cyan-400 hover:text-cyan-400"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-navy-900 shadow-glow">
                <CalendarCheck2 className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-2xl font-black text-white sm:text-3xl">
                {t.booking.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {t.booking.subtitle}
              </p>

              <div className="mt-7 rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.07] p-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                  {t.booking.selected}
                </div>
                <div className="mt-2 text-lg font-bold text-white">{selected}</div>
              </div>

              <Button
                className="mt-7 w-full"
                onClick={() => goToBookingForm(booking.service)}
              >
                {t.booking.continue}
                <ArrowRight
                  className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`}
                />
              </Button>

              <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-white/35">
                <ShieldCheck className="h-4 w-4 text-cyan-500" />
                {t.booking.note}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
