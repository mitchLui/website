import { expect, test } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { createRoutesStub } from 'react-router';
import { NavBar } from './NavBar';

const Stub = createRoutesStub([{ path: '/', Component: NavBar }]);

test('renders the navigation links without a hamburger menu on wide screens', async () => {
  await page.viewport(1280, 800);
  const screen = await render(<Stub />);
  await expect.element(screen.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect.element(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work');
  await expect.element(screen.getByAltText('open hamburger menu')).not.toBeInTheDocument();
});

test('renders a hamburger menu on narrow screens', async () => {
  await page.viewport(375, 800);
  const screen = await render(<Stub />);
  await expect.element(screen.getByAltText('open hamburger menu')).toBeVisible();
});
