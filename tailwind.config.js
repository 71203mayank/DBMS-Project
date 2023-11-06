/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#faf9ff",
        black: "#000",
        white: "#fff",
        cornflowerblue: "#668aee",
        gray: {
          "100": "#27292c",
          "200": "rgba(0, 0, 0, 0.15)",
        },
        backgroundColor: {
          'darkercadetblue': '#003366', // Change this to your desired darker Cadet Blue color
        },
        dimgray: "#6b7178",
        blanchedalmond: "#feeccf",
        cadetblue: "rgba(12, 170, 196, 0.51)",
        darkgray: "#9aa2ac",
        crimson: "#de1c22",
        coral: "#ff742c",
        royalblue: "#376dfe",
        gainsboro: "#e5e5e5",
      },
      spacing: {},
      fontFamily: {
        sora: "Sora",
        "sorts-mill-goudy": "'Sorts Mill Goudy'",
      },
      borderRadius: {
        "base-4": "15.4px",
        "mini-9": "14.9px",
        "76xl-2": "95.2px",
        "xs-5": "11.5px",
        "base-5": "15.5px",
      },
    },
    fontSize: {
      "lgi-2": "19.2px",
      "base-4": "15.4px",
      "11xl-8": "30.8px",
      "sm-5": "13.5px",
      "xs-5": "11.5px",
      "3xs-6": "9.6px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
