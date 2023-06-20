/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Courgette: ['Courgette', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
      colors: {
        primaryDark: '#00040f',
        secondaryDark: '#111315',
        bgDark: '#1e2125',
        bgBlue: '#0b7285',
        bgBlue1: ' #3bc9db',
      },
    },
  },
  plugins: [],
};
