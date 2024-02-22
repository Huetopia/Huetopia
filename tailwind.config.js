/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '30': '30%',
      },
      minHeight: {
        'vh': '90vh',
      },
      minWidth: {
        'sm': '620px',
        'md': '768px',
        'lg': '980px',
      }

    },
    
    colors: {
      "bggrey": "#F4F4F4",
      "grey": "#828282",
      "drk-grey": "#626262",
      "neutral": "#374151",
      "white": "#fff",
      "linkedIn": "#0077B5",
      "github": "#333",
    },
    backgroundImage: {
      'home': "url('/src/assets/bg.png')",
      '404': "url('/src/assets/errorPage.jpg')",
    }
  },
  plugins: [
    require("tailwindcss"),
    require("daisyui"),
    require("autoprefixer"),
  ],
};
