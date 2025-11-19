import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        primary: '#6d28d9',
        accent: '#14b8a6',
        muted: '#94a3b8',
      },
      backgroundImage: {
        'grid-light': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.2) 1px, transparent 0)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: '0 20px 45px -35px rgba(15, 23, 42, 0.65)',
      },
    },
  },
  plugins: [],
};

export default config;
