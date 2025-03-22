import { AnchorHTMLAttributes, ReactElement } from 'react';
import './intro.scss';

export const Intro = (): ReactElement =>
  <div className={'intro'}>
    <span className={'container-header'}><h1><code>Hello</code></h1></span>
    <span className={'container-header'}><h2>Fullstack software engineer</h2></span>
    <div className={'item'}>
        Born and raised in Hong Kong, I am now based in London as a Graduate Software Engineer at <CompanyLink className={'wise'} href="https://www.wise.com">Wise&apos;s</CompanyLink> Business Account Management Team to create the one account for businesses to thrive everywhere.
        Prior to university, I contributed to the development of backend APIs for conversational AIs that can be used across voice and chat as an intern at <CompanyLink className={'asiabots'} href={'https://www.asiabots.com'}>Asiabots</CompanyLink>.
    </div>
    <div className={'item right'} />
  </div>;

const CompanyLink = ({ className, href, children }: AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement =>
  <a className={`link ${className}`} target={'_blank'} rel={'noreferrer'} href={href}>{children}</a>;
