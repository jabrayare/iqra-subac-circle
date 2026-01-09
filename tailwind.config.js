/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Colors (matching iOS app)
        'deep-ocean-blue': '#1e3a8a',
        'warm-sunset-orange': '#f97316',
        'pure-white': '#ffffff',
        'midnight-navy': '#0f172a',
        'slate-gray': '#64748b',
        'soft-cloud': '#f1f5f9',
        
        // Adaptive Colors
        'brand-surface': {
          light: '#f8fafc',
          dark: '#1e293b'
        },
        'text-primary': {
          light: '#0f172a',
          dark: '#f1f5f9'
        },
        'text-secondary': {
          light: '#64748b',
          dark: '#94a3b8'
        },
        
        // Accent Colors
        'accent-green': '#10b981',
        'accent-red': '#ef4444',
        'accent-amber': '#f59e0b',
        
        // Islamic Theme Colors
        'islamic-gold': '#d4af37',
        'mosque-teal': '#008080',
        'prayer-blue': '#4682b4',
        'quran-green': '#228b22'
      },
      fontFamily: {
        'display': ['Inter', 'SF Pro Display', '-apple-system', 'sans-serif'],
        'body': ['Inter', 'SF Pro Text', '-apple-system', 'sans-serif'],
        'arabic': ['Amiri', 'Scheherazade New', 'serif']
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'islamic-pattern': "url('/patterns/islamic-pattern.svg')",
        'mosque-silhouette': "url('/images/mosque-silhouette.svg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}