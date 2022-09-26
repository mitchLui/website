import React from 'react';
import HamburgerOpenSVG from './open.svg';
import HamburgerCloseSVG from './close.svg';
import Image from 'next/image';
import hamburgerStyles from './Hamburger.module.css';

type HamburgerMenuProps = {
    isOpen: boolean;
    onClick: () => void;
}

const HamburgerMenu = ({ onClick, isOpen }: HamburgerMenuProps): React.ReactElement => {
  const alt = isOpen ? 'close menu' : 'open menu';
  const src = isOpen ? HamburgerCloseSVG : HamburgerOpenSVG;
  return <Image onClick={onClick} className={hamburgerStyles.main} src={src} alt={alt} width={28} height={28}/>;
};

export default HamburgerMenu;