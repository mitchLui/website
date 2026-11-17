import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { NavBar } from './NavBar';

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
  play: async ({ canvas }) => {
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
  play: async ({ canvas, userEvent, step }) => {
    await step('renders a closed hamburger menu', async () => {
      await expect(canvas.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
      await expect(canvas.getByRole('link', { name: 'Work', hidden: true })).not.toBeVisible();
    });
    await step('opens the menu to reveal the links', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Open menu' }));
      await expect(canvas.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
      await waitFor(() => expect(canvas.getByRole('link', { name: 'Work' })).toBeVisible());
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
