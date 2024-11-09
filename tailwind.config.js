/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", "sans-serif"],
      },
      colors: {
        "primary-900": "#4A6DFF",
        "secondary-800": "#3F4264",
        "secondary-900": "#2A2D53",
        "secondary-700": "#555775",
        'secondary-600':'#6A6C87',
        'other': "#FF9900",
      },
    },
  },
  plugins: [],
};
