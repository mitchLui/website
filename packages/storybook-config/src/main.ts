import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

export const staticDir = fileURLToPath(new URL('../static', import.meta.url));

export const baseConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-vitest'],
  framework: { name: '@storybook/react-vite', options: {} },
  managerHead: (head?: string) => `${head ?? ''}<link rel="icon" href="favicon.ico" />`
} satisfies Omit<StorybookConfig, 'stories'>;
