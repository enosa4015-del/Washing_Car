import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Testimonials() {
  const { t, isRtl } = useApp();
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const items = t.testimonials.items;

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + items.length) % items.length);
  };

  const slide = isRtl ? -direction : direction;

  return (
    <section id="testimonials" className="section-y bg-navy-900">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 blur-2xl" />

            <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
              <Quote className="absolute -top-2 end-6 h-24 w-24 text-cyan-400/10" />

              <AnimatePresence mode="wait" custom={slide}>
                <motion.div
                  key={index}
                  custom={slide}
                  initial={reduced ? false : { opacity: 0, x: slide * 45 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slide * -45 }}
                  transition={{ duration: 0.36, ease: "easeOut" }}
                  aria-live="polite"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-cyan-400 text-cyan-400"
                      />
                    ))}
                  </div>

                  <p className="mt-7 text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
                    “{items[index].quote}”
                  </p>

                  <div className="mt-9 flex items-center gap-4">
                    <img
                      src={items[index].image}
                      alt={items[index].name}
                      loading="lazy"
                      className="h-14 w-14 rounded-full border-2 border-cyan-400/50 object-cover"
                    />
                    <div>
                      <div className="font-bold text-white">
                        {items[index].name}
                      </div>
                      <div className="mt-0.5 text-xs text-white/45">
                        {items[index].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-7 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {items.map((item, dot) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => go(dot, dot > index ? 1 : -1)}
                    aria-label={`${t.ui.next} ${dot + 1}`}
                    aria-current={dot === index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dot === index
                        ? "w-8 bg-cyan-400"
                        : "w-2 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(index - 1, -1)}
                  aria-label={t.ui.previous}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
                >
                  <ChevronLeft
                    className={`h-5 w-5 ${isRtl ? "rotate-180" : ""}`}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1, 1)}
                  aria-label={t.ui.next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
                >
                  <ChevronRight
                    className={`h-5 w-5 ${isRtl ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
