import React from 'react';
import {Contact} from "../Contact/Contact"
import "./intro.css";

export const Intro = () =>
    <section className={"intro-container"}>
        <div className={"text-grid"}>
            <div className={"header-item"}>
                <h1><code>hey, i'm mitch</code></h1>
                <h2>fullstack software developer</h2>
            </div>
            <div className={"item left"}>
                Currently working as a Graduate Teacher and 
                IT Clinic Assistant at the <a className={"link uob"} target={"_blank"} rel={"noreferrer"} href="https://www.bristol.ac.uk">Univeristy of Bristol</a>.
                Technical Events Officer at <a className={"link css"} target={"_blank"} rel={"noreferrer"} href="https://cssbristol.co.uk">CSS Bristol</a>.
                Incoming SWE intern at <a className={"link wise"} target={"_blank"} rel={"noreferrer"} href="https://www.wise.com">Wise</a>.
            </div>
            <div className={"item right"}>
                Previously worked as an intern at <a className={"link asiabots"} target={"_blank"} rel={"noreferrer"} href="https://www.asiabots.com">Asiabots</a> in Hong Kong writing API-first microservices for omni-channel conversational AIs.
            </div>
        </div>
        <Contact/>
    </section>