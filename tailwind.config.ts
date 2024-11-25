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
        accent: "#D2D2D2",
        bg1: "#111214",
        bg2: "#232528",
        bg3: "#383A40",
        text:
        {
          DEFAULT: "#D2D2D2",
          shadow: "#656a71",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
