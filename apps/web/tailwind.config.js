/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        sans: ['sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
      },
      fontSize: {
        xxs: ['8px', '12px']
      },
      animation: {
        fadein: "fadeIn 2s ease-in",
        fadeout: "fadeOut 2s ease-out",
        slidedown: "slideDown 1s ease-in-out"
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideDown: {
          "0%": {                      
            transform: 'translateY(-50px)'
          },          
          "100%": {                  
            transform: 'translateY(0)'
          }
        },
      }),
      patterns: {
        opacities: {
            100: "1",
            80: ".80",
            60: ".60",
            40: ".40",
            20: ".20",
            10: ".10",
            5: ".05",
        },
        sizes: {
            1: "0.25rem",
            2: "0.5rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            32: "8rem",
        }
    }
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}
