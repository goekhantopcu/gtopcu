/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '930-100': '#E6E8E7',
        '930-200': '#C7D7CF',
        '930-300': '#95BDAF',
        '930-400': '#4A7971',
        '930-500': '#CB8387'
      }
    },
  },
  plugins: [],
}
