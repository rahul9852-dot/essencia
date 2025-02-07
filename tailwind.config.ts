import type { Config } from 'tailwindcss';

const config: Config = {
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
        blue: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#006FEE',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        purple: {
          50: '#F2EAFA',
          100: '',
          200: '#C9A9E9',
          300: '#AE7EDE',
          400: '#9353D3',
          500: '#7828C8',
          600: '#6020A0',
          700: '#481878',
          800: '#301050',
          900: '#180828',
        },
        green: {
          50: '#E8FAF0',
          100: '#D1F4E0',
          200: '#A2E9C1',
          300: '#74DFA2',
          400: '#45D483',
          500: '#17C964',
          600: '#12A150',
          700: '#0E793C',
          800: '#095028',
          900: '#052814',
        },
        red: {
          50: '#FEE7EF',
          100: '#FDD0DF',
          200: '#FAA0BF',
          300: '#F871A0',
          400: '#F54180',
          500: '#F31260',
          600: '#C20E4D',
          700: '#920B3A',
          800: '#610726',
          900: '#310413',
        },
        yellow: {
          50: '#FEFCE8',
          100: '#FDEDD3',
          200: '#FBDBA7',
          300: '#F9C97C',
          400: '#F7B750',
          500: '#F5A524',
          600: '#C4841D',
          700: '#936316',
          800: '#62420E',
          900: '#312107',
        },
        zinc: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        primary: {
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        secondary: {
          600: '#D97706',
          700: '#B45309',
        },
        accent: {
          500: '#292221',
        },
        neutral: {
          500: '#6B7280',
        },
        heroSection: {
          900: '#292221',
        },
        progressBar: {
          500: '#292221',
        },
        movingMarquee: {
          500: '#9c6d4e',
        },
        modalBg: {
          500: '#BCB3AE',
        },
        modalHoverText: {
          500: '#ff5019',
        },
        modalImgBg: {
          500: '#9c6d4e',
        },
        modalImgBlur1: {
          500: '#292221',
        },
        modalImgBlur2: {
          500: '#9c6d4e',
        },
        modalImgBlur3: {
          500: '##232323',
        },
        modalImgBlur4: {
          500: '#9c6d4e',
        },
        modalImgBlur5: {
          500: '#292221',
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
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
      },
    },
  },
  plugins: [],
};

export default config;
