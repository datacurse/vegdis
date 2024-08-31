import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#3f884f",
          500: "#326b3e",
          600: "#1b4e25",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        high: "hsla(0, 0%, 100%, 0.87)",
        medium: "hsla(0, 0%, 100%, 0.6)",
        surface: {
          base: "rgb(30 30 34 / <alpha-value>)",
          1: "rgb(41 41 45 / <alpha-value>)",
          2: "rgb(46 46 50 / <alpha-value>)",
          3: "rgb(48 48 51 / <alpha-value>)",
          4: "rgb(50 50 54 / <alpha-value>)",
          6: "rgb(55 55 58 / <alpha-value>)",
          8: "rgb(57 57 61 / <alpha-value>)",
          12: "rgb(62 62 65 / <alpha-value>)",
          24: "rgb(66 66 70 / <alpha-value>)",
          "2/20": "rgb(46 46 50 / 0.2)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
