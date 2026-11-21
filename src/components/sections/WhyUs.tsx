import { motion, useReducedMotion } from "framer-motion";
import { Cog, Gem, HeartHandshake, Quote, UsersRound } from "lucide-react";
import { IMAGES } from "@/data/images";
import { useApp } from "@/context/AppContext";
import { Reveal } from "@/components/shared/Reveal";

const featureIcons = [Gem, UsersRound, Cog, HeartHandshake];

export function WhyUs() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  return (
    <section id="why-us" className="section-y relative overflow-hidden bg-navy-900">
      <span id="about" className="absolute top-0 block h-px w-full scroll-mt-24" />
      <div className="absolute -end-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute inset-0 bg-grid-cyan bg-[size:70px_70px] opacity-[0.08]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-cyan-400/20" />
            <div className="absolute -bottom-6 -end-6 h-32 w-32 rounded-[2rem] border-b-4 border-e-4 border-cyan-500/60" />
            <motion.div
              animate={reduced ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
            >
              <img
                src={IMAGES.why}
                alt="Luxury car being washed by hand in a modern detailing studio"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </motion.div>

            <div className="absolute -bottom-5 start-5 flex items-center gap-4 rounded-2xl border border-cyan-400/30 bg-navy-950/90 px-5 py-4 shadow-glow backdrop-blur-xl sm:start-8">
              <div className="text-3xl font-black text-cyan-400">
                {t.why.badgeValue}
              </div>
              <div className="max-w-[130px] text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-white/60">
                {t.why.badgeLabel}
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">
              <Quote className="h-3.5 w-3.5" />
              {t.why.eyebrow}
            </span>
            <h2 className="heading-lg mt-5 text-white">
              {t.why.titleLine1}
              <br />
              <span className="text-gradient">{t.why.titleLine2}</span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/60">
              {t.why.description}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.why.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <Reveal key={feature.title} delay={index * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
