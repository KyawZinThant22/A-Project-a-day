module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    colors : {
      'LightCyan' : 'hsl(193, 38%, 86%)',
      'NeonGreen' : 'hsl(150, 100%, 66%)',
       "GrayishBlue": "hsl(217, 19%, 38%)",
       "DarkGrayishBlue": "hsl(217, 19%, 24%)",
       "DarkBlue":" hsl(218, 23%, 16%)",
       "hover" : " 0 0 30px hsl(150, 100%, 66%)"
    },
    extend: {
      backgroundImage : (theme) => ({
        "Icon" : "url('/src/assets/icon-dice.svg')",
        "Desktopdivider" : "url('/src/assets/pattern-divider-desktop.svg')",
        "MobileDivider" : "url('/src/assets/pattern-divider-mobile.svg')"
      })
    },
  },
  plugins: [],
}
