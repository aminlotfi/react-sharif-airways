/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['iranyekan', ...defaultTheme.fontFamily.sans],
  },
  plugins: [],
}