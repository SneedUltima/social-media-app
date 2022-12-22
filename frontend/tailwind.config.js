/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    colors: {
      "odin-grey": "rgb(36,37,37)",
      "odin-white": "rgb(255,255,255)",
    },
  },
  plugins: [],
};
