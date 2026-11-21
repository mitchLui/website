import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // The font package is only imported from CSS, which knip doesn't read by default.
  compilers: {
    css: (text: string) => [...text.matchAll(/@import\s+['"]([^'"]+)['"]/g)].map(([, source]) => `import '${source}';`).join('\n')
  },
  ignoreDependencies: ['@vitest/browser-playwright'],
  workspaces: {
    'apps/website': {
      // The share card script loads this module through Vite, which knip can't follow.
      entry: ['src/data/shareCards.ts']
    }
  },
  // React Router generates route types during typecheck, which runs after knip in CI.
  ignoreUnresolved: [/\/\+types\//]
};

export default config;
