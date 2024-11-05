/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      screens: {
        "2xl": "1440px", // Add a custom screen size at 1440px
      },
    },
  },
  plugins: [daisyui],
};
