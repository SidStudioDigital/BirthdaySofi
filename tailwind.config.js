module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Joyful Pink
        primary: {
          DEFAULT: "#FF6B9D", // joyful-pink
          50: "#FFF5F8", // joyful-pink-50
          100: "#FFE4EC", // joyful-pink-100
          200: "#FFCDD9", // joyful-pink-200
          300: "#FFB6C6", // joyful-pink-300
          400: "#FF9FB3", // joyful-pink-400
          500: "#FF6B9D", // joyful-pink-500
          600: "#E55A8A", // joyful-pink-600
          700: "#CC4977", // joyful-pink-700
          800: "#B23864", // joyful-pink-800
          900: "#992751", // joyful-pink-900
        },
        // Secondary Colors - Supportive Teal
        secondary: {
          DEFAULT: "#4ECDC4", // supportive-teal
          50: "#F0FDFC", // supportive-teal-50
          100: "#CCFBF1", // supportive-teal-100
          200: "#99F6E4", // supportive-teal-200
          300: "#5EEAD4", // supportive-teal-300
          400: "#4ECDC4", // supportive-teal-400
          500: "#14B8A6", // supportive-teal-500
          600: "#0D9488", // supportive-teal-600
          700: "#0F766E", // supportive-teal-700
          800: "#115E59", // supportive-teal-800
          900: "#134E4A", // supportive-teal-900
        },
        // Accent Colors - Sunshine Yellow
        accent: {
          DEFAULT: "#FFE66D", // sunshine-yellow
          50: "#FFFBEB", // sunshine-yellow-50
          100: "#FEF3C7", // sunshine-yellow-100
          200: "#FDE68A", // sunshine-yellow-200
          300: "#FCD34D", // sunshine-yellow-300
          400: "#FBBF24", // sunshine-yellow-400
          500: "#FFE66D", // sunshine-yellow-500
          600: "#D97706", // sunshine-yellow-600
          700: "#B45309", // sunshine-yellow-700
          800: "#92400E", // sunshine-yellow-800
          900: "#78350F", // sunshine-yellow-900
        },
        // Background Colors
        background: "#FEFEFE", // clean-white
        surface: "#F8F9FA", // subtle-gray
        // Text Colors
        text: {
          primary: "#2D3748", // charcoal-gray
          secondary: "#718096", // medium-gray
        },
        // Status Colors
        success: {
          DEFAULT: "#48BB78", // confirmation-green
          50: "#F0FFF4", // confirmation-green-50
          100: "#C6F6D5", // confirmation-green-100
          500: "#48BB78", // confirmation-green-500
          600: "#38A169", // confirmation-green-600
          700: "#2F855A", // confirmation-green-700
        },
        warning: {
          DEFAULT: "#ED8936", // warm-orange
          50: "#FFFAF0", // warm-orange-50
          100: "#FEEBC8", // warm-orange-100
          500: "#ED8936", // warm-orange-500
          600: "#DD6B20", // warm-orange-600
          700: "#C05621", // warm-orange-700
        },
        error: {
          DEFAULT: "#F56565", // clear-red
          50: "#FED7D7", // clear-red-50
          100: "#FEB2B2", // clear-red-100
          500: "#F56565", // clear-red-500
          600: "#E53E3E", // clear-red-600
          700: "#C53030", // clear-red-700
        },
        // Border Colors
        border: {
          light: "#E2E8F0", // light-border
          medium: "#CBD5E0", // medium-border
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'modal': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        'bounce-custom': 'bounce 300ms ease-out',
        'float': 'float 2s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 53%, 80%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '40%, 43%': {
            transform: 'translate3d(0, -8px, 0)',
          },
          '70%': {
            transform: 'translate3d(0, -4px, 0)',
          },
          '90%': {
            transform: 'translate3d(0, -2px, 0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}