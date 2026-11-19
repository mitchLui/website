import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Thumbnail } from './Thumbnail';
import { resolved } from '../../testing/resolve';
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

export const LoadingPlaceholder: Story = {
  args: { image: { src: '/never-loads.png', alt: 'loading screenshot' } },
  decorators: [Story => <div style={{ width: '320px' }}><Story/></div>],
  play: async ({ canvas }) => {
    const frame = canvas.getByRole('img', { name: 'loading screenshot' }).parentElement!;
    await expect(frame.getBoundingClientRect().height).toBeCloseTo(200, 0);
    await expect(getComputedStyle(frame).animationName).not.toBe('none');
    await expect(getComputedStyle(frame).backgroundColor).not.toBe('rgb(255, 255, 255)');
    frame.getAnimations().forEach(animation => animation.pause());
    frame.getAnimations().forEach(animation => { animation.currentTime = 0; });
    await expect(frame).toHaveStyle({ backgroundColor: resolved('backgroundColor', 'var(--color-surface-sunken)') });
  }
};

export const DarkModeEdge: Story = {
  play: async ({ canvas, args }) => {
    const frame = canvas.getByRole('img', { name: args.image.alt }).parentElement!;
    const edge = getComputedStyle(frame).boxShadow.split(/,(?![^(]*\))/)[0];
    const dark = matchMedia('(prefers-color-scheme: dark)').matches;
    await expect(edge).toContain(dark ? 'rgb(52, 65, 59)' : 'rgba(20, 32, 27, 0)');
  }
};
