import { ReactElement, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router';
import { HamburgerMenu } from '../Hamburger/Hamburger';
import clsx from 'clsx';
import { Avatar } from '../Avatar/Avatar';
import styles from './NavBar.module.css';

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

type NavBarProps = {
  links: NavLink[];
};

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

export const NavBar = ({ links }: NavBarProps): ReactElement =>
  useIsMobile() ? <MobileNavBar links={links}/> : <DesktopNavBar links={links}/>;

const DesktopNavBar = ({ links }: NavBarProps): ReactElement =>
  <header className={clsx(styles.navbar, styles.desktop)}>
    <Logo onClick={() => {}}/>
    <NavBarLinks links={links}/>
  </header>;

const MobileNavBar = ({ links }: NavBarProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={clsx(styles.navbar, styles.mobile)}>
      <div className={styles.mainnav}>
        <Logo onClick={() => setIsOpen(false)}/>
        <div className={styles.hamburgerMenuContainer}>
          <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
        </div>
      </div>
      <div className={clsx(!isOpen && styles.mobileNavClose)}>
        <NavBarLinks links={links} onClick={() => setIsOpen(!isOpen)}/>
      </div>
    </header>
  );
};

const NavBarLinks = ({ links, onClick }: NavBarProps & { onClick?: () => void }): ReactElement =>
  <nav>
    <ul>
      {links.map(link =>
        <li key={link.href}>
          <Link
            to={link.href}
            onClick={onClick}
            className={styles.navText}
            {...(link.external && { target: '_blank', rel: 'noreferrer' })}
          >
            {link.label}
          </Link>
        </li>
      )}
    </ul>
  </nav>;

const Logo = ({ onClick }: { onClick: () => void }): ReactElement =>
  <div className={styles.logoContainer}>
    <Link onClick={onClick} to={'/'} className={styles.logoLink}>
      <h1 className={styles.logo}><Avatar alt="" className={styles.logoGraphic}/>mitch<span className={styles.bold}>Lui</span></h1>
    </Link>
  </div>;
