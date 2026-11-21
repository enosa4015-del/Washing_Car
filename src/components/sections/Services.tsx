import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3, Tag } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Services() {
  const { t, openBooking } = useApp();
  const reduced = useReducedMotion();

  return (
    <section id="services" className="section-y bg-mist text-ink">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
          tone="light"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 0.08}>
              <motion.article
                whileHover={reduced ? undefined : { y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative h-full overflow-hidden rounded-3xl border border-navy-900/5 bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 start-4 rounded-full border border-white/25 bg-navy-950/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300 backdrop-blur-md">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative p-6">
                  <div className="absolute inset-x-0 top-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-cyan-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
                  <h3 className="text-xl font-extrabold tracking-tight text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-ink/65">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-navy-900/5 pt-4 text-xs font-semibold text-ink/60">
                    <span className="inline-flex items-center gap-1.5">
                      <Tag className="h-4 w-4 text-cyan-600" />
                      {service.price}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-4 w-4 text-cyan-600" />
                      {service.duration}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openBooking(service.id)}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-cyan-600 transition-colors hover:text-navy-900"
                  >
                    {t.services.explore}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
