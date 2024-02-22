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
      "neutral": "#374151"
    },
    backgroundImage: {
      'home': "url('./src/assets/bg.png')",
    }
  },
  plugins: [
    require("tailwindcss"),
    require("daisyui"),
    require("autoprefixer"),
  ],
};
