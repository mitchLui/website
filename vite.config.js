import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), eslintPlugin(), svgr()],
  build: {
    outDir: 'build'
  },
  server: {
    open: true,
    port: 3000
  }
});
