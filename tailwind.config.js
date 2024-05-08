/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Extiende o agrega colores personalizados al tema.
      colors: {
        'dark': '#232A3C', // Define un color llamado 'dark' con el valor '#232A3C'.
        'medium': '#293245', // Define un color llamado 'medium' con el valor '#293245'.
      },
      
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Define un gradiente radial.
      //   "gradient-conic": // Define un gradiente conico.
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
