/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f7f9",
          100: "#b3e8ed",
          200: "#80d9e1",
          300: "#4dcad5",
          400: "#3fb6bf",
          500: "#3fb6bf",
          600: "#36a3ab",
          700: "#2d9097",
          800: "#247d83",
          900: "#1b6a6f",
          DEFAULT: "#3fb6bf",
        },
        secondary: {
          50: "#e8eef2",
          100: "#b8c9d6",
          200: "#88a4ba",
          300: "#587f9e",
          400: "#1a4b6d",
          500: "#1a4b6d",
          600: "#154057",
          700: "#103541",
          800: "#0b2a2b",
          900: "#061f15",
          DEFAULT: "#1a4b6d",
        },
        gray: {
          50: "#f5f6f6",
          100: "#e5e7e7",
          200: "#d5d8d8",
          300: "#c5c9c9",
          400: "#b5baba",
          500: "#878d8d",
          600: "#6f7474",
          700: "#575b5b",
          800: "#3f4242",
          900: "#424242",
          DEFAULT: "#878d8d",
        },
        brand: {
          teal: "#3fb6bf",
          "dark-blue": "#1a4b6d",
          gray: "#878d8d",
          white: "#fefffe",
          black: "#424242",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
