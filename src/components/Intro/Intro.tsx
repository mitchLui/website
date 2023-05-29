import React from 'react';
import './intro.scss';

export const Intro = (): React.ReactElement =>
    <div className={'intro'}>
        <span className={'container-header'}><h1><code>Hello, I&apos;m Mitch</code></h1></span>
        <span className={'container-header'}><h2>Fullstack software developer</h2></span>
        <div className={'item'}>
            {/*
              I'm currently a third-year computer science student at the University of Bristol, based in the UK.
              Originally from Hong Kong, I can communicate fluently in English, Cantonese, and Mandarin.
              Alongside my studies, I'm working as a Graduate Teacher at the University.
              I'm excited to share that I'll be joining Wise's Spend Business Experience Team as a Graduate Software Engineer in the near future.
              Prior to this, I gained valuable experience as an intern at Asiabots, where I .
            */}
            I am a UK-based, trilingual (English, Cantonese and Mandarin) 3rd year computer science student from Hong Kong at the <CompanyLink className={'link uob'} url={'https://www.bristol.ac.uk'} text={'University of Bristol'} />.
            Currently a Graduate Teacher at the <CompanyLink className={'link uob'} url={'https://www.bristol.ac.uk'} text={'University'} />.
            Before that, I contributed to the development of API-first microservices for conversational AIs that can be used across multiple channels as an intern at <CompanyLink className={'link asiabots'} url={'https://www.asiabots.com'} text={'Asiabots'} />.
            I&apos;m excited to be joining <CompanyLink className={'link wise'} url="https://www.wise.com" text={'Wise\'s'} /> Spend Business Experience Team as a Graduate Software Engineer in September.
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
