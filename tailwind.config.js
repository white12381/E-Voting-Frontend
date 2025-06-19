/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004080', 
        secondary: '#001119',
        Sec03: "#CC8400", 
        customBlack: '#001119',
        
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"] 
      }
    },
    
  },
  plugins: [],
}