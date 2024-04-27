import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: "class",
  lightMode: "class",
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "light-green": "#D91A5D",
      white: "#f1f1f1",
      "sky-blue": "#0099D2",
      green: "#006651",
      blue: "#1a0ae0", //0e0587 1a0ae0
      black: "#000000",
      yellow: "#F0C507",
      silver: "#ecebff",
      violet: "#9500FF",
      purple: "#7B1FA2",
      pink: "#B1B1E7",
      "light-blue": "#7F7FD7",
    },
    // screens: {
    //   sm: { min: "640px", max: "767px" },
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   md: { min: "768px", max: "1023px" },
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   lg: { min: "1024px", max: "1279px" },
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   xl: { min: "1280px", max: "1535px" },
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   "2xl": { min: "1536px" },
    //   // => @media (min-width: 1536px) { ... }
    // },
  },

  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
