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
    extend: {
      colors: {
        DarkGray: "hsl(0, 0%, 63%)",
        Black: "hsl(0, 0%, 0%)",
        White: "hsl(0, 0%, 100%)",
        VeryDarkGray: "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        spartan: ["var(--font-spartan)"],
      },
    },
  },
  plugins: [],
};
