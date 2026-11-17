import type { StorybookConfig } from '@storybook/react-vite';
import { baseConfig, staticDir } from '@mitchlui/storybook-config/main';

const config: StorybookConfig = {
  ...baseConfig,
  stories: ['../src/**/*.stories.tsx'],
  staticDirs: [staticDir, '../public']
};
export default config;
