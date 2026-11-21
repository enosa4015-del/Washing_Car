import { motion, useReducedMotion } from "framer-motion";
import { Check, Crown, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const { t, openBooking } = useApp();
  const reduced = useReducedMotion();

  return (
    <section
      id="membership"
      className="section-y relative overflow-hidden bg-navy-950"
    >
      <div className="absolute inset-0 bg-dots opacity-[0.1]" />
      <div className="absolute start-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {t.pricing.plans.map((plan, index) => {
            const popular = plan.id === "silver";
            return (
              <Reveal key={plan.id} delay={index * 0.1}>
                <motion.div
                  whileHover={reduced ? undefined : { y: popular ? -10 : -6 }}
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-colors duration-500 sm:p-8 ${
                    popular
                      ? "border-cyan-400/60 bg-gradient-to-b from-cyan-500/15 via-navy-900 to-navy-900 shadow-glow lg:-translate-y-3"
                      : "border-white/10 bg-white/[0.035] hover:border-white/25"
                  }`}
                >
                  {popular && (
                    <div className="absolute end-5 top-0 rounded-b-lg bg-cyan-500 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-navy-900">
                      {t.ui.popular}
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        popular
                          ? "bg-cyan-500 text-navy-900"
                          : "bg-white/5 text-cyan-400"
                      }`}
                    >
                      {index === 2 ? (
                        <Crown className="h-5 w-5" />
                      ) : (
                        <Sparkles className="h-5 w-5" />
                      )}
                    </span>
                    <h3 className="text-lg font-extrabold uppercase tracking-[0.12em] text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-5 min-h-[40px] text-sm text-white/50">
                    {plan.description}
                  </p>

                  <div className="mt-4 flex items-end gap-1.5 border-b border-white/10 pb-7">
                    <span className="text-5xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="pb-2 text-xs font-semibold text-white/40">
                      {t.ui.perMonth}
                    </span>
                  </div>

                  <ul className="mt-7 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            popular
                              ? "bg-cyan-500 text-navy-900"
                              : "bg-cyan-500/15 text-cyan-400"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={popular ? "primary" : "outline"}
                    className="mt-9 w-full"
                    onClick={() => openBooking(plan.name)}
                  >
                    {t.pricing.choose}
                  </Button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-white/35">
          {t.ui.pricesNote}
        </p>
      </div>
    </section>
  );
}
