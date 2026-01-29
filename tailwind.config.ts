import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // GDG Brand Colors (Google's official palette)
        gdg: {
          blue: {
            DEFAULT: '#4285F4',
            light: '#8AB4F8',
            dark: '#1967D2',
          },
          red: {
            DEFAULT: '#EA4335',
            light: '#F28B82',
            dark: '#C5221F',
          },
          yellow: {
            DEFAULT: '#FBBC05',
            light: '#FDD663',
            dark: '#F9AB00',
          },
          green: {
            DEFAULT: '#34A853',
            light: '#81C995',
            dark: '#188038',
          },
        },
        // Neutral colors
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
