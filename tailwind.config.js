
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          default: "#222",
        },
        blue: {
          default: "#0c174b",
        },
        green: {
          default: "#46FC6F",
          lightgreen:"#39AB53"
        },
        grey: {
          default: "#A5A4A1",
        },
        Offwhite: {
          default: "white",
        },
        white: {
          light:"#FBFAF5"
        },
        gradFrom: "#a98dee",
        gradTo:"#efa7ef",
      },
      fontFamily:{
        mont:['Montserrat','ui-monospace']
      }
    },
  },
  plugins: [],
}
