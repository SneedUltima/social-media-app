/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      "odin-grey": "rgb(36,37,37)",
      "odin-white": "rgb(255,255,255)",
      "odin-blue": "rgb(17,24,39)",
      "odin-lightblue": "rgb(31,41,55)",
      "odin-brightblue": "rgb(28,101,243)",
      "odin-green": "rgb(12,148,137)",
      "odin-gold": "rgb(212,156,108)",
      "odin-neutral": "rgb(229 229 229)",
    },
  },
  plugins: [],
};
