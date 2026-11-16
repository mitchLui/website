import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { App } from './App';

test('renders the not found page for unknown routes', async () => {
  window.history.pushState({}, '', '/unknown/route/that/does/not/exist');
  const screen = await render(<App />);
  await expect.element(screen.getByRole('heading', { name: '404 Not Found!' })).toBeVisible();
});
