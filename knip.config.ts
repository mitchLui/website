import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // The font package is only imported from CSS, which knip doesn't read by default.
  compilers: {
    css: (text: string) => [...text.matchAll(/@import\s+['"]([^'"]+)['"]/g)].map(([, source]) => `import '${source}';`).join('\n')
  },
  ignoreDependencies: ['@vitest/browser-playwright']
};

export default config;
