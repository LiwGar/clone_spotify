/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1fdf64',
          greenlight:' #1ed760',
          black: '#000000',
          white: '#ffffff',
          gray: '#121212',
          lightgray: '#1e1e1e',
        },

      },
    },
  },
  plugins: [],
}
