module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "900": "#1F2126",
          "700": "#1F3797",
          "600": "#3676FF",
          "300": "#5a88bf",
          "200": "#D3DCFF",
          "100": "#ECEFFF",
        },
        accent: {
          "700": "#ea1616",
          "100": "#f6e1e1",
        },
        done: {
          "700": "#0d861a",
          "100": "#d7f3d3",
        },
        secondary: {
          "700": "#97bace"
        },
        base: "#FFF3E3"
      }
    },
  },
  plugins: [],
}
