import { expect, test } from 'vitest';
import { projects } from './projects';
import { roles } from './roles';

test.each(Object.entries(projects))('ends the %s headline with a full stop', (_, project) => {
  expect(project.headline.trim()).toMatch(/\.$/);
});

test.each(roles.flatMap(role => role.impact))('ends the impact item "%s" with a full stop', item => {
  expect(item).toMatch(/\.$/);
});
