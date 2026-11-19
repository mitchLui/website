import { ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
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

const useMenuLock = (isOpen: boolean, setIsOpen: (isOpen: boolean) => void, header: RefObject<HTMLElement | null>, button: RefObject<HTMLButtonElement | null>) => useEffect(() => {
  if (!isOpen || !header.current) {
    return;
  }
  const page = [...header.current.parentElement!.children].filter(element => element !== header.current) as HTMLElement[];
  const closeOnEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      button.current?.focus();
    }
  };
  const closeOnDesktop = (event: MediaQueryListEvent) => event.matches && setIsOpen(false);
  const desktopQuery = window.matchMedia(desktop);
  document.body.style.overflow = 'hidden';
  page.forEach(element => { element.inert = true; });
  window.addEventListener('keydown', closeOnEscape);
  desktopQuery.addEventListener('change', closeOnDesktop);
  return () => {
    document.body.style.overflow = '';
    page.forEach(element => { element.inert = false; });
    window.removeEventListener('keydown', closeOnEscape);
    desktopQuery.removeEventListener('change', closeOnDesktop);
  };
}, [isOpen, setIsOpen, header, button]);

export const NavBar = ({ links }: NavBarProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const close = () => setIsOpen(false);
  useMenuLock(isOpen, setIsOpen, header, button);
  return (
    <header ref={header} className={clsx(styles.header, isOpen && styles.headerOpen)}>
      <div className={styles.navbar}>
        <Logo onClick={close}/>
        <div className={styles.desktop}><NavBarLinks links={links}/></div>
        <div className={styles.phone}><HamburgerMenu ref={button} onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/></div>
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
            : <SectionLink link={link} onClick={onClick}/>}
        </li>
      )}
    </ul>
  </nav>;

const withoutTrailingSlash = (path: string) => path.length > 1 ? path.replace(/\/$/, '') : path;

// Pages are prerendered at /work but linked as /work/, so compare paths without the trailing slash.
const isCurrentSection = (pathname: string, href: string) => {
  const [here, section] = [withoutTrailingSlash(pathname), withoutTrailingSlash(href)];
  return here === section || (section !== '/' && here.startsWith(section + '/'));
};

const SectionLink = ({ link, onClick }: { link: NavLink; onClick?: () => void }): ReactElement => {
  const isCurrent = isCurrentSection(useLocation().pathname, link.href);
  return <Link to={link.href} onClick={onClick} className={styles.navText} aria-current={isCurrent ? 'page' : undefined}>{link.label}</Link>;
};

const Logo = ({ onClick }: { onClick?: () => void }): ReactElement =>
  <Link onClick={onClick} to="/">
    <span className={styles.logo}><Avatar alt="" className={styles.logoGraphic}/>mitch<span className={styles.bold}>Lui</span></span>
  </Link>;
