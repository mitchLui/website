import { ReactElement } from 'react';
import { Link } from 'react-router';
import type { NavLink } from '../NavBar/NavBar';
import { NameStamp } from '../NameStamp/NameStamp';
import { externalLink } from '../../links';
import { NewTabHint } from '../NewTabHint/NewTabHint';
import styles from './Footer.module.css';

type FooterProps = {
  owner: string;
  place: string;
  stamp: string;
  links: NavLink[];
};

const currentYear = (): number => new Date().getFullYear();

export const Footer = ({ owner, place, stamp, links }: FooterProps): ReactElement =>
  <footer className={styles.footer}>
    <p className={styles.signature}>
      <NameStamp name={stamp}/>
      <span>© {currentYear()} {owner} · {place}</span>
    </p>
    <nav aria-label="Footer">
      <ul className={styles.links}>
        {links.map(link =>
          <li key={link.href}>
            <Link to={link.href} className={styles.link} {...(link.external && externalLink)}>{link.label}{link.external && <NewTabHint format={link.format}/>}</Link>
          </li>
        )}
      </ul>
    </nav>
  </footer>;
