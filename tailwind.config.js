/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
    }
  },
  plugins: [require("flowbite/plugin")],
};
