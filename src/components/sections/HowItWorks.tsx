import { motion, useReducedMotion } from "framer-motion";
import { MapPin, MousePointerClick, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const stepIcons = [MousePointerClick, MapPin, Sparkles];

export function HowItWorks() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  return (
    <section id="steps" className="section-y bg-white text-ink">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.steps.eyebrow}
          title={t.steps.title}
          subtitle={t.steps.subtitle}
          tone="light"
        />

        <div className="relative mt-16">
          <div className="absolute left-[16%] right-[16%] top-[62px] hidden h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {t.steps.items.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <Reveal key={step.number} delay={index * 0.12}>
                  <motion.div
                    whileHover={reduced ? undefined : { y: -6 }}
                    className="relative flex h-full flex-col items-center rounded-3xl border border-navy-900/5 bg-mist px-6 py-9 text-center shadow-card"
                  >
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-cyan-400 shadow-glow">
                      <Icon className="h-7 w-7" />
                      <span className="absolute -bottom-2 -end-2 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-black text-navy-900">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-7 text-lg font-extrabold text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">
                      {step.description}
                    </p>
                    <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                      {t.steps.items[index].number}
                    </span>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
