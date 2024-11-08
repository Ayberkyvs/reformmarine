const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-light": "#F7F8FA",
        'primary': '#005197',
          'blue': {
            50: "#E5F3FF",
            100: "#B8DEFF",
            200: "#8AC9FF",
            300: "#5CB3FF",
            400: "#2E9EFF",
            500: "#0089FF",
            600: "#006DCC",
            700: "#005299",
            800: "#003766",
            900: "#001B33"
          },
          'red': {
            50: "#FDE8E8",
            100: "#F8BEBE",
            200: "#F49595",
            300: "#F06B6B",
            400: "#EC4141",
            500: "#E71818",
            600: "#B91313",
            700: "#8B0E0E",
            800: "#5D0909",
            900: "#2E0505"
          },
          'orange': {
            50: "#FDF4E8",
            100: "#F8E1BF",
            200: "#F4CD95",
            300: "#EFBA6C",
            400: "#EBA642",
            500: "#E69319",
            600: "#B87514",
            700: "#8A580F",
            800: "#5C3B0A",
            900: "#2E1D05"
          },
          'green': {
            50: "#EAFBF1",
            100: "#C4F3D7",
            200: "#9EEBBD",
            300: "#77E3A3",
            400: "#51DC89",
            500: "#2BD46F",
            600: "#23A959",
            700: "#1A7F43",
            800: "#11552D",
            900: "#092A16"
          }
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}