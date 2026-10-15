import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#062b41",
          "navy-deep": "#041f2e",
          green: "#176b47",
          "green-dark": "#0f5034",
        },
        accent: {
          harvest: "#e1ae4a",
        },
        ink: "#122c2d",
        muted: "#50625f",
        canvas: "#f7f8f3",
        surface: "#ffffff",
        "surface-soft": "#eaf3ec",
        border: "#d7e0d8",
        danger: "#a92f2f",
        focus: "#165ca4",
      },
      fontFamily: {
        bn: ["var(--font-noto-bengali)", "Noto Sans Bengali", "sans-serif"],
        en: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        large: "24px",
      },
      boxShadow: {
        card: "0 12px 36px rgba(6,43,65,0.07)",
        soft: "0 4px 20px rgba(6,43,65,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;