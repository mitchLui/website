import React from 'react';
import './intro.scss';

export const Intro = (): React.ReactElement =>
    <div className={'intro'}>
        <span className={'container-header'}><h1><code>Hello, I&apos;m Mitch</code></h1></span>
        <span className={'container-header'}><h2>Fullstack software developer</h2></span>
        <div className={'item'}>
            I am a recent computer science graduate from the <CompanyLink className={'link uob'} url={'https://www.bristol.ac.uk'} text={'University of Bristol'} />. Born and raised in Hong Kong, I am now based in London and will be joining <CompanyLink className={'link wise'} url="https://www.wise.com" text={'Wise\'s'} /> Spend Business Experience Team as a Graduate Software Engineer in September.
            Prior to university, I contributed to the development of API-first microservices for conversational AIs that can be used across multiple channels as an intern at <CompanyLink className={'link asiabots'} url={'https://www.asiabots.com'} text={'Asiabots'} />.
        </div>
        <div className={'item right'} />
    </div>;

type CompanyLinkProps = {
    className: string;
    url: string;
    text: string;
};

const CompanyLink = ({ className, url, text }: CompanyLinkProps): React.ReactElement =>
    <a className={className} target={'_blank'} rel={'noreferrer'} href={url}>{text}</a>;
