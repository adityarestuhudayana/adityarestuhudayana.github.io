/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#fde047',
        second: '#facc15'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        'bounce-slow': 'bounce 5s linear infinite',
      }
    },
  },
  plugins: [],
}

