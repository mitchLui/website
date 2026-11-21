/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: process.env.STORYBOOK ? [react()] : process.env.VITEST ? [] : [reactRouter()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  server: {
    open: true,
    port: 3000
  },
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
    testTimeout: 60_000,
    hookTimeout: 60_000
  }
});
