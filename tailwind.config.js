/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#22252a',
        'light-dark': '#2d3035',
        'border-dark': '#3a3d43',
        'dark-pink': '#e75d6f',
        'purple': '#8b4eda',
        'gray': '#84858b',
        'light-gray': '#828687',
      },
    },
  },
  plugins: [],
}

