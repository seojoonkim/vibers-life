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
        navy: "#1A2B4B",
        green: {
          DEFAULT: "#4CAF50",
          dark: "#43A047",
          light: "#E8F5E9",
        },
        teal: "#00897B",
        cream: "#FAFAFA",
        dark: "#1A2B4B",
        sub: "#64748B",
        border: "#F0F0F0",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.06)",
        md: "0 8px 24px rgba(0,0,0,0.10)",
        lg: "0 16px 48px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
