/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {

        primary: "#1b1d34",
        secondary: "#141526",
        darkGreen: "#434743"
      },

    },
  },
  plugins: [],
}

