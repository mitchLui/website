export const redirects: Record<string, string> = {
  '/linkedin': 'https://linkedin.com/in/mitchlui',
  '/github': 'https://github.com/mitchlui'
};

const withoutTrailingSlash = (pathname: string) =>
  pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

export const redirectFor = (pathname: string): string | undefined => redirects[withoutTrailingSlash(pathname)];
