import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
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
