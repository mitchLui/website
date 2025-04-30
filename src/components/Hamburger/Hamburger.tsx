import { ReactElement } from 'react';
import HamburgerOpenSVG from './assets/hamburgeropen.svg';
import HamburgerCloseSVG from './assets/hamburgerclose.svg';
import './Hamburger.scss';

type HamburgerMenuProps = {
    isOpen: boolean;
    onClick: () => void;
}

export const HamburgerMenu = ({ onClick, isOpen }: HamburgerMenuProps): ReactElement =>
  <>
    {
      !isOpen &&
        <>
          <img onClick={onClick} className={'hamburger'} src={HamburgerOpenSVG} alt="open hamburger menu"/>
        </>
    }
    {
      isOpen &&
        <>
          <img onClick={onClick} className={'hamburger'} src={HamburgerCloseSVG} alt="close hamburger menu"/>
        </>
    }
  </>;
