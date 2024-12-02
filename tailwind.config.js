/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sm': 'repeat(auto-fill, minmax(200px, 1fr))',
        'lg': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(15px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards'
      }
    },
  },
  plugins: [],
}

