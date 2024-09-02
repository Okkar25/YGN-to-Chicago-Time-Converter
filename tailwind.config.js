/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "system-ui"],
        Poppins: ["Poppins", "system-ui"],
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
