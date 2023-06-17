/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clone: {
          background: "#EAEDED",
          light_blue: "#0A9868",
          yellow: "#BAD110",
          DEFAULT: "#0FB87F",
        },
      },
    },
  },
  plugins: [],
};
