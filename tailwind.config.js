/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            primary: '#1f2937',
            accent: '#10b981',
          },
        },
        spacing: {
          section: '2rem',
        },
        borderRadius: {
          xl: '1rem',
        },
      },
    },
    plugins: [],
  }