import { expect, test } from 'vitest';
import { educationTiles, internships, lineFor, previousProject } from './line';
import { archivedProjects, projects } from './projects';

test('puts Wise on the Wise line, other jobs on the early line and everything else on the education line', () => {
  expect(lineFor('wise', projects.wise)).toBe('wise');
  expect(lineFor('asiabots', projects.asiabots)).toBe('early');
  expect(lineFor('mask-detector', projects['mask-detector'])).toBe('education');
});

test('finds the project that started just before', () => {
  expect(previousProject('wise')?.[0]).toBe('hpc');
  expect(previousProject('hpc')?.[0]).toBe('cornell-box');
});

test('has no previous project for the earliest one', () => {
  expect(previousProject('asiabots')).toBeUndefined();
});

test('lists internships newest first', () => {
  expect(internships.map(([id]) => id)).toEqual(['wise-internship', 'asiabots']);
});

test('shows the highlighted projects newest first, then one tile for the rest', () => {
  expect(educationTiles.map(tile => tile.title)).toEqual(['LBM Optimisation', 'GreenMap', 'Mask Detector', 'All projects']);
  expect(educationTiles[1]).toEqual({ href: '/work/greenmap', eyebrow: 'Hackathon · Feb 2022', title: 'GreenMap', detail: 'Honourable Mention' });
  expect(educationTiles.at(-1)).toEqual({ href: '/work', eyebrow: `And ${archivedProjects.length - 3} more`, title: 'All projects', more: true });
});

test('lists internships newest first with their company names', () => {
  expect(internships.map(([id, project]) => [id, project.company])).toEqual([['wise-internship', 'Wise'], ['asiabots', 'Asiabots']]);
});
