import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        display: ['Playfair Display', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          light: "#071F38",
        },
        gold: {
          DEFAULT: "#BBA25A",
        },
        beige: {
          DEFAULT: "#EDEBE7",
          light: "#DFD9CC",
        },
        sage: {
          DEFAULT: "#88938F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
