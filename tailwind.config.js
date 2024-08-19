const colors = require("tailwindcss/colors");
const {lightBlue, warmGray, trueGray, coolGray,blueGray, ...supportedColors} = colors;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...supportedColors,
      },
    },
  },
  plugins: [],
};
