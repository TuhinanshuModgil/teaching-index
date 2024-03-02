/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button-primary': '#C38EB4', // Example of a custom color with the name 'primary'
        'button-secondary': '#26425A', // Example of another custom color with the name 'secondary'
        'button-secondary-hover': '#26425B', // Example of another custom color with the name 'secondary'
      }
    },
  },
  plugins: [],
}

