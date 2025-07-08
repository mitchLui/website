import { AnchorHTMLAttributes, ReactElement } from 'react';
import './Intro.scss';

export const Intro = (): ReactElement =>
  <div className={'intro'}>
      Born and raised in Hong Kong, I am now based in London as a Software Engineer at <CompanyLink className={'wise'} href="https://www.wise.com">Wise&apos;s</CompanyLink> Business Account Management Team to help create the <b>one account for businesses to thrive everywhere</b>.
  </div>;

const CompanyLink = ({ className, href, children }: AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement =>
  <a className={`link ${className}`} target={'_blank'} rel={'noreferrer'} href={href}>{children}</a>;
