import { ReactElement, useEffect, useState } from 'react';
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

const desktop = '(min-width: 768px)';

const useMenuLock = (isOpen: boolean, setIsOpen: (isOpen: boolean) => void) => useEffect(() => {
  if (!isOpen) {
    return;
  }
  const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false);
  const closeOnDesktop = (event: MediaQueryListEvent) => event.matches && setIsOpen(false);
  const desktopQuery = window.matchMedia(desktop);
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', closeOnEscape);
  desktopQuery.addEventListener('change', closeOnDesktop);
  return () => {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', closeOnEscape);
    desktopQuery.removeEventListener('change', closeOnDesktop);
  };
}, [isOpen, setIsOpen]);

export const NavBar = ({ links }: NavBarProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  useMenuLock(isOpen, setIsOpen);
  return (
    <header className={clsx(styles.header, isOpen && styles.headerOpen)}>
      <div className={styles.navbar}>
        <Logo onClick={close}/>
        <div className={styles.desktop}><NavBarLinks links={links}/></div>
        <div className={styles.phone}><HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/></div>
      </div>
      <div className={clsx(styles.sheet, !isOpen && styles.sheetClosed)}>
        <NavBarLinks links={links} onClick={close}/>
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

const Logo = ({ onClick }: { onClick?: () => void }): ReactElement =>
  <Link onClick={onClick} to="/">
    <span className={styles.logo}><Avatar alt="" className={styles.logoGraphic}/>mitch<span className={styles.bold}>Lui</span></span>
  </Link>;
