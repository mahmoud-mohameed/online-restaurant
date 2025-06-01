/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        titlecolor :'#000000',
        bodyColor: 'rgb(255, 204, 153)',
        
        
      }
      },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "425px",
      md: "667px",
      mdl: "768px",
      lg: "860px",
      lgl: "1024px",
      xl: "1280px",
      lxl: "1536px",
    
    },
    
    
  },
  plugins: [],
}