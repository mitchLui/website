import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { projects } from './projects';
import { imageFor } from './cards';

const meta = {
  title: 'Data/Project images',
  parameters: { layout: 'padded' }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const sources = Object.values(projects).flatMap(project => {
  const image = imageFor(project);
  return [image.src, image.webpSrc!];
});

const cornerAlphas = (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d')!;
  context.drawImage(image, 0, 0);
  const { width, height } = canvas;
  return [[1, 1], [width - 2, 1], [1, height - 2], [width - 2, height - 2]].map(([x, y]) => context.getImageData(x, y, 1, 1).data[3]);
};

export const Screenshots: Story = {
  render: () =>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '8px' }}>
      {sources.map(source => <img key={source} src={source} alt={source} style={{ width: '100%' }}/>)}
    </div>,
  play: async ({ canvas }) => {
    const images = canvas.getAllByRole<HTMLImageElement>('img');
    await waitFor(() => expect(images.every(image => image.complete && image.naturalWidth > 0)).toBe(true), { timeout: 5000 });
    for (const image of images) {
      await expect({ source: image.alt, ratio: (image.naturalWidth / image.naturalHeight).toFixed(2) }).toEqual({ source: image.alt, ratio: image.alt.includes('/wise.') ? (2948 / 1880).toFixed(2) : '1.60' });
      await expect({ source: image.alt, corners: cornerAlphas(image) }).toEqual({ source: image.alt, corners: [255, 255, 255, 255] });
    }
  }
};
