import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  build: {
    outDir: 'build'
  },
  server: {
    open: true,
    port: 3000
  }
});
