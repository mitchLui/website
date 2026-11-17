import { ReactElement } from 'react';
import styles from './Hamburger.module.css';

type HamburgerMenuProps = {
  isOpen: boolean;
  onClick: () => void;
};

const OpenIcon = () =>
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" fill="currentColor">
    <rect x="0.5" y="3.5" width="27" height="3"/>
    <rect x="0.5" y="12.5" width="27" height="3"/>
    <rect x="0.5" y="21.5" width="27" height="3"/>
  </svg>;

const CloseIcon = () =>
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" fill="currentColor">
    <rect x="12.5" y="0.5" width="3" height="27" transform="rotate(45 14 14)"/>
    <rect x="12.5" y="0.5" width="3" height="27" transform="rotate(-45 14 14)"/>
  </svg>;

export const HamburgerMenu = ({ onClick, isOpen }: HamburgerMenuProps): ReactElement =>
  <button
    type="button"
    className={styles.hamburger}
    onClick={onClick}
    aria-expanded={isOpen}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    {isOpen ? <CloseIcon/> : <OpenIcon/>}
  </button>;
