/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      customBg: '#ECD6BD',
      merah :  '#A82126' ,
      navbar : '#F7EDE3',
      abu2 : '#2D2D2D'// Warna background kustom
    },},
  },
  plugins: [],
}
