/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const browser = {
  enabled: true,
  headless: true,
  provider: playwright(),
  instances: ['light', 'dark'].map(colorScheme => ({
    browser: 'chromium',
    name: colorScheme,
    provider: playwright({ contextOptions: { colorScheme } })
  }))
};

export default defineConfig({
  plugins: [process.env.VITEST || process.env.STORYBOOK ? react() : reactRouter()],
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
    projects: [{
      extends: true,
      test: {
        name: 'node',
        include: ['src/**/*.test.ts'],
        environment: 'node'
      }
    }, {
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(import.meta.dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser
      }
    }]
  }
});
