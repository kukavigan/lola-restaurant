/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBFAF7',
          100: '#F7F4EE',
          200: '#EFE9DF',
          300: '#E3DACC',
          400: '#C9BFA8',
          500: '#A89F8A',
        },
        charcoal: {
          50: '#2A2826',
          100: '#211F1D',
          200: '#1A1817',
          300: '#131210',
          400: '#0D0C0B',
          500: '#070606',
        },
        wine: {
          50: '#6B1F2A',
          100: '#5C1A24',
          200: '#4D151E',
          300: '#3E1018',
          400: '#2F0C12',
          500: '#20070C',
        },
        accent: {
          DEFAULT: '#7A2230',
          light: '#9A2D3D',
          dark: '#5A1822',
        },
        muted: {
          DEFAULT: '#8C8478',
          light: '#A89F8A',
          dark: '#6B6557',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'wide-sm': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
