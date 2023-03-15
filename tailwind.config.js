/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,tsx}",
    "./pages/**/*.{js,jsx,tsx}",
    "./components/**/*.{js,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
