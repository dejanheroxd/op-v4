/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        common: "0px 0px 30px rgba(0, 0, 0, 0.8)",
        uncommon: "0px 0px 30px rgba(0, 128, 0, 0.8)",
        rare: "0px 0px 30px rgba(0, 0, 255, 0.8)",
        epic: "0px 0px 30px rgba(128, 0, 128, 0.8)",
        legendary: "0px 0px 30px rgba(255, 165, 0, 1)",
      },
      backgroundColor: {
        common: "rgba(0, 0, 0, 0.8)",
        uncommon: "rgba(0, 128, 0, 0.8)",
        rare: "rgba(0, 0, 255, 0.8)",
        epic: "rgba(128, 0, 128, 0.8)",
        legendary: "rgba(255, 165, 0, 1)",
      },
    },
  },
  plugins: [],
};
