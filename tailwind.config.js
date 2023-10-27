module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        red: { 500: "#ea4335", 600: "#e23434" },
        gray: {
          50: "#f6f8f9",
          100: "#f3f3f3",
          300: "#dbdddd",
          400: "#b7babc",
          500: "#93989a",
          900: "#15161d",
          901: "#181a26",
          "900_ab": "#181a26ab",
          "500_3f": "#93989a3f",
          "400_4c": "#cacaca4c",
          "400_33": "#cacaca33",
          "900_26": "#130c1a26",
          "900_67": "#15161d67",
          "500_ab": "#93989aab",
          "900_5f": "#15161d5f",
        },
        indigo: { A200: "#6271eb", A200_54: "#6170eb54" },
        blue: { A200: "#4196fa", A201: "#4285f4" },
        green: { 600: "#42a846", 601: "#34a853" },
        black: { 900: "#010101", 901: "#0f0f0f" },
        white: { A700_ab: "#ffffffab", A700_a2: "#ffffffa2", A700: "#ffffff" },
        amber: { 500: "#fbbc05" },
      },
      fontFamily: { outfit: "Outfit", urbanist: "Urbanist" },
      boxShadow: {
        bs2: "0px 4px  100px 0px #cacaca4c",
        bs1: "0px 4px  100px 0px #cacaca33",
        bs: "0px 4px  80px 0px #93989a3f",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#6271eb,#6170eb54)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
