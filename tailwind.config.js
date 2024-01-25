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
        gradientBackground: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        underlineHover: "underlineAnimation 0.3s ease-out forwards",
        gradientBackgroundAnimate: "gradientBackground 3s ease infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
    },
  },
  spacing: {
    test: "300%",
  },
  backgroundSize: ({theme}) => ({
    auto: "auto",
    cover: "cover",
    contain: "contain",
    ...theme("spacing")
  }),
  plugins: [],
};
