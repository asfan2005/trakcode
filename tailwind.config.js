/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      height: {
        '18': '4.5rem',
      },
      spacing: {
        '0.25': '0.0625rem', // 1px
        '0.75': '0.1875rem', // 3px
      },
      fontSize: {
        'xxs': '0.625rem', // 10px
        '2xs': '0.6875rem', // 11px
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideDown': 'slideDown 0.3s ease-in-out',
        'slideUp': 'slideUp 0.3s ease-in-out',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      borderWidth: {
        '1': '1px',
      },
      maxWidth: {
        '8xl': '90rem', // 1440px
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      const animationDelayUtilities = {}
      for (let i = 1; i <= 10; i++) {
        animationDelayUtilities[`.animation-delay-${i * 100}`] = {
          'animation-delay': `${i * 0.1}s`,
        }
      }
      animationDelayUtilities['.animation-delay-2000'] = {
        'animation-delay': '2s',
      }
      animationDelayUtilities['.animation-delay-3000'] = {
        'animation-delay': '3s',
      }
      animationDelayUtilities['.animation-delay-4000'] = {
        'animation-delay': '4s',
      }
      addUtilities(animationDelayUtilities)
    }
  ],
}

