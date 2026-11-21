import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const spanClasses = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
];

export function Gallery() {
  const { t, isRtl } = useApp();
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);

  const close = () => setActive(null);
  const next = () => {
    setDirection(1);
    setActive((current) =>
      current === null ? null : (current + 1) % t.gallery.items.length,
    );
  };
  const prev = () => {
    setDirection(-1);
    setActive((current) =>
      current === null
        ? null
        : (current - 1 + t.gallery.items.length) % t.gallery.items.length,
    );
  };

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  });

  const slideDirection = isRtl ? -direction : direction;

  return (
    <section id="gallery" className="section-y bg-navy-900">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        <div className="mt-14 grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[170px] md:grid-cols-4 md:gap-4">
          {t.gallery.items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 4) * 0.06} className={spanClasses[index]}>
              <button
                type="button"
                onClick={() => {
                  setDirection(1);
                  setActive(index);
                }}
                aria-label={`${t.gallery.open}: ${item.title}`}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                  <span className="text-start text-xs font-bold text-white sm:text-sm">
                    {item.title}
                  </span>
                  <Maximize2 className="h-4 w-4 shrink-0 text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={t.gallery.title}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label={t.ui.close}
              className="absolute end-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute start-5 top-6 z-10 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              {t.gallery.counter} {active + 1} / {t.gallery.items.length}
            </div>

            <div
              className="relative flex w-full max-w-5xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={prev}
                aria-label={t.ui.previous}
                className="absolute start-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-navy-950/70 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 sm:-start-14"
              >
                <ChevronLeft
                  className={`h-5 w-5 ${isRtl ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence mode="wait" custom={slideDirection}>
                <motion.figure
                  key={active}
                  custom={slideDirection}
                  initial={reduced ? false : { opacity: 0, x: slideDirection * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDirection * -60 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="w-full"
                >
                  <img
                    src={t.gallery.items[active].image}
                    alt={t.gallery.items[active].title}
                    className="max-h-[72vh] w-full rounded-2xl object-contain shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)]"
                  />
                  <figcaption className="mt-4 text-center text-sm font-semibold text-white/80">
                    {t.gallery.items[active].title}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              <button
                type="button"
                onClick={next}
                aria-label={t.ui.next}
                className="absolute end-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-navy-950/70 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400 sm:-end-14"
              >
                <ChevronRight
                  className={`h-5 w-5 ${isRtl ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div
              className="absolute bottom-5 flex gap-2"
              onClick={(event) => event.stopPropagation()}
            >
              {t.gallery.items.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    setDirection(index > active ? 1 : -1);
                    setActive(index);
                  }}
                  aria-label={`${t.gallery.counter} ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-7 bg-cyan-400"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
