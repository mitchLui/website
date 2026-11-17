import { ReactElement } from 'react';
import HamburgerOpenSVG from './assets/hamburgeropen.svg';
import HamburgerCloseSVG from './assets/hamburgerclose.svg';
import styles from './Hamburger.module.css';

type HamburgerMenuProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const HamburgerMenu = ({ onClick, isOpen }: HamburgerMenuProps): ReactElement =>
  <>
    {
      !isOpen &&
        <>
          <img onClick={onClick} className={styles.hamburger} src={HamburgerOpenSVG} alt="open hamburger menu"/>
        </>
    }
    {
      isOpen &&
        <>
          <img onClick={onClick} className={styles.hamburger} src={HamburgerCloseSVG} alt="close hamburger menu"/>
        </>
    }
  </>;
