/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi-Regular", "sans-serif"],
        "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
        "satoshi-black": ["Satoshi-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
