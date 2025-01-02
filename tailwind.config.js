/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-border": "linear-gradient(#fff, #dcacff 30%, #ad68f3 60%, #2b2883 80%, #0c0c0c)",
      },
    },
  },
  plugins: [],
}

