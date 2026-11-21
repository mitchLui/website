import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router';
import { HamburgerMenu } from '../Hamburger/Hamburger';
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

const menu = 'site-menu';

export const NavBar = ({ links }: NavBarProps): ReactElement =>
  <header className={styles.header}>
    <div className={styles.navbar}>
      <Logo/>
      <div className={styles.desktop}><NavBarLinks links={links}/></div>
      <div className={styles.phone}><HamburgerMenu menu={menu}/></div>
    </div>
    <dialog id={menu} className={styles.sheet} aria-label="Menu">
      <div className={styles.navbar}>
        <Logo/>
        <HamburgerMenu menu={menu} isOpen/>
      </div>
      <div className={styles.sheetLinks}><NavBarLinks links={links}/></div>
    </dialog>
  </header>;

const NavBarLinks = ({ links }: NavBarProps): ReactElement =>
  <nav>
    <ul>
      {links.map(link =>
        <li key={link.href}>
          {link.external
            ? <Link to={link.href} className={styles.navText} {...externalLink}>{link.label}</Link>
            : <SectionLink link={link}/>}
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

const SectionLink = ({ link }: { link: NavLink }): ReactElement => {
  const isCurrent = isCurrentSection(useLocation().pathname, link.href);
  return <Link to={link.href} className={styles.navText} aria-current={isCurrent ? 'page' : undefined}>{link.label}</Link>;
};

const Logo = (): ReactElement =>
  <Link to="/">
    <span className={styles.logo}><Avatar alt="" className={styles.logoGraphic}/>mitch<span className={styles.bold}>Lui</span></span>
  </Link>;
