import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Domain: ["Domain", "sans-serif"],
        TWLight: ["TWLight", "sans-serif"],
        TWMedium: ["TWMedium", "sans-serif"],
      },
    },
    colors: {
      "prime-blue": "#1E2640",
    },
  },
  plugins: [],
};
export default config;
