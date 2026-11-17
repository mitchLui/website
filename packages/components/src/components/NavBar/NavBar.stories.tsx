import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { NavBar } from './NavBar';
import { resolved } from '../../testing/resolve';

const meta = {
  component: NavBar,
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Work', href: '/work' },
      { label: 'CV', href: '/cv.pdf', external: true }
    ]
  }
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  play: async ({ canvas, canvasElement }) => {
    const gutter = parseFloat(getComputedStyle(canvasElement.querySelector('header > div')!).paddingLeft);
    await expect(canvasElement.querySelector('header img')!.getBoundingClientRect().left).toBe(gutter + Math.max(0, (window.innerWidth - 1200 - 2 * gutter) / 2));
    await expect(canvas.getByRole('link', { name: /mitch\s?Lui/ })).toHaveAttribute('href', '/');
    await expect(canvas.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    await expect(canvas.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work');
    await expect(canvas.queryByRole('button', { name: 'Open menu' })).not.toBeInTheDocument();
  }
};

export const ActivePage: Story = {
  parameters: { route: { path: '/work/*', url: '/work/acme' } },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Work' })).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
    await expect(canvas.getByRole('link', { name: 'Work' })).toHaveStyle({ backgroundColor: resolved('backgroundColor', 'var(--color-surface-sunken)') });
    await expect(canvas.getByRole('link', { name: 'Home' })).toHaveStyle({ backgroundColor: 'rgba(0, 0, 0, 0)' });
  }
};

export const ExternalLink: Story = {
  play: async ({ canvas }) => {
    const cv = canvas.getByRole('link', { name: 'CV' });
    await expect(cv).toHaveAttribute('target', '_blank');
    await expect(cv).toHaveAttribute('rel', 'noreferrer');
    await expect(canvas.getByRole('link', { name: 'Work' })).not.toHaveAttribute('target');
  }
};

export const Mobile: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  play: async ({ canvas, canvasElement, userEvent, step }) => {
    await step('fits the logo and menu button inside matching gutters', async () => {
      const avatar = canvasElement.querySelector('header img')!.getBoundingClientRect();
      const lastLine = canvas.getByRole('button', { name: 'Open menu' }).lastElementChild!.getBoundingClientRect();
      await expect([avatar.width, avatar.height]).toEqual([32, 32]);
      await expect(Math.round(window.innerWidth - lastLine.right)).toBe(Math.round(avatar.left));
    });
    await step('renders a closed hamburger menu', async () => {
      await expect(canvas.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
      await expect(canvas.getByRole('link', { name: 'Work', hidden: true })).not.toBeVisible();
    });
    await step('opens the menu to reveal the links', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open menu' }));
      await expect(canvas.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
      await expect(canvas.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
      await waitFor(() => expect(canvas.getByRole('link', { name: 'Work' })).toBeVisible());
      const sheet = canvas.getByRole('navigation').parentElement!;
      await expect(Math.round(sheet.getBoundingClientRect().bottom)).toBe(window.innerHeight);
      await expect(document.body.style.overflow).toBe('hidden');
    });
    await step('closes the menu with Escape and lets the page scroll', async () => {
      await userEvent.keyboard('{Escape}');
      await expect(canvas.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
      await expect(document.body.style.overflow).toBe('');
      await userEvent.click(canvas.getByRole('button', { name: 'Open menu' }));
    });
    await step('closes the menu again', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Close menu' }));
      await expect(canvas.getByRole('link', { name: 'Work', hidden: true })).not.toBeVisible();
    });
    await step('navigates when a link is chosen', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open menu' }));
      await userEvent.click(canvas.getByRole('link', { name: 'Work' }));
      await expect(canvas.getByTestId('navigated-to')).toHaveTextContent('/work');
    });
  }
};
