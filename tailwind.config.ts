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
        background: "#0A0A0F",
        foreground: "#FFFFFF",
        "neon-purple": "#8B5CF6",
        "neon-green": "#00FF88",
        "dark-bg": "#0A0A0F",
        "dark-card": "#13131A",
        "dark-border": "#1E1E2E",
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "monospace"],
        grotesk: ["'Space Grotesk'", "sans-serif"],
      },
      animation: {
        "glitch": "glitch 2s infinite",
        "scanline": "scanline 4s linear infinite",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px #8B5CF6, 0 0 40px #8B5CF6" },
          "50%": { opacity: "0.8", boxShadow: "0 0 10px #8B5CF6, 0 0 20px #8B5CF6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
