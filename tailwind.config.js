/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      transitionTimingFunction: {
        slide: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: {
          100: '#FFF2D7',
          200: '#FFE0B5',
          300: '#F8C794',
          400: '#D8AE7E',
          500: '#e1b382',
          600: '#c89666',
        },
        secondary: {
          400: '#2d545e',
          500: '#12343b',
        },
      },
      text: {
        100: '#F8F9FA',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#6C757D',
        700: '#495057',
        800: '#343A40',
        900: '#212529',
      },

      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        blink: 'blink 2s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite linear',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
