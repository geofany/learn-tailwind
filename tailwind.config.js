module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          200: '#5FBCFA',
          400: '#18A0FB',
          500: '#0F90E7'
        },
        dark: {
          900: '#2D393D'
        },
        gray: {
          50: '#F5F6F6',
          100: '#E1E8ED',
          200: '#CCD6DD',
          300: '#66757F',
          900: '#66757F'
        },
        green: {
          200: '#B1F25D',
          300: '#84DB15',
          400: '#67B405'
        },
        purple: {
          200: '#C177FC',
          300: '#9718FB',
          400: '#760BCB'
        },
        red: {
          400: '#FF5656'
        },
        yellow: {
          200: '#FFDE68',
          300: '#FBC918',
          400: '#DCAD05'
        },
        white: '#FFFFFF'
      },
      fontSize: {
        tiny: '0.65rem'
      },
      borderRadius: {
        base: '20px'
      },
      boxShadow: {
        base: '0 4px 4px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  variants: {
    extend: {
      fontWeight: ['group-hover']
    }
  },
  plugins: []
}
