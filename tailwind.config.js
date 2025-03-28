const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#006A71",
        secondary: "#48A6A7",
        tertiary: "#9ACBD0",
        merino: "#F2EFE7",
      },
      fontFamily: {
        sans: ['"Oswald"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
