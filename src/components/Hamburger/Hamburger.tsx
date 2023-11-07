import React from 'react';
import HamburgerOpenSVG from './hamburger/hamburgeropen.svg';
import HamburgerCloseSVG from './hamburger/hamburgerclose.svg';
import './hamburger.scss';

type HamburgerMenuProps = {
    isOpen: boolean;
    onClick: () => void;
}

export const HamburgerMenu = ({ onClick, isOpen }: HamburgerMenuProps): React.ReactElement =>
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
