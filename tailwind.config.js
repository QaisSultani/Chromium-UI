/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-color': '#304767FA',
        'theme-bg-gray': '#30476733',
        'theme-text-gray-light': '#979797',
        'theme-text-gray-dark': '#5F6368',
        'theme-color-dark': '#1C1B1F',
      },
    },
  },
  plugins: [],
}