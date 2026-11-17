import { ReactElement } from 'react';
import clsx from 'clsx';
import avatar from '../../assets/avatar.jpg';
import styles from './Avatar.module.css';

type AvatarProps = {
  alt?: string;
  className?: string;
};

export const Avatar = ({ alt = 'Mitch Lui', className }: AvatarProps): ReactElement =>
  <img className={clsx(styles.avatar, className)} src={avatar} alt={alt} width={40} height={40}/>;
