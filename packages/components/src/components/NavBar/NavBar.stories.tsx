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
    await expect(canvas.queryByAltText('open hamburger menu')).not.toBeInTheDocument();
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
      await expect(canvas.getByAltText('open hamburger menu')).toBeVisible();
      await expect(canvas.getByRole('link', { name: 'Work', hidden: true })).not.toBeVisible();
    });
    await step('opens the menu to reveal the links', async () => {
      await userEvent.click(canvas.getByAltText('open hamburger menu'));
      await waitFor(() => expect(canvas.getByRole('link', { name: 'Work' })).toBeVisible());
    });
    await step('closes the menu again', async () => {
      await userEvent.click(canvas.getByAltText('close hamburger menu'));
      await expect(canvas.getByRole('link', { name: 'Work', hidden: true })).not.toBeVisible();
    });
  }
};
