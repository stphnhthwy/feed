/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/subframe/ui/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("./src/components/subframe/ui/tailwind.config.js")]
}

