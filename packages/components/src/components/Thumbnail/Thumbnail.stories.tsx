import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Thumbnail } from './Thumbnail';
import { wideImage } from '../../fixtures';

const meta = {
  component: Thumbnail,
  parameters: { layout: 'centered' },
  args: { image: wideImage }
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, canvasElement, args }) => {
    await expect(canvas.getByRole('img', { name: args.image.alt })).toHaveAttribute('src', args.image.src);
    await expect(canvasElement.querySelector('source')).not.toBeInTheDocument();
  }
};

export const WithWebp: Story = {
  args: { image: { ...wideImage, webpSrc: '/image.webp' } },
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('source')).toHaveAttribute('srcset', '/image.webp');
  }
};
