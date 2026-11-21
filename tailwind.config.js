/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#04111C",
          900: "#071827",
          800: "#0B2239",
          700: "#123252",
        },
        cyan: {
          400: "#67E8F9",
          500: "#00CFFF",
          600: "#00A8CC",
        },
        ink: "#172B3A",
        mist: "#F5F8FC",
      },
      fontFamily: {
        sans: ["Inter", "Cairo", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 207, 255, 0.45)",
        card: "0 20px 50px -25px rgba(7, 24, 39, 0.35)",
        "card-hover": "0 30px 70px -25px rgba(7, 24, 39, 0.45)",
      },
      backgroundImage: {
        "grid-cyan":
          "linear-gradient(to right, rgba(0,207,255,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,207,255,.07) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(.8)", opacity: "0.7" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.5s ease-out infinite",
      },
    },
  },
  plugins: [],
};
