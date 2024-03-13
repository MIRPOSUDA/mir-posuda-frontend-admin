/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(31 41 55)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
