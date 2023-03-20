/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pink: "#fda4af",
      darkpink: "#fb7185",
      slate: "#94a3b8",
      darkslate: "#64748b",
      dark: "#171717",
      light: "#fafafa",
    },
    extend: {},
  },
  plugins: [],
};
