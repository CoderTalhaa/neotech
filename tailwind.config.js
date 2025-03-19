/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
module.exports = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    screens,
    fontSize,
    fontFamily: {
      primary: "var(--font-pt_sans_narrow)",
      secondary: "var(--font-inter)",
      zentry: ["zentry", "sans-serif"],
      nunito: ["nunito", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#20AAba",
        button: "#40b59d",
        menuWhite: "#f3f2f9",
        menublack: "#001420",
      },
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle at center, #001420 0%, transparent 100%), linear-gradient(0deg, #003049, transparent 70%)",
        "tech-gradient": "linear-gradient(to bottom right, #001219, #003049)",
        "card-gradient":
          "radial-gradient(131.66% 109.77% at 50% 97.75%, transparent 37.41%, #01152280 69.27%, #20AAba 100%)",
      },
    },
  },
  plugins: [fluid],
};
