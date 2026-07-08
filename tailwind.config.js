/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#124D1C',
          50: '#e6f2e9',
          100: '#c2e0c9',
          200: '#9bcda7',
          300: '#73b984',
          400: '#55aa69',
          500: '#379b4f',
          600: '#2d8743',
          700: '#247036',
          800: '#1b5a2a',
          900: '#124D1C',
          950: '#0a3012',
        },
        gold: {
          DEFAULT: '#C8A24A',
          light: '#E3C87E',
          dark: '#A9863A',
        },
      },
    },
  },
  plugins: [],
}