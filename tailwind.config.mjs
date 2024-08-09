import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'app-primary': '#000000',
        'app-accent': '#EB0A1E',
        'app-text': '#373737',
        'app-bg-primary': '#FFFFFF',
        'app-bg-secondary': '#F7F7F7',
        'app-bg-tertiary': '#E5E5E5',
      },
    },
  },
  plugins: [],
};
