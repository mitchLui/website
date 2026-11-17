import { expect, test } from 'vitest';
import { redirectFor } from './redirects';

test.each(['/github', '/github/'])('%s resolves to its target', path => {
  expect(redirectFor(path)).toBe('https://github.com/mitchlui');
});

test('unknown paths have no target', () => {
  expect(redirectFor('/nope')).toBeUndefined();
});
