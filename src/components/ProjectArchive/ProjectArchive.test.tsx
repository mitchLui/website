import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { createRoutesStub, useParams } from 'react-router';
import { ProjectArchive } from './ProjectArchive';
import { archivedProjects } from '../../data/projects';

const ProjectRoute = () => <h1>Project {useParams().projectId}</h1>;

const Stub = createRoutesStub([
  { path: '/', Component: () => <ProjectArchive projects={archivedProjects}/> },
  { path: '/work/:projectId', Component: ProjectRoute }
]);

test('renders one link per project', async () => {
  const screen = await render(<Stub />);
  expect(screen.getByRole('link').elements()).toHaveLength(archivedProjects.length);
});

test('navigates to the project page when the row metadata is clicked', async () => {
  const screen = await render(<Stub />);
  await screen.getByText('Hackathon · Apr 2021 · Overall best prize · Most verified · Most gamified').click();
  await expect.element(screen.getByRole('heading', { name: 'Project mask-detector' })).toBeVisible();
});
