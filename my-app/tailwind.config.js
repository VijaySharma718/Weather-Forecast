/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('/src/image/img.jpg')",
      },
    },
  },
  plugins: [],
}