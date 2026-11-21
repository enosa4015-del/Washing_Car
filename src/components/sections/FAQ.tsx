import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { t } = useApp();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y bg-mist text-ink">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
          align="start"
          tone="light"
        />

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen
                      ? "border-cyan-400/50 shadow-card"
                      : "border-navy-900/5 hover:border-cyan-400/30",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start sm:px-6"
                  >
                    <span className="text-sm font-bold text-navy-900 sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "rotate-45 bg-cyan-500 text-navy-900"
                          : "bg-mist text-cyan-600",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <p className="px-5 pb-6 text-sm leading-relaxed text-ink/65 sm:px-6">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
