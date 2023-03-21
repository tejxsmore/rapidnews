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
      dark: "#1A120B",
      light: "#E5E5CB",
      pink: "#F10086",
      green: "#1F441E",
      grass: "#CEE6B4",
    },
    extend: {},
  },
  plugins: [],
};
