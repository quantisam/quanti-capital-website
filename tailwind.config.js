/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Quanti Capital Dark Theme Color System (from Figma)
      colors: {
        // Brand accents (from Option A Transparent logo)
        brand: {
          gold: '#FAD961',
          orange: '#F76B1C',
        },
        // Core Dark Theme
        dark: {
          bg: '#0A0A0A',           // Main background (rgb 0.039)
          surface: '#141414',      // Elevated surfaces
          border: 'rgba(255, 255, 255, 0.05)',  // Subtle borders
          'border-light': 'rgba(255, 255, 255, 0.10)',  // More visible borders
        },
        // Glass Effects
        glass: {
          bg: 'rgba(0, 0, 0, 0.40)',        // Header/nav background
          'bg-light': 'rgba(255, 255, 255, 0.05)',  // Cards/containers
          border: 'rgba(255, 255, 255, 0.10)',
        },
        // Text Colors
        text: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.70)',
          muted: 'rgba(255, 255, 255, 0.50)',
          dim: 'rgba(255, 255, 255, 0.30)',
        },
        // Status Colors
        status: {
          positive: '#34C759',  // Green for + changes
          negative: '#FF3B30',  // Red for - changes
          neutral: 'rgba(255, 255, 255, 0.50)',
        },
        // Legacy iOS colors (kept for compatibility)
        ios: {
          blue: '#007AFF',
          green: '#34C759',
          red: '#FF3B30',
        },
      },
      // Typography - Inter (from Figma)
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      // Typography Scale (from Figma design)
      fontSize: {
        // Display sizes
        'display-xl': ['96px', { lineHeight: '1.0', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-lg': ['72px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-md': ['48px', { lineHeight: '1.15', fontWeight: '600', letterSpacing: '-0.01em' }],
        'display-sm': ['36px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        // Heading sizes
        'heading-xl': ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-lg': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'heading-md': ['18px', { lineHeight: '1.5', fontWeight: '500' }],
        // Body sizes
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        // Label sizes
        'label': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'label-sm': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      // Spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      // Border Radius (from Figma)
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'pill': '9999px',
      },
      // Box Shadow (from Figma)
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.10)',
        'header': '0 25px 50px -12px rgba(0, 0, 0, 0.50)',
        'button-glow': '0 0 15px rgba(255, 255, 255, 0.30)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.10)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.20)',
      },
      // Backdrop Blur
      backdropBlur: {
        'glass': '20px',
        'heavy': '40px',
      },
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'ticker': 'ticker 30s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
