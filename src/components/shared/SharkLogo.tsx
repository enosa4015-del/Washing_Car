import { useApp } from "@/context/AppContext";

export function SharkLogo({ compact = false }: { compact?: boolean }) {
  const { t, scrollToSection } = useApp();

  return (
    <button
      type="button"
      onClick={() => scrollToSection("home")}
      className="group flex items-center gap-3 rounded-xl text-start"
      aria-label={`${t.nav[0].label} — Shark Clean`}
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-transparent shadow-glow">
        <svg
          viewBox="0 0 48 48"
          className="h-7 w-7 text-cyan-400 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 31.5C14 30 17.5 22 20 8c3.2 8.6 7.7 13.1 15 14.2 3 .5 5.4.1 7.5-1.1C39.4 30.4 32.1 39 21.5 39 13.8 39 8.5 36.4 6 31.5Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M11 27.5c5.6 1.9 11.6 1.3 17.2-1.8"
            stroke="#071827"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M13 42.5c5.6 2.6 12.4 2.5 18-1.1"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[17px] font-black tracking-[0.14em] text-white sm:text-lg">
            SHARK <span className="text-cyan-400">CLEAN</span>
          </span>
          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45">
            Premium Auto Care
          </span>
        </span>
      )}
    </button>
  );
}
