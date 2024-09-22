import { ReactElement } from 'react';
import './intro.scss';

export const Intro = (): ReactElement =>
  <div className={'intro'}>
    <span className={'container-header'}><h1><code>Hello, I&apos;m Mitch</code></h1></span>
    <span className={'container-header'}><h2>Fullstack software engineer</h2></span>
    <div className={'item'}>
        Born and raised in Hong Kong, I am now based in London as a Graduate Software Engineer at <CompanyLink className={'link wise'} url="https://www.wise.com" text={'Wise\'s'} /> Business Account Management Team to create the one account for businesses to thrive everywhere.
        Prior to university, I contributed to the development of API-first microservices for conversational AIs that can be used across multiple channels as an intern at <CompanyLink className={'link asiabots'} url={'https://www.asiabots.com'} text={'Asiabots'} />.
    </div>
    <div className={'item right'} />
  </div>;

type CompanyLinkProps = {
    className: string;
    url: string;
    text: string;
};

const CompanyLink = ({ className, url, text }: CompanyLinkProps): ReactElement =>
  <a className={className} target={'_blank'} rel={'noreferrer'} href={url}>{text}</a>;
