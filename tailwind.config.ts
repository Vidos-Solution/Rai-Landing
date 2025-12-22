import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#91B7AC",
        secondary: "#6D889D",
        accent: "#6EA2DC",
        dark: {
          darkest: "#05070b",
          dark: "#0b1620",
          medium: "#1a2835",
          overlay: "#02060a",
          overlayLight: "#03080f",
        },
        light: {
          white: "#ffffff",
          gray50: "#f9fafb",
          gray200: "#e5e7eb",
          gray600: "#4b5563",
          gray900: "#111827",
        },
        status: {
          warning: "#ffc107",
          warningText: "#856404",
          success: "#10b981",
          error: "#ef4444",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(110, 162, 220, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(110, 162, 220, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

