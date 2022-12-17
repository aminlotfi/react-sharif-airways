/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          ultraLight: '#FFE19C',
          light: '#FDB713',
          dark: '#E3A107'
        },
        secondary: {
          100: '#F2F9FF',
          200: '#C9E3F8',
          300: '#51A2E7',
          400: '#0077DB',
          500: '#00569E',
          600: '#004075',
          700: '#001C33'
        },
        success: {
          400: '#28A745',
          500: '#1E7B33',
          700: '#11461D'
        },
        info: {
          400: '#17A2B8',
          500: '#0F697A',
          700: '#072F36'
        },
        danger: {
          400: '#DC3545',
          500: '#871722',
          700: '#410B10'
        },
        gray: {
          100: '#F8FAFB',
          150: '#E2E6E9',
          200: '#BEC6CC',
          300: '#959EA6',
          400: '#6C7680',
          500: '#4B5259',
          600: '#2B2F33',
          700: '#0A0B0C'
        }
      },
      spacing: {
        '8': '0.5rem',
        '16': '1rem',
        '24': '1.5rem',
        '32': '2rem',
        '40': '2.5rem',
        '48': '3rem',
        '56': '3.5rem',
        '64': '4rem',
        '72': '4.5rem',
        '80': '5rem',
        '88': '5.5rem',
        '96': '6rem',
        '104': '6.5rem',
        '112': '7rem',
        '120': '7.5rem',
      },
      borderRadius: {
        5: '5px',
        10: '10px',
        12: '12px',
        15: '15px',
        20: '20px'
      }
    },
  },
  fontFamily: {
    sans: ['iranyekan', ...defaultTheme.fontFamily.sans],
  },
  plugins: [],
}