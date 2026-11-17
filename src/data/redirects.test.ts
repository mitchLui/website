import { expect, test } from 'vitest';
import { redirectFor } from './redirects';

test.each(['/github', '/github/'])('resolves %s to the GitHub profile', path => {
  expect(redirectFor(path)).toBe('https://github.com/mitchlui');
});

test('returns no target for an unknown path', () => {
  expect(redirectFor('/nope')).toBeUndefined();
});
