/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0072ff',
          600: '#005bcc',
          700: '#004499',
          800: '#002d66',
          900: '#001733',
        },
        secondary: {
          50: '#e6fff8',
          100: '#ccfff1',
          200: '#99ffe3',
          300: '#66ffd5',
          400: '#33ffc7',
          500: '#00ffb9',
          600: '#00cc94',
          700: '#00996f',
          800: '#00664a',
          900: '#003325',
        },
        accent: {
          50: '#eef9e9',
          100: '#ddf3d2',
          200: '#bbe7a5',
          300: '#98da78',
          400: '#76ce4b',
          500: '#54c21e',
          600: '#439b18',
          700: '#327412',
          800: '#224d0c',
          900: '#112706',
        },
        konkan: {
          sea: '#1a73e8',
          coast: '#f8d49f',
          forest: '#2e7d32',
        },
        tech: {
          light: '#f5f5f7',
          silver: '#c4c4c6',
          dark: '#333336',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
      },
    },
  },
  plugins: [],
};