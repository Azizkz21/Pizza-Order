/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["serif"],
      },
      colors: {
        black2: "#2C2C2C",
        tabBg: "#F9F9F9",
        link: "#FE5F1E",
        cardBg: "#F3F3F3",
        gray2: "#B6B6B6",
        gray3:"#777777",
        br: "#F6F6F6",
        back:"#D3D3D3",
        textGray:"#8D8D8D",
        linebasket: "rgba(255, 255, 255, 0.25)"
      },
      maxWidth: {
        mainContainer: "1225px",
      },
      borderRadius: {
        rounded4xl : "30px"
      }, 
      width: {
        w1 : "1px"
      },
      height: {
        h25 : "25px"
      }
    },
  },
  plugins: [],
};
