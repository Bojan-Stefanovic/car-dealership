/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Orbitron", "sans-serif"],
      },
      // Optionally, define custom font weights if needed
      fontWeight: {
        // Replace '<weight>' with your specific weights
        // Example: 'normal': 400, 'medium': 500, ...
      },
      boxShadow: {
        noOffset: "0 0 16px rgba(0, 0, 0, 0.25)", // Custom shadow
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
        28: "repeat(28, minmax(0, 1fr))",
      },
      screens: {
        xs: "550px",
        xxs: "488px",
        xxxs: "400px",
        smallest: "300px",
      },
    },
  },
  plugins: [],
};
