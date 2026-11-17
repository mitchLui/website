import { ReactElement } from 'react';

export type Image = {
  src: string;
  webpSrc?: string;
  alt: string;
};

export const Thumbnail = ({ image, className }: { image: Image; className?: string }): ReactElement =>
  <picture className={className}>
    {image.webpSrc && <source srcSet={image.webpSrc} type="image/webp" />}
    <img src={image.src} alt={image.alt} />
  </picture>;
