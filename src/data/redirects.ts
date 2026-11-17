export const redirects: Record<string, string> = {
  '/linkedin': 'https://linkedin.com/in/mitchlui',
  '/github': 'https://github.com/mitchlui'
};

export const redirectFor = (pathname: string): string | undefined => redirects[pathname.replace(/\/$/, '')];
