/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        underlineAnimation: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        underlineHover: "underlineAnimation 0.3s ease-out forwards",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      }
    },
  },
  plugins: [],
};
