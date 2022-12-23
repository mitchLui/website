import React from 'react';
import './intro.scss';

export const Intro = (): React.ReactElement =>
    <div className={'intro-grid'}>
        <span className={'container-header header-item'}><h1><code>Hello, I&apos;m Mitch</code></h1></span>
        <span className={'container-header title-item'}><h2>Fullstack software developer</h2></span>
        <div className={'item left'}>
            I am a trilingual (English, Cantonese and Mandarin) 3rd year computer science student from Hong Kong at the <CompanyLink className={'link uob'} url={'https://www.bristol.ac.uk'} text={'University of Bristol'} />.
            Before that, I was an intern at <CompanyLink className={'link asiabots'} url={'https://www.asiabots.com'} text={'Asiabots'} /> writing API-first microservices for omni-channel conversational AIs.
        </div>
        <div className={'item right'}>
            Currently a Graduate Teacher at the <CompanyLink className={'link uob'} url={'https://www.bristol.ac.uk'} text={'University'} /> in addition to being the Vice-President at <CompanyLink className={'link css'} url={'https://cssbristol.co.uk'} text={'CSS Bristol'} />.
            Will be returning as a Graduate Software Engineer at <CompanyLink className={'link wise'} url="https://www.wise.com" text={'Wise\'s'} /> Spend Business Experience Team.
        </div>
    </div>;

type CompanyLinkProps = {
    className: string;
    url: string;
    text: string;
};

const CompanyLink = ({ className, url, text }: CompanyLinkProps): React.ReactElement =>
    <a className={className} target={'_blank'} rel={'noreferrer'} href={url}>{text}</a>;
