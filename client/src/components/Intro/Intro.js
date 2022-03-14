import React from 'react';
import {Contact} from "../Contact/Contact"
import "./intro.css";

export const Intro = () =>
    <section className={"intro-container"}>
        <div className={"intro-grid"}>
            <div className={"header-item"}>
                <h1><code>hey, i'm mitch</code></h1>
                <h2>fullstack software developer</h2>
            </div>
            <div className={"item left"}>
                Currently working as a Graduate Teacher and 
                IT Clinic Assistant at the <CompanyLink class={"link uob"} url={"https://www.bristol.ac.uk"} text={"Univeristy of Bristol"} />.
                Technical Events Officer at <CompanyLink class={"link css"} url={"https://cssbristol.co.uk"} text={"CSS Bristol"} />.
                Incoming SWE intern at <CompanyLink class={"link wise"} url="https://www.wise.com" text={"Wise"} />.
            </div>
            <div className={"item right"}>
                Previously worked as an intern at <CompanyLink class={"link asiabots"} url={"https://www.asiabots.com"} text={"Asiabots"} /> in Hong Kong writing API-first microservices for omni-channel conversational AIs.
            </div>
        </div>
        <Contact/>
    </section>

const CompanyLink = (props) =>
    <a className={props.class} target={"_blank"} rel={"noreferrer"} href={props.url}>{props.text}</a>