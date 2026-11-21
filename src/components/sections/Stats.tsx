import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useApp } from "@/context/AppContext";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const { lang } = useApp();
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => {
    const locale = lang === "ar" ? "ar-EG" : "en-US";
    return `${Math.round(latest).toLocaleString(locale)}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration: 1.9, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, value, reduced, count]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Stats() {
  const { t } = useApp();

  return (
    <section
      id="stats"
      className="relative border-y border-white/5 bg-navy-950 py-14 md:py-16"
    >
      <div className="absolute inset-0 bg-dots opacity-[0.12]" />
      <div className="container-x relative grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {t.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className={`relative px-2 text-center ${
              index % 2 === 0 ? "border-e border-white/5 md:border-e" : ""
            } ${index < 2 ? "border-b border-white/5 md:border-b-0" : ""}`}
          >
            <div className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400/80 sm:text-xs">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
