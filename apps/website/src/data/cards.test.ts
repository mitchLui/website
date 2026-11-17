import { expect, test } from 'vitest';
import { imageFor, toArchiveEntry, toProjectCard } from './cards';
import { projects } from './projects';
import { rolesFor } from './roles';

test('maps a project thumbnail to its png and webp assets', () => {
  expect(imageFor(projects.hpc)).toEqual({
    src: '/project-assets/png/hpc.png',
    webpSrc: '/project-assets/webp/hpc.webp',
    alt: 'hpc screenshot'
  });
});

test('gives professional project cards the current role impact and others none', () => {
  expect(toProjectCard('wise-internship', projects['wise-internship']).highlights).toEqual(rolesFor('wise-internship')[0].impact);
  expect(toProjectCard('hpc', projects.hpc).highlights).toBeUndefined();
});

test('describes an archive entry by start month and awards, tagged with its kind', () => {
  expect(toArchiveEntry('mask-detector', projects['mask-detector'])).toEqual({
    title: 'Mask Detector',
    href: '/work/mask-detector',
    meta: 'Apr 2021 · Overall best prize · Most verified · Most gamified',
    tag: { label: 'Hackathon', color: 'orange' }
  });
});

test.each([
  ['hpc', 'Academic', 'blue'],
  ['greenmap', 'Hackathon', 'orange'],
  ['flat-finder', 'Personal', 'olive']
])('tags the %s archive entry as %s in %s', (id, label, color) => {
  expect(toArchiveEntry(id, projects[id]).tag).toEqual({ label, color });
});
