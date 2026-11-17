import type { Image } from './components/Thumbnail/Thumbnail';

const placeholder = (width: number, height: number, fill: string): string =>
  'data:image/svg+xml,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="${fill}"/></svg>`
  );

export const wideImage: Image = { src: placeholder(1600, 900, '#9FE870'), alt: 'wide placeholder' };

export const tallImage: Image = { src: placeholder(800, 1000, '#FFFFFF'), alt: 'tall placeholder' };
