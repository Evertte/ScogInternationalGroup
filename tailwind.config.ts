import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        sprout: "rgb(var(--color-sprout) / <alpha-value>)",
        clay: "rgb(var(--color-clay) / <alpha-value>)",
        sun: "rgb(var(--color-sun) / <alpha-value>)"
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
