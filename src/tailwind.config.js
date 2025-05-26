export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
        accent: '#9333ea',
        background: '#0f172a',
        card: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['"Outfit"', 'ui-sans-serif', 'system-ui'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(56, 189, 248, 0.4)',
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
