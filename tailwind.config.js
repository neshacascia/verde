/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        league: ['League Spartan'],
      },
      colors: {
        beaver: '#9E7F66',
        codGray: '#111',
        ebonyClay: '#242B37',
      },
      backgroundImage: {
        heroHomeMobile: "url('../../public/assets/home/mobile/hero.jpg')",
        readyMobile: "url('../../public/assets/home/mobile/ready-bg.jpg')",
      },
    },
  },
  plugins: [],
};
