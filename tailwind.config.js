/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "bggrey": "#F4F4F4",
      "grey": "#828282",
      "neutral": "#374151"
    }
  },
  plugins: [
    require("tailwindcss"),
    require("daisyui"),
    require("autoprefixer"),
  ],
};
