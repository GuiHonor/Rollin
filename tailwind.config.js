/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        justanotherhand: ['Just Another Hand', 'sans-serif'],
        tahu : ['Tahu', 'sans-serif'],
        amanise: ['Amanise', 'sans-serif']
      }
    },
  },
  plugins: [],
}

