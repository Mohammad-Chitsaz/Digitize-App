/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "475px",
      // => @media (min-width: 475px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        sans: ["iranYekan"],
      },
      boxShadow: {
        "3xl": ["rgba(0, 0, 0, 0.35) 0px 1px 10px"],
      },
      boxShadow: {
        't': '0 -10px 40px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
