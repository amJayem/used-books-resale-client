/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F28116",
          secondary: "#0F3592",
          accent: "#00ADA4",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}