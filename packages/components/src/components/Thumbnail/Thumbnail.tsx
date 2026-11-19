import { ReactElement } from 'react';
import clsx from 'clsx';
import styles from './Thumbnail.module.css';

export type Image = {
  src: string;
  webpSrc?: string;
  alt: string;
};

type ThumbnailProps = {
  image: Image;
  priority?: boolean;
  className?: string;
};

export const Thumbnail = ({ image, priority = false, className }: ThumbnailProps): ReactElement =>
  <picture className={clsx(styles.frame, className)}>
    {image.webpSrc && <source srcSet={image.webpSrc} type="image/webp" />}
    <img
      src={image.src}
      alt={image.alt}
      {...(priority ? { fetchPriority: 'high' } : { loading: 'lazy', decoding: 'async' })}
    />
  </picture>;
