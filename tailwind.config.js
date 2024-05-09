/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*.{html,js,ejs}",
    "./public/**/*.{html,js}",
    "./views/index.ejs",
    "*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
