import { ReactElement } from 'react';

export type Thumbnail = {
  name: string;
  alt: string;
};

export const ThumbnailPicture = ({ name, alt, className }: Thumbnail & { className?: string }): ReactElement =>
  <picture className={className}>
    <source srcSet={'/project-assets/webp/' + name + '.webp'} type="image/webp" />
    <img src={'/project-assets/png/' + name + '.png'} alt={alt} />
  </picture>;
