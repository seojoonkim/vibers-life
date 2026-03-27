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
          black: "#FFFFFF",
          dark: "#F5F5F7",
          card: "#FFFFFF",
          surface: "#F0F0F5",
          line: "#E0E0E8",
        },
        neon: {
          purple: "#8B5CF6",
          green: "#00AA55",
          pink: "#FF0080",
          cyan: "#0099BB",
        },
        content: {
          DEFAULT: "#111111",
          muted: "#555577",
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
