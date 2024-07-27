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
        'dark': '#1f2937', // Define un color llamado 'dark' con el valor.
        'medium': '#293245', // Define un color llamado 'medium' con el valor '#293245'.
      },
    },
  },
  plugins: [],
};
