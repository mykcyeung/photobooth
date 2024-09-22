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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fcfbf7",
        black: "#000",
        unselect: "#d6d6d6",
      },
      fontFamily: {
        outfit: ["Outfit", 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
