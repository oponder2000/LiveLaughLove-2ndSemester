/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        hc1: {
          "primary": "#2563eb",
      
          "secondary": "#ec4899",
                   
          "accent": "#7dd3fc",
                   
          "neutral": "#2563eb",
                   
          "base-100": "#fbbf24",
        },
        hc2: {
          "primary": "#5b21b6",
          
          "secondary": "#ec4899",
                   
          "accent": "#7dd3fc",
                   
          "neutral": "#5b21b6",
                   
          "base-100": "#22c55e",
        },
        hc3: {
          "primary": "#f472b6",
          
          "secondary": "#ec4899",
                   
          "accent": "#7dd3fc",
                   
          "neutral": "#f472b6",
                   
          "base-100": "#fef08a",
        },
        hc4: {
          "primary": "#ca8a04",
          
          "secondary": "#ec4899",
                   
          "accent": "#7dd3fc",
                   
          "neutral": "#ca8a04",
                   
          "base-100": "#34d399",
        },
      },
      "dark",
      "light",
      "cupcake",
    ],
  },
}