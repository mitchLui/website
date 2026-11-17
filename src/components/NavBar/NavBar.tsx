import { ReactElement, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router';
import { HamburgerMenu } from '../Hamburger/Hamburger';
import clsx from 'clsx';
import styles from './NavBar.module.css';

const MOBILE: number = 768;

const subscribeToResize = (onResize: () => void) => {
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
};

const useIsMobile = () => useSyncExternalStore(
  subscribeToResize,
  () => window.innerWidth < MOBILE,
  () => false
);

export const NavBar = (): ReactElement =>
  useIsMobile() ? <MobileNavBar/> : <DesktopNavBar/>;

type NavBarProps = {
  setIsOpen: (isOpen: boolean) => void;
};

const DesktopNavBar = (): ReactElement =>
  <header className={clsx(styles.navbar, styles.desktop)}>
    <Logo setIsOpen={() => {}}/>
    <NavBarLinks/>
  </header>;

const MobileNavBar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={clsx(styles.navbar, styles.mobile)}>
      <div className={styles.mainnav}>
        <Logo setIsOpen={setIsOpen}/>
        <div className={styles.hamburgerMenuContainer}>
          <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
        </div>
      </div>
      <div className={clsx(!isOpen && styles.mobileNavClose)}>
        <NavBarLinks onClick={() => setIsOpen(!isOpen)}/>
      </div>
    </header>
  );
};

type NavBarLinksProps = {
  onClick ?: () => void;
};

export const NavBarLinks = ({ onClick }: NavBarLinksProps): ReactElement =>
  <nav>
    <ul>
      <li><Link to={'/'} onClick={onClick} className={styles.navText}>Home</Link></li>
      <li><Link to={'/work'} onClick={onClick} className={styles.navText}>Work</Link></li>
      <li><Link to={'/cv.pdf'} onClick={onClick} className={styles.navText} target={'_blank'} rel={'noreferrer'}>CV</Link></li>
      <li><Link to={'/linkedin'} onClick={onClick} className={styles.navText}>LinkedIn</Link></li>
    </ul>
  </nav>;

export const Logo = ({ setIsOpen }: NavBarProps): ReactElement =>
  <div className={styles.logoContainer}>
    <Link onClick={() => setIsOpen(false)} to={'/'} className={styles.logoLink}>
      <h1 className={styles.logo}><img className={styles.logoGraphic} src={'/logo.svg'} alt={'logo'}/>mitch<span className={styles.bold}>Lui</span></h1>
    </Link>
  </div>;
