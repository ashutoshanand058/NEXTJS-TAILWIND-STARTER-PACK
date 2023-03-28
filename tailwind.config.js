/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    xs: '480px',
    sm: '640px', // => @media (min-width: 640px) { ... }
    md: '768px', // => @media (min-width: 1024px) { ... }
    lg: '1024px', // => @media (min-width: 1280px) { ... }
    xl: '1280px',
    '2xl': '1560px',
  },
};
