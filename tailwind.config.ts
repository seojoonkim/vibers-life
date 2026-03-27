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
        "bg-alt": "#F5F5F0",
        foreground: "#0A0A0A",
        "text-sub": "#6B6B6B",
        accent: "#FF4D00",
        "accent-light": "#FFF0EB",
        border: "#E8E8E8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Space Grotesk", "sans-serif"],
      },
      maxWidth: {
        editorial: "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
