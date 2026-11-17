import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Avatar } from './Avatar';

const meta = {
  component: Avatar,
  parameters: { layout: 'centered' }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const expectRoundSquare = async (image: HTMLImageElement, size: number) => {
  await waitFor(() => expect(image.complete && image.naturalWidth > 0).toBe(true));
  await expect(image.naturalWidth).toBe(image.naturalHeight);
  await expect([image.clientWidth, image.clientHeight]).toEqual([size, size]);
  await expect(image).toHaveStyle({ borderRadius: '50%', boxShadow: 'none' });
};

export const Default: Story = {
  play: async ({ canvas }) => {
    await expectRoundSquare(canvas.getByRole('img', { name: 'Mitch Lui' }), 40);
  }
};

export const Decorative: Story = {
  args: { alt: '' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('presentation')).toHaveAttribute('alt', '');
  }
};
