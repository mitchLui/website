import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { createRoutesStub } from 'react-router';
import { FeaturedProject } from './FeaturedProject';
import { ProfessionalProject, projects } from '../../data/projects';
import { rolesFor } from '../../data/roles';

const renderFeatured = (id: string) => {
  const Stub = createRoutesStub([{
    path: '/',
    Component: () => <FeaturedProject id={id} project={projects[id] as ProfessionalProject}/>
  }]);
  return render(<Stub />);
};

const textOf = (elements: Element[]) => elements.map(element => element.textContent);

test('renders the project title as a heading', async () => {
  const screen = await renderFeatured('wise');
  await expect.element(screen.getByRole('heading', { name: projects.wise.title })).toBeVisible();
});

test('renders a level label for each role', async () => {
  const screen = await renderFeatured('wise');
  const roles = rolesFor('wise');
  const labels = textOf(screen.getByRole('term').elements());
  expect(labels).toHaveLength(roles.length);
  labels.forEach((label, index) => expect(label).toContain(roles[index].level));
});

test('renders only the top impact item per role when the project has several roles', async () => {
  const screen = await renderFeatured('wise');
  expect(textOf(screen.getByRole('definition').elements())).toEqual(rolesFor('wise').map(role => role.impact[0]));
});

test('renders every impact item when the project has a single role', async () => {
  const screen = await renderFeatured('wise-internship');
  expect(textOf(screen.getByRole('definition').elements())).toEqual(rolesFor('wise-internship')[0].impact);
});

test('renders a Learn more action linking to the project page', async () => {
  const screen = await renderFeatured('wise');
  await expect.element(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '/work/wise');
});

test.each(['wise', 'wise-internship'])('renders the %s screenshot at a 16:10 ratio', async id => {
  const screen = await renderFeatured(id);
  const image = screen.getByRole('img');
  await expect.element(image).toBeVisible();
  const element = image.element() as HTMLImageElement;
  await element.decode();
  expect(element.clientWidth / element.clientHeight).toBeCloseTo(16 / 10, 1);
});
