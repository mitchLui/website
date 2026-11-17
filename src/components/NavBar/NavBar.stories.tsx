import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { NavBar } from './NavBar';

const meta = {
  component: NavBar
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: /mitch\s?Lui/ })).toHaveAttribute('href', '/');
    await expect(canvas.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    await expect(canvas.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work');
    await expect(canvas.getByRole('link', { name: 'CV' })).toHaveAttribute('href', '/cv.pdf');
    await expect(canvas.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', '/linkedin');
    await expect(canvas.queryByAltText('open hamburger menu')).not.toBeInTheDocument();
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
