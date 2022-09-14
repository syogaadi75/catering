/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00814f'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
