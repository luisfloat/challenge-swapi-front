/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      keyframes: {
        skeleton: {
          "0%": {
            backgroundPosition: "0% 0",
          },
          "50%": {
            backgroundPosition: "100% 0",
          },
          "100%": {
            backgroundPosition: "0% 0",
          },
        },
      },
      animation: {
        skeleton: "skeleton 4s linear infinite",
      },
    },
  },
  plugins: [],
};
