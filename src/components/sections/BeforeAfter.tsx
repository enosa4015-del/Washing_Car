import { useRef, useState, type PointerEvent } from "react";
import { GripVertical, MoveHorizontal } from "lucide-react";
import { IMAGES } from "@/data/images";
import { useApp } from "@/context/AppContext";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function BeforeAfter() {
  const { t } = useApp();
  const [position, setPosition] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) updateFromClientX(event.clientX);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      id="comparison"
      className="section-y relative overflow-hidden bg-navy-950"
    >
      <div className="absolute -start-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow={t.compare.eyebrow}
          title={t.compare.title}
          subtitle={t.compare.subtitle}
        />

        <Reveal className="mt-14">
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="relative aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)] sm:aspect-[16/8]"
          >
            <img
              src={IMAGES.compareAfter}
              alt="Dirty car before professional cleaning"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: "brightness(0.62) saturate(0.45) sepia(0.28) contrast(0.9)" }}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/35 via-transparent to-transparent" />

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src={IMAGES.compareAfter}
                alt="Professionally cleaned car after detailing"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />

            <span className="pointer-events-none absolute start-4 top-4 rounded-full border border-white/20 bg-navy-950/75 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md sm:start-6 sm:top-6">
              {t.compare.before}
            </span>
            <span className="pointer-events-none absolute end-4 top-4 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md sm:end-6 sm:top-6">
              {t.compare.after}
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 z-20 w-[3px] bg-cyan-400 shadow-[0_0_22px_rgba(0,207,255,0.9)]"
              style={{ left: `${position}%` }}
            >
              <div
                role="slider"
                tabIndex={0}
                aria-label={t.compare.hint}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(position)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft")
                    setPosition((value) => Math.max(0, value - 4));
                  if (event.key === "ArrowRight")
                    setPosition((value) => Math.min(100, value + 4));
                }}
                className="pointer-events-auto absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cyan-400 bg-navy-950 text-cyan-400 shadow-glow outline-none"
              >
                <GripVertical className="h-6 w-6" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
          <MoveHorizontal className="h-4 w-4 text-cyan-400" />
          {t.compare.hint}
        </div>
      </div>
    </section>
  );
}
