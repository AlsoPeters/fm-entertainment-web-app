/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ewa: {
          "pure-white": "#FFFFFF",
          red: "#FC4747",
          "dark-blue": "#10141E",
          "grayish-blue": "#5A698F",
          "semi-dark-blue": "#161D2F",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  /* eslint @typescript-eslint/no-var-requires: "off" */
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
