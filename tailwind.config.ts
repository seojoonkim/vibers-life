import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        arcade: {
          black: "#0A0A0F",
          dark: "#0F0F1A",
          card: "#12121E",
          surface: "#1A1A2E",
          line: "#2A2A40",
        },
        neon: {
          purple: "#8B5CF6",
          green: "#00FF88",
          pink: "#FF0080",
          cyan: "#00D4FF",
        },
        content: {
          DEFAULT: "#E8E8F0",
          muted: "#6B6B8D",
        },
      },
      fontFamily: {
        pixel: ['var(--font-pixel)', '"Press Start 2P"', "cursive"],
        body: ['var(--font-body)', '"Space Grotesk"', "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
