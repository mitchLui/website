import { expect, test } from 'vitest';
import { imageFor, toArchiveEntry, toFeaturedProject, toProjectCard } from './cards';
import { featuredProjects, projects } from './projects';
import { rolesFor } from './roles';

const featured = Object.fromEntries(featuredProjects);

test('maps a project thumbnail to its png and webp assets', () => {
  expect(imageFor(projects.hpc)).toEqual({
    src: '/project-assets/png/hpc.png',
    webpSrc: '/project-assets/webp/hpc.webp',
    alt: 'hpc screenshot'
  });
});

test('highlights only the top impact item per role when a project has several roles', () => {
  const { highlights } = toFeaturedProject('wise', featured.wise);
  expect(highlights.map(highlight => highlight.items)).toEqual(rolesFor('wise').map(role => [role.impact[0]]));
});

test('highlights every impact item when a project has a single role', () => {
  const { highlights } = toFeaturedProject('wise-internship', featured['wise-internship']);
  expect(highlights).toEqual([{ label: 'Intern', period: 'Jun 2022 – Sep 2022', items: rolesFor('wise-internship')[0].impact }]);
});

test('labels featured highlights with the role level and period', () => {
  const { highlights, period } = toFeaturedProject('wise', featured.wise);
  expect(highlights.map(({ label, period }) => `${label} ${period}`)).toEqual([
    'Senior Jun 2026 – Present',
    'Mid-level Jun 2025 – Jun 2026',
    'Graduate Sep 2023 – Jun 2025'
  ]);
  expect(period).toBe('Sep 2023 – Present');
});

test('gives professional project cards the current role impact and others none', () => {
  expect(toProjectCard('wise-internship', projects['wise-internship']).highlights).toEqual(rolesFor('wise-internship')[0].impact);
  expect(toProjectCard('hpc', projects.hpc).highlights).toBeUndefined();
});

test('describes an archive entry by kind, start month and awards', () => {
  expect(toArchiveEntry('mask-detector', projects['mask-detector'])).toEqual({
    title: 'Mask Detector',
    href: '/work/mask-detector',
    meta: 'Hackathon · Apr 2021 · Overall best prize · Most verified · Most gamified'
  });
});
