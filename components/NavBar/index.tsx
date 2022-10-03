import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from '../Hamburger';
import navBarStyles from './NavBar.module.css';

const MOBILE: number = 768;

const NavBar = (): React.ReactElement => {

  console.log(navBarStyles);

  const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < MOBILE);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE) {
        setIsMobileMenu(true);
      } else {
        setIsMobileMenu(false);
        setIsOpen(false);
      }
    };
    window.onresize = handleResize;
  });

  return (
    <>
      {!isMobileMenu && <DesktopNavBar setIsOpen={setIsOpen} />}
      {isMobileMenu && <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </>
  );
};

export default NavBar;

type NavBarProps = {
    setIsOpen: (isOpen: boolean) => void;
}

const DesktopNavBar = ({ setIsOpen }: NavBarProps): React.ReactElement =>
  <header className={`${navBarStyles.main} ${navBarStyles.desktop}`}>
    <Logo setIsOpen={setIsOpen}/>
    <NavBarLinks/>
  </header>;

type MobileNavBarProps = NavBarProps & {
    isOpen: boolean;
}

const MobileNavBar = ({ isOpen, setIsOpen }: MobileNavBarProps): React.ReactElement =>
  <header className={`${navBarStyles.main} ${navBarStyles.mobile}`}>
    <div className={navBarStyles.mainnav}>
      <Logo setIsOpen={setIsOpen}/>
      <div className={navBarStyles.hamburgerMenuContainer} >
        <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
      </div>
    </div>
    <div className={`${navBarStyles.mobileMenu} ${isOpen ? `${navBarStyles.mobileNavOpen}` : `${navBarStyles.mobileNavClose}`}`}>
      <NavBarLinks onClick={() => setIsOpen(!isOpen)}/>
    </div>
  </header>;

type NavBarLinksProps = {
    onClick ?: () => void;
}

export const NavBarLinks = ({ onClick }: NavBarLinksProps): React.ReactElement =>
  <nav>
    <ul>
      <Link href={'/'}>
        <li onClick={onClick}>
          <span className={navBarStyles.navText}>Home</span>
        </li>
      </Link>
      <Link href={'/projects'}>
        <li onClick={onClick}>
          <span className={navBarStyles.navText}>Projects + Work</span>
        </li>
      </Link>
      <Link href={'/cv.pdf'} target={'_blank'} rel={'noreferrer'}>
        <li onClick={onClick}>
          <span className={navBarStyles.navText}>CV</span>
        </li>
      </Link>
    </ul>
  </nav>;

export const Logo = ({ setIsOpen }: NavBarProps): React.ReactElement =>
  <div className={navBarStyles.logoContainer}>
    <Link onClick={() => setIsOpen(false)} href={'/'} className={navBarStyles.logoLink}>
      <h1 className={navBarStyles.logo}>
        <div className={navBarStyles.logoGraphic}>
          <Image  src={'/logo.svg'} alt={'logo'} width={36} height={36}/>
        </div>mitch<span className={navBarStyles.bold}>Lui</span></h1>
    </Link>
  </div>;