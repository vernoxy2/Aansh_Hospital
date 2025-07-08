/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      fontFamily: {
        kulim: ['"Kulim Park"', "sans-serif"],
      },
      colors: {
        primary: "#A82682",
        secondary: "#A9A8A8",
        SecondPrimary: "#CD895C",
      },
      writingMode: {
        vertical: "vertical-rl",
      },
    },
  },

  variants: {
    extend: {
      writingMode: ["responsive"],
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".writing-vertical": {
            writingMode: "vertical-rl",
          },
        },
        ["responsive"]
      );
    },
  ],
};
