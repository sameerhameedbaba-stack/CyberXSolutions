import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F6F7FB',
          100: '#ECEEF6',
          200: '#D8DCEA',
          300: '#B6BDD4',
          // 400 and 500 are the muted-text tokens on white. Both are tuned to
          // clear 4.5:1 against #fff so small captions stay WCAG AA.
          400: '#67718F',
          500: '#565F81',
          600: '#4A5378',
          700: '#374061',
          800: '#232B47',
          900: '#141A31',
          950: '#080C1B',
        },
        brand: {
          50: '#EEF4FF',
          100: '#DAE6FF',
          200: '#BDD2FF',
          300: '#90B4FF',
          400: '#5C8CFF',
          500: '#2F6BFF',
          600: '#1A4CF0',
          700: '#153ACD',
          800: '#1631A5',
          900: '#182F82',
          950: '#111D4F',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        emerald: {
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        sunset: {
          50: '#FFF6ED',
          100: '#FFEAD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
        blossom: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Fluid, viewport-aware scale. Min values are mobile-safe; max values are desktop-luxurious.
        'display-2xl': ['clamp(3rem, 1.2rem + 7.2vw, 6.75rem)', { lineHeight: '0.95', letterSpacing: '-0.045em', fontWeight: '800' }],
        'display-xl': ['clamp(2.5rem, 1.1rem + 5.6vw, 5.25rem)', { lineHeight: '0.98', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-lg': ['clamp(2.125rem, 1.1rem + 4.1vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-md': ['clamp(1.875rem, 1.15rem + 2.9vw, 3.125rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['clamp(1.5rem, 1.15rem + 1.4vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        'lead-lg': ['clamp(1.125rem, 1.02rem + 0.42vw, 1.4375rem)', { lineHeight: '1.55', letterSpacing: '-0.011em' }],
        'lead': ['clamp(1.0625rem, 1rem + 0.26vw, 1.25rem)', { lineHeight: '1.6', letterSpacing: '-0.008em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.16em', fontWeight: '650' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        section: 'clamp(4.5rem, 2.5rem + 8vw, 9.5rem)',
        'section-sm': 'clamp(3.25rem, 2rem + 5vw, 6.5rem)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
        '6xl': '3.5rem',
      },
      maxWidth: {
        prose: '68ch',
        container: '84rem',
      },
      boxShadow: {
        // Layered, physically-plausible shadows. Never a single flat blur.
        'lift-sm': '0 1px 2px -1px rgb(20 26 49 / 0.08), 0 2px 6px -2px rgb(20 26 49 / 0.06)',
        lift: '0 2px 4px -2px rgb(20 26 49 / 0.06), 0 8px 20px -6px rgb(20 26 49 / 0.10), 0 24px 48px -20px rgb(20 26 49 / 0.10)',
        'lift-lg': '0 4px 8px -4px rgb(20 26 49 / 0.07), 0 16px 36px -10px rgb(20 26 49 / 0.12), 0 48px 88px -32px rgb(20 26 49 / 0.16)',
        'lift-xl': '0 8px 16px -8px rgb(20 26 49 / 0.08), 0 32px 64px -16px rgb(20 26 49 / 0.14), 0 80px 140px -48px rgb(20 26 49 / 0.22)',
        glow: '0 0 0 1px rgb(47 107 255 / 0.12), 0 12px 40px -12px rgb(47 107 255 / 0.42)',
        'glow-violet': '0 0 0 1px rgb(124 58 237 / 0.12), 0 12px 40px -12px rgb(124 58 237 / 0.42)',
        'inner-top': 'inset 0 1px 0 0 rgb(255 255 255 / 0.7)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(105deg, #2F6BFF 0%, #6D5AF8 38%, #A855F7 62%, #EC4899 100%)',
        'brand-gradient-cool': 'linear-gradient(120deg, #06B6D4 0%, #2F6BFF 46%, #7C3AED 100%)',
        'brand-gradient-warm': 'linear-gradient(120deg, #7C3AED 0%, #EC4899 52%, #F97316 100%)',
        'brand-gradient-fresh': 'linear-gradient(120deg, #10B981 0%, #06B6D4 50%, #2F6BFF 100%)',
        'sheen': 'linear-gradient(100deg, transparent 20%, rgb(255 255 255 / 0.65) 50%, transparent 80%)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translate3d(0, 22px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -22px, 0) rotate(1.5deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(4%, -6%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 4%, 0) scale(0.95)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        shimmer: {
          from: { transform: 'translate3d(-120%, 0, 0)' },
          to: { transform: 'translate3d(120%, 0, 0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.75)', opacity: '0.55' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'dash-flow': {
          to: { strokeDashoffset: '-1000' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'blink-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        'bar-rise': {
          from: { transform: 'scaleY(0.05)' },
          to: { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'float-slow': 'float-slow 11s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        drift: 'drift 22s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'gradient-pan': 'gradient-pan 9s ease-in-out infinite',
        marquee: 'marquee 46s linear infinite',
        shimmer: 'shimmer 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-ring': 'pulse-ring 3.2s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        'dash-flow': 'dash-flow 14s linear infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
        'blink-soft': 'blink-soft 2.4s ease-in-out infinite',
      },
      transitionTimingFunction: {
        // The house easing curve — used for every interactive transition.
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'smooth-in': 'cubic-bezier(0.64, 0, 0.78, 0)',
      },
    },
  },
  plugins: [],
};

export default config;
