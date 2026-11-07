/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bronze: '#996633',
          'bronze-hover': '#805325',
          gold: '#DAA674',
          'gold-light': '#ebd2b8',
          champagne: '#F5EFE6',
          cream: '#FBF9F5',
          sand: '#ECE6DC',
          black: '#090909',
          dark: '#121214',
          surface: '#1A1A1E',
          charcoal: '#26262B',
          gray: '#E2E1E1',
          muted: '#8E8E93',
        }
      },
      fontFamily: {
        serif: ['var(--font-editorial)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-lato)', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.2em',
        'subtle': '0.05em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'luxury-hover': '0 30px 60px -12px rgba(153, 102, 51, 0.25)',
        'gold-glow': '0 0 30px rgba(218, 166, 116, 0.25)',
      }
    },
  },
  plugins: [],
};
