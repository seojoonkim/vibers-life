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
        background: "#FFFFFF",
        foreground: "#0A0A0A",
        "alt-bg": "#F5F5F0",
        "sub-text": "#6B6B6B",
        accent: "#FF4D00",
        "accent-light": "#FFF0EB",
        border: "#E8E8E8",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
