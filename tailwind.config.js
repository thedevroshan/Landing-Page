/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "custom-float": 'custom-float 2s infinite ease-in-out',
      },
      keyframes: {
        "custom-float":{
          "0%, 100%": { transform: "translateY(4px)" },
          "50%": { transform: "translateY(-5px)"}
        }
      }
    },
  },
  plugins: [],
}

