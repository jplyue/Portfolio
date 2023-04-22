import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsDir: 'src/images',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project1: resolve(__dirname, 'src/pages/project1.html'),
        project2: resolve(__dirname, 'src/pages/project2.html'),
        project3: resolve(__dirname, 'src/pages/project3.html'),
        project4: resolve(__dirname, 'src/pages/project4.html'),
      },
    },
  },
});
