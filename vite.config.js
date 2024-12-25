import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   host: '188.166.227.167', 
  //   port: 3500       
  // },
  
  plugins: [react()],
  build: {
    sourcemap: false, // Matikan source map di produksi
    minify: 'terser',
  
    terserOptions: {
      mangle: true, // Ubah nama variabel agar lebih sulit dibaca
      compress: true, // Optimasi kompresi
    }, 
  },

});
