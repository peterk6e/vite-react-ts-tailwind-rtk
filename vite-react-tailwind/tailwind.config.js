module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkGray: "rgb(104, 109, 118)",
        veryDarkGray: "rgb(55, 58, 64)",
        lightBlue: "rgb(25, 211, 218)",
        veryLightGray: "rgb(238, 238, 238)"
      },
    },
  },
  plugins: [],
};
