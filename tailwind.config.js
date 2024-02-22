/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '30': '30%',
      },
      minHeight: {
        'vh': '100vh',
      }
    },
    
    colors: {
      "bggrey": "#F4F4F4",
      "grey": "#828282",
      "drk-grey": "#626262",
      "neutral": "#374151"
    }
  },
  plugins: [
    require("tailwindcss"),
    require("daisyui"),
    require("autoprefixer"),
  ],
};
