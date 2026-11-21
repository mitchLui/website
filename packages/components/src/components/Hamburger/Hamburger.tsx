/// <reference path="../../invoker-commands.d.ts" />
import { ReactElement } from 'react';
import clsx from 'clsx';
import styles from './Hamburger.module.css';

type HamburgerMenuProps = {
  menu: string;
  isOpen?: boolean;
};

export const HamburgerMenu = ({ menu, isOpen = false }: HamburgerMenuProps): ReactElement =>
  <button
    type="button"
    className={clsx(styles.hamburger, isOpen && styles.open)}
    commandfor={menu}
    command={isOpen ? 'close' : 'show-modal'}
    aria-haspopup={isOpen ? undefined : 'dialog'}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    <span className={styles.line} aria-hidden="true"/>
    <span className={styles.line} aria-hidden="true"/>
  </button>;
