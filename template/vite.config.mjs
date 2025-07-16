import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: './src/renderer/app',
  plugins: [react()],
  base: './',
  build: {
    outDir: '../../../dist',
    emptyOutDir: true,
    minify: 'terser',
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/renderer/app/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/renderer/'),
    },
  },
});
