import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '165.22.99.299', 
    port: 3000       
  },
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
