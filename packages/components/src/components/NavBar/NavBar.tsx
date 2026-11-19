import { ReactElement, useEffect, useState, useSyncExternalStore } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router';
import { HamburgerMenu } from '../Hamburger/Hamburger';
import clsx from 'clsx';
import { Avatar } from '../Avatar/Avatar';
import { externalLink } from '../../links';
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
  <header className={styles.header}>
    <div className={clsx(styles.navbar, styles.desktop)}>
      <Logo onClick={() => {}}/>
      <NavBarLinks links={links}/>
    </div>
  </header>;

const useMenuLock = (isOpen: boolean, setIsOpen: (isOpen: boolean) => void) => useEffect(() => {
  if (!isOpen) {
    return;
  }
  const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false);
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', closeOnEscape);
  return () => {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', closeOnEscape);
  };
}, [isOpen, setIsOpen]);

const MobileNavBar = ({ links }: NavBarProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  useMenuLock(isOpen, setIsOpen);
  return (
    <header className={clsx(styles.header, isOpen && styles.headerOpen)}>
      <div className={styles.navbar}>
        <Logo onClick={() => setIsOpen(false)}/>
        <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
      </div>
      <div className={clsx(styles.sheet, !isOpen && styles.sheetClosed)}>
        <NavBarLinks links={links} onClick={() => setIsOpen(false)}/>
      </div>
    </header>
  );
};

const NavBarLinks = ({ links, onClick }: NavBarProps & { onClick?: () => void }): ReactElement =>
  <nav>
    <ul>
      {links.map(link =>
        <li key={link.href}>
          {link.external
            ? <Link to={link.href} onClick={onClick} className={styles.navText} {...externalLink}>{link.label}</Link>
            : <RouterNavLink to={link.href} end={link.href === '/'} onClick={onClick} className={styles.navText}>{link.label}</RouterNavLink>}
        </li>
      )}
    </ul>
  </nav>;

const Logo = ({ onClick }: { onClick: () => void }): ReactElement =>
  <div className={styles.logoContainer}>
    <Link onClick={onClick} to={'/'} className={styles.logoLink}>
      <span className={styles.logo}><Avatar alt="" className={styles.logoGraphic}/>mitch<span className={styles.bold}>Lui</span></span>
    </Link>
  </div>;
