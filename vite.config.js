import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        works: resolve(import.meta.dirname, 'works.html'),
      },
    },
  },
});