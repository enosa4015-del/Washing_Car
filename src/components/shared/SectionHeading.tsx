import { Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  tone?: "dark" | "light";
  className?: string;
}) {
  const { isRtl } = useApp();

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "start" && (isRtl ? "text-right" : "text-left"),
        className,
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "heading-lg mt-4 uppercase",
          tone === "light" ? "text-navy-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            tone === "light" ? "text-navy-800/70" : "text-white/60",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
