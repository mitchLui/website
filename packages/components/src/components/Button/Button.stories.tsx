import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { BackButton, Button } from './Button';

const meta = {
  component: Button,
  parameters: { layout: 'centered' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsButton: Story = {
  args: { as: 'button', children: 'Submit', onClick: fn() },
  play: async ({ canvas, args, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Submit' }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
};

export const AsLink: Story = {
  args: { as: 'a', to: '/work', children: 'See all work' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'See all work' })).toHaveAttribute('href', '/work');
  }
};

export const Back: Story = {
  args: { as: 'a', to: '/work', children: 'All work' },
  render: () => <BackButton to="/work" text="All work"/>,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'All work' })).toHaveAttribute('href', '/work');
  }
};
