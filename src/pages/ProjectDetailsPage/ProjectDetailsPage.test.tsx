import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { createRoutesStub } from 'react-router';
import { ProjectDetailsPage } from './ProjectDetailsPage';
import { rolesFor } from '../../data/roles';

const Stub = createRoutesStub([{ path: '/work/:projectId', Component: ProjectDetailsPage }]);

const renderProject = (id: string) => render(<Stub initialEntries={[`/work/${id}`]} />);

test('renders the project title, period and technologies', async () => {
  const screen = await renderProject('wise');
  await expect.element(screen.getByRole('heading', { name: 'Wise – Business Account Management' })).toBeVisible();
  await expect.element(screen.getByText('Sep 2023 – Present · Next.js, Java Spring, Kafka')).toBeVisible();
});

test('renders an All work action linking to the work page', async () => {
  const screen = await renderProject('wise');
  await expect.element(screen.getByRole('link', { name: 'All work' })).toHaveAttribute('href', '/work');
});

test.each(['wise', 'wise-internship'])('renders an impact heading for each of the %s roles', async id => {
  const screen = await renderProject(id);
  await expect.element(screen.getByRole('heading', { name: 'Impact' })).toBeVisible();
  const headings = screen.getByRole('heading', { level: 4 }).elements().map(heading => heading.textContent);
  const roles = rolesFor(id);
  expect(headings).toHaveLength(roles.length);
  headings.forEach((heading, index) => expect(heading).toContain(roles[index].title));
});

test('does not render an impact section for a non-professional project', async () => {
  const screen = await renderProject('hpc');
  await expect.element(screen.getByRole('heading', { name: 'Impact' })).not.toBeInTheDocument();
});

test('renders the awards of a hackathon project', async () => {
  const screen = await renderProject('mask-detector');
  await expect.element(screen.getByText('Awards: Overall best prize · Most verified · Most gamified', { exact: true })).toBeVisible();
});

test('renders the not found page for an unknown project', async () => {
  const screen = await renderProject('does-not-exist');
  await expect.element(screen.getByRole('heading', { name: 'Page not found' })).toBeVisible();
});
