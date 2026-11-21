import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Footer } from './Footer';

const meta = {
  component: Footer,
  parameters: { layout: 'padded' },
  args: {
    owner: 'Jane Doe',
    place: 'Hong Kong ↔ London',
    stamp: '呂家天',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'CV', href: '/cv.pdf', external: true },
      { label: 'Sitemap', href: '/sitemap' }
    ]
  }
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(`© ${new Date().getFullYear()} Jane Doe · Hong Kong ↔ London`)).toBeVisible();
    await expect(canvas.getByText('呂家天')).toHaveAttribute('lang', 'zh-Hant');
    const nav = canvas.getByRole('navigation', { name: 'Footer' });
    await expect([...nav.querySelectorAll('a')].map(link => [link.textContent, link.getAttribute('href')])).toEqual([
      ['Work', '/work'], ['CV (opens in a new tab)', '/cv.pdf'], ['Sitemap', '/sitemap']
    ]);
    await expect(canvas.getByRole('link', { name: 'CV (opens in a new tab)' })).toHaveAttribute('target', '_blank');
  }
};

export const Phone: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  play: async ({ canvas }) => {
    const signature = canvas.getByText(/^© /).getBoundingClientRect();
    const links = canvas.getByRole('navigation', { name: 'Footer' }).getBoundingClientRect();
    await expect(links.top).toBeGreaterThan(signature.bottom);
  }
};
