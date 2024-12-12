import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.svg')",
      },
      colors: {
        primary: "#7843E9",
        "overlay-white": "rgba(245, 245, 245, 0.8)",
        "custom-gray": "rgba(153, 153, 153, 0.2)",
      },
      fontFamily: {
        sourceSans: ["SourceSansPro-Regular", "sans-serif"],
        sourceSansBold: ["SourceSansPro-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
