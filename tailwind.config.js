/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,ttf}"],
  theme: {
    extend: {
      fontFamily: {
        'futura': ['futura'],
        'gill': ['gill'],
      },
    },
  },
  plugins: [],
}
