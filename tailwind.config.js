/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "vizon-logo": "url('assets/images/vizonlogo.png')"
      }
    },
  },
  plugins: [],
};
