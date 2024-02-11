/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonColor: "#36e364",
        primaryColor: "#5b21b6",
      },
    },
  },
  plugins: [],
};
