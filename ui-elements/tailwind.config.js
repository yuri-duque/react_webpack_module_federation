import tailwindShared from "../tailwind.shared";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    ...tailwindShared.theme,
    extend: {},
  },
  plugins: [],
};
