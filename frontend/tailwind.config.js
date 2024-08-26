/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your files are under src
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'xs': '389px',
        'md-2': '812px',
        'lg2': '1025px',
      },
    },
  },
  plugins: [],
}
