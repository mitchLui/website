import React from 'react';
import "./intro.css";

export const Intro = () =>
    <div className={"intro-grid"}>
        <span className={"container-header header-item"}><h1><code>Hello, I'm Mitch</code></h1></span>
        <span className={"container-header title-item"}><h2>Fullstack software developer</h2></span>
        <div className={"item left"}>
            I am a trilingual (English, Cantonese and Mandarin) year 2 computer science student from Hong Kong at the <CompanyLink className={"link uob"} url={"https://www.bristol.ac.uk"} text={"University of Bristol"} />.
            Before that, I was an intern at <CompanyLink className={"link asiabots"} url={"https://www.asiabots.com"} text={"Asiabots"} /> writing API-first microservices for omni-channel conversational AIs.
        </div>
        <div className={"item right"}>
            Currently working as a Software Engineer Intern at <CompanyLink className={"link wise"} url="https://www.wise.com" text={"Wise's"} /> Spend Experience Team 
            in addition to being the Vice-President at <CompanyLink className={"link css"} url={"https://cssbristol.co.uk"} text={"CSS Bristol"} />.
            Will be returning as a Graduate Teacher and IT Clinic Technician / Supervisor at the <CompanyLink className={"link uob"} url={"https://www.bristol.ac.uk"} text={"University"} /> in September 2022. 
        </div>
    </div>
        

const CompanyLink = ({className, url, text}) =>
    <a className={className} target={"_blank"} rel={"noreferrer"} href={url}>{text}</a>