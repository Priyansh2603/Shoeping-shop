/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjusted if your files are under src
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
