import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#eef6f9",
          100: "#d7e9f0",
          200: "#aecfdf",
          300: "#7fb0cb",
          400: "#4d8bae",
          500: "#2f6c8f",
          600: "#215273",
          700: "#1a3f5c",
          800: "#122d43",
          900: "#0a1d2d",
        },
        sand: {
          50: "#fefdfb",
          100: "#fbf6ec",
          200: "#f5ecd8",
          300: "#ecdcbb",
          400: "#dfc593",
          500: "#cfab6c",
        },
        palm: {
          50: "#eefaf3",
          100: "#d3f2e0",
          200: "#a5e3c1",
          300: "#71cd9e",
          400: "#3fb37e",
          500: "#219665",
          600: "#177a52",
          700: "#146143",
          800: "#124e37",
          900: "#0f402e",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(10, 29, 45, 0.25)",
        glass: "0 8px 32px 0 rgba(10, 29, 45, 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
