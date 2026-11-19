import { ReactElement, Ref } from 'react';
import clsx from 'clsx';
import styles from './Hamburger.module.css';

type HamburgerMenuProps = {
  isOpen: boolean;
  onClick: () => void;
  ref?: Ref<HTMLButtonElement>;
};

export const HamburgerMenu = ({ onClick, isOpen, ref }: HamburgerMenuProps): ReactElement =>
  <button
    ref={ref}
    type="button"
    className={clsx(styles.hamburger, isOpen && styles.open)}
    onClick={onClick}
    aria-expanded={isOpen}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    <span className={styles.line} aria-hidden="true"/>
    <span className={styles.line} aria-hidden="true"/>
  </button>;
