import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-extrabold uppercase tracking-[0.1em] transition-all duration-300 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "min-h-[52px] bg-cyan-500 px-7 text-sm text-navy-900 shadow-glow hover:bg-cyan-400 hover:shadow-[0_0_50px_-8px_rgba(0,207,255,0.7)]",
        outline:
          "min-h-[52px] border border-white/25 px-7 text-sm text-white hover:border-cyan-400 hover:bg-white/10 hover:text-cyan-400",
        dark: "min-h-[52px] border border-navy-900/10 bg-navy-900 px-7 text-sm text-white hover:bg-navy-800",
        ghost: "min-h-11 px-4 text-xs text-white/70 hover:text-cyan-400",
        light: "min-h-[52px] bg-white px-7 text-sm text-navy-900 hover:bg-cyan-400",
      },
      size: {
        default: "",
        sm: "min-h-10 px-5 text-[11px]",
        icon: "h-11 w-11 min-h-0 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
