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
          green: '#1db954',
          greenlight:' #1ed760',
          black: '#191414',
          white: '#ffffff',
          gray: '#B3B3B3',
          lightgray: '#282828',
        },

      },
    },
  },
  plugins: [],
}
