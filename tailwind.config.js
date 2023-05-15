/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: "#000000",
      light: "#F9FBE7",
      red: "#FF0000",
      pink: "#CF0A0A",
      green: "#4E9F3D",
    },
    extend: {},
  },
  plugins: [],
};
