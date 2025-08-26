/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': 'var(--primary-red)',
        'primary-red-hover': 'var(--primary-red-hover)',
        'primary-red-light': 'var(--primary-red-light)',
        'secondary-black': 'var(--secondary-black)',
        'secondary-gray': 'var(--secondary-gray)',
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}