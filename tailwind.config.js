/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "460px",
      sm600: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1480px",
    },
    extend: {
      colors: {
        primary: "#027E6F",
        secondary: "#EAEEF2",
        stroke: "#6D758D",
        text: "#0E101A",
        light_gray: "#6A7282",
        background: "#FFF",
        background_secondary: "#FCFCF5",
      },
      fontFamily: {
       primary: ["Inter", "system-ui", "sans-serif"],
       secondary: ["Noto Sans", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
