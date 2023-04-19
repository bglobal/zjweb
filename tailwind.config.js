/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'futura-medium': ['Futura-Medium'],
        'test': ['SedgwickAveDisplay-Regular'],
      },
    },
  },
  plugins: [],
}
