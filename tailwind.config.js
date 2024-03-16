/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F9F9F9',
        'secondary': '#ECECEC'
      }
    },
  },
  plugins: [],
}

