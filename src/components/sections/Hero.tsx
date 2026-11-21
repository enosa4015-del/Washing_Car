import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { IMAGES } from "@/data/images";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";

const particles = [
  { left: "8%", top: "22%", size: 3, delay: 0, duration: 9 },
  { left: "18%", top: "68%", size: 2, delay: 1.4, duration: 11 },
  { left: "28%", top: "38%", size: 4, delay: 0.7, duration: 8 },
  { left: "39%", top: "78%", size: 2, delay: 2.1, duration: 10 },
  { left: "51%", top: "18%", size: 3, delay: 1.1, duration: 12 },
  { left: "63%", top: "60%", size: 2, delay: 0.3, duration: 9 },
  { left: "72%", top: "32%", size: 4, delay: 1.8, duration: 11 },
  { left: "84%", top: "72%", size: 3, delay: 0.9, duration: 10 },
  { left: "92%", top: "28%", size: 2, delay: 2.4, duration: 8 },
];

const trustIcons = [Award, UsersRound, ShieldCheck];

export function Hero() {
  const { t, isRtl, openBooking, scrollToSection } = useApp();
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 34 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-center overflow-hidden pb-24 pt-32 md:min-h-screen md:pb-32"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduced ? false : { scale: 1.12 }}
        animate={reduced ? undefined : { scale: [1.06, 1, 1.06] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={IMAGES.hero}
          alt="Luxury black car covered in foam inside a modern car wash"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </motion.div>

      <div
        className={`absolute inset-0 ${
          isRtl ? "bg-gradient-to-l" : "bg-gradient-to-r"
        } from-navy-950 via-navy-950/85 to-navy-950/20`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      <div className="absolute -start-40 top-1/4 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-grid-cyan bg-[size:64px_64px] opacity-30 mask-fade-b" />

      {!reduced &&
        particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(103,232,249,0.8)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{ y: [0, -26, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="container-x relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div {...rise(0.1)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-md sm:text-[11px]">
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.badge}
            </span>
          </motion.div>

          <h1 className="mt-7 text-[clamp(2.8rem,7.2vw,6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.045em]">
            {[t.hero.line1, t.hero.line2].map((line, index) => (
              <motion.span
                key={line}
                {...rise(0.2 + index * 0.12)}
                className="block"
              >
                {line}
              </motion.span>
            ))}
            <motion.span {...rise(0.44)} className="block text-gradient">
              {t.hero.line3}
            </motion.span>
          </h1>

          <motion.p
            {...rise(0.56)}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            {...rise(0.68)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.div
              whileHover={reduced ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button onClick={() => openBooking()} className="w-full sm:w-auto">
                {t.hero.primary}
                <ArrowRight
                  className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={reduced ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto"
              >
                {t.hero.secondary}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            {...rise(0.82)}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            {t.hero.trust.map((item, index) => {
              const Icon = trustIcons[index];
              return (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10">
                    <Icon className="h-4 w-4 text-cyan-400" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/65">
                    {item}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("stats")}
        className="absolute bottom-8 start-5 z-10 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 transition-colors hover:text-cyan-400 md:flex lg:start-12"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
          <ArrowDown className="h-4 w-4" />
        </span>
        {t.hero.scroll}
      </button>

      <div className="absolute bottom-10 end-5 z-10 hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl lg:block lg:end-12">
        <div className="flex items-center gap-4">
          <img
            src={IMAGES.heroPortrait}
            alt=""
            className="h-12 w-12 rounded-xl object-cover"
            loading="lazy"
          />
          <div>
            <div className="text-sm font-bold text-white">5,000+</div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/50">
              {t.stats[0].label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
