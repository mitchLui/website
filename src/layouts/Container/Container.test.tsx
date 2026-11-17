import { expect, test } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { ContainerHeader } from './Container';

test('applies its CSS module styles to a nested heading', async () => {
  await page.viewport(1280, 800);
  const screen = await render(<ContainerHeader><h1>Sitemap</h1></ContainerHeader>);
  await expect.element(screen.getByRole('heading', { name: 'Sitemap' })).toHaveStyle({ fontSize: '48px' });
});
