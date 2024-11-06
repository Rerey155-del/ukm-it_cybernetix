/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#ECD6BD',
        merah: '#A82126',
        navbar: '#F7EDE3',
        abu2: '#2D2D2D',
        putihGajelas: '#AF1740',
      },
    },
  },
  plugins: [daisyui],
}
