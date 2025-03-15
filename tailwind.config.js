/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#FF4B26',
        'orange-hover': '#FF6B46',
        'dark-bg': '#111111',
        'dark-card': '#1A1A1A',
        'dark-border': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};