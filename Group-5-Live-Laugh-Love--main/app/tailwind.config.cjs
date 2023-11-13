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
        mytheme: {
        "primary": "#f59e0b",
        "secondary": "#2563eb",
        "accent": "#ec4899",
        "neutral": "#7c3aed",
        },
      },
      "dark",
      "light",
      "cupcake",
    ],
  },
}