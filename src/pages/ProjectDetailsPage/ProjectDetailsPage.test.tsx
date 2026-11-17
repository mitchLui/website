import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { createRoutesStub } from 'react-router';
import { ProjectDetailsPage } from './ProjectDetailsPage';

const Stub = createRoutesStub([{ path: '/:company/projects/:projectId', Component: ProjectDetailsPage }]);

test('renders a known project', async () => {
  const screen = await render(<Stub initialEntries={['/wise/projects/wise']} />);
  await expect.element(screen.getByRole('heading', { name: 'Wise - Business Account Management' })).toBeVisible();
});

test('renders the not found page for an unknown project', async () => {
  const screen = await render(<Stub initialEntries={['/wise/projects/does-not-exist']} />);
  await expect.element(screen.getByRole('heading', { name: '404 Not Found!' })).toBeVisible();
});
