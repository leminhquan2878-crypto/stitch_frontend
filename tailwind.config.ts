/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056B3',
        'brand-blue': '#0056B3',
        surface: '#ffffff',
        background: '#f8fafd',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
        full: '9999px',
      },
      boxShadow: {
        card: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        button: '0px 4px 8px rgba(0, 86, 179, 0.2)',
        sidebar: '4px 0px 24px 0px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
}
