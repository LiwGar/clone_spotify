/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    extend: {
      colors: {
        spotify: {
          green: '#1fdf64',
          greenlight:' #1ed760',
          black: '#000000',
          white: '#ffffff',
          bone: '##919191',
          gray: '#121212',
          lightgray: '#1e1e1e',
        },

      },
    },
  },
  plugins: [],
}
