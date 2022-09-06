const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./assets/**/*.cscc",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main': '#26ccce',
        'main-darker': '#22bdbf',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
