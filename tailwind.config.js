/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss')
module.exports = withAnimations({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  themes: [
    {
      teksadeDark: {
        "primary": "#4338CA",
        "secondary": "#d926a9",
        "accent": "#1fb2a6",
        "neutral": "#2a323c",
        "base-100": "#111929",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#f87272",
      },
      teksadeLight: {
        "primary": "#4338CA",
        "secondary": "#d926a9",
        "accent": "#1fb2a6",
        "neutral": "#2a323c",
        "base-100": "#F5F5F5",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
        "error": "#f87272",
      },
    },
  ],
})
