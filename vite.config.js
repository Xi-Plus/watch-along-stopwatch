import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: 'src/main.js',
      formats: ['iife'],
      name: 'watch-along-stopwatch.js',
      fileName: 'watch-along-stopwatch',
    },
    rollupOptions: {
      output: {
        banner: '',
        footer: '',
      },
    },
  },
});
