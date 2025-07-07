/** @type {import('tailwindcss').Config} */
export const content = [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
    },
};
export const plugins = [];