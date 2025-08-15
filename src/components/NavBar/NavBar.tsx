import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from '../Hamburger/Hamburger';
import './NavBar.scss';

const MOBILE: number = 768;

export const NavBar = (): ReactElement => {
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

type NavBarProps = {
    setIsOpen: (isOpen: boolean) => void;
}

const DesktopNavBar = ({ setIsOpen }: NavBarProps): ReactElement =>
  <header className="navbar desktop">
    <Logo setIsOpen={setIsOpen}/>
    <NavBarLinks/>
  </header>;

type MobileNavBarProps = NavBarProps & {
    isOpen: boolean;
}

const MobileNavBar = ({ isOpen, setIsOpen }: MobileNavBarProps): ReactElement =>
  <header className="navbar mobile">
    <div className={'mainnav'}>
      <Logo setIsOpen={setIsOpen}/>
      <div className="hamburger-menu-container" >
        <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
      </div>
    </div>
    <div className={`mobile-menu ${isOpen ? 'mobile-nav-open' : 'mobile-nav-close'}`}>
      <NavBarLinks onClick={() => setIsOpen(!isOpen)}/>
    </div>
  </header>;

type NavBarLinksProps = {
    onClick ?: () => void;
}

export const NavBarLinks = ({ onClick }: NavBarLinksProps): ReactElement =>
  <nav>
    <ul>
      <Link to={'/'}>
        <li onClick={onClick}>
          <span className={'nav-text'}>Home</span>
        </li>
      </Link>
      <Link to={'/cv.pdf'} target={'_blank'} rel={'noreferrer'}>
        <li onClick={onClick}>
          <span className={'nav-text'}>CV</span>
        </li>
      </Link>
      <Link to={'/linkedin'} onClick={onClick}>
        <li>
          <span className={'nav-text'}>LinkedIn</span>
        </li>
      </Link>
    </ul>
  </nav>;

export const Logo = ({ setIsOpen }: NavBarProps): ReactElement =>
  <div className={'logo-container'}>
    <Link onClick={() => setIsOpen(false)} to={'/'} className="logo-link">
      <h1 className={'logo'}><img className={'logo-graphic'} src={'/logo.svg'} alt={'logo'}/>mitch<span className={'bold'}>Lui</span></h1>
    </Link>
  </div>;
