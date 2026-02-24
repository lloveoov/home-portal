/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dashboard-bg': '#f0f4f8',
        'card-bg': '#ffffff',
      },
    },
  },
  plugins: [],
}
