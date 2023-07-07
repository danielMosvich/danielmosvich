/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper_1: "#f8f5ec",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      animation: {
        show: "show 0.4s ease-in-out forwards",
        slide_left: "slide_left 0.4s ease forwards",
        slide_right: "slide_right 0.4s ease forwards",
      },
      keyframes: {
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slide_left: {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(0px)" },
        },
        slide_right: {
          "0%": { transform: "translate(100%)" },
          "100%": { transform: "translate(0px)" },
        },
      },
    },
  },
  plugins: [],
};
