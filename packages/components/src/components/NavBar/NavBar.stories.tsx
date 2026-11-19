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
    await expect(canvas.getAllByRole('navigation')).toHaveLength(1);
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

export const TrailingSlashLinks: Story = {
  args: { links: [{ label: 'Home', href: '/' }, { label: 'Work', href: '/work/' }] },
  parameters: { route: { path: '/work/*', url: '/work/acme' } },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Work' })).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
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
  decorators: [Story => <><Story/><main><a href="#behind">Page behind the menu</a></main></>],
  play: async ({ canvas, canvasElement, userEvent, step }) => {
    const menu = canvasElement.querySelector('dialog')!;
    const pageOverflow = () => getComputedStyle(document.documentElement).overflow;
    await step('fits the logo and menu button inside matching gutters', async () => {
      const avatar = canvasElement.querySelector('header img')!.getBoundingClientRect();
      const lastLine = canvas.getByRole('button', { name: 'Open menu' }).lastElementChild!.getBoundingClientRect();
      await expect([avatar.width, avatar.height]).toEqual([32, 32]);
      await expect(Math.round(window.innerWidth - lastLine.right)).toBe(Math.round(avatar.left));
    });
    await step('renders a closed menu', async () => {
      await expect(canvas.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-haspopup', 'dialog');
      await expect(menu.open).toBe(false);
      await expect(canvas.queryByRole('link', { name: 'Work' })).not.toBeInTheDocument();
    });
    await step('opens the menu as a full-screen dialog over an inert page', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open menu' }));
      await expect(menu.open).toBe(true);
      const dialog = canvas.getByRole('dialog', { name: 'Menu' });
      await expect(dialog.getBoundingClientRect()).toMatchObject({ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight });
      await expect(canvas.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
      await waitFor(() => expect(canvas.getByRole('link', { name: 'Work' })).toBeVisible());
      await expect(pageOverflow()).toBe('hidden');
      const behind = canvas.getByRole('link', { name: 'Page behind the menu' });
      behind.focus();
      await expect(behind).not.toHaveFocus();
    });
    await step('closes with the close button and lets the page scroll', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Close menu' }));
      await expect(menu.open).toBe(false);
      await expect(pageOverflow()).not.toBe('hidden');
    });
    await step('navigates when a link is chosen', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open menu' }));
      await userEvent.click(canvas.getByRole('link', { name: 'Work' }));
      await expect(canvas.getByTestId('navigated-to')).toHaveTextContent('/work');
    });
  }
};
