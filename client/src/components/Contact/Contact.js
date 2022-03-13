import React from "react";
import "./contact.css";

export const Contact = () => 
    <section className={"contact-container"}>
        <div className={"header-text"}>
            Contact me:
        </div>
        <div className={"contact-links"}>
            <ul>
                <li>
                    <a href={"mailto:mitch@mitchlui.dev"}>
                        <img className={"icon"} src={"./email.svg"} alt="email icon" />
                    </a>
                </li>
                <li>
                    <a href={"https://www.linkedin.com/in/mitchlui/"} target={"_blank"} rel={"noreferrer"}>
                    <img className={"icon"} src={"./linkedin.svg"} alt="linkedin icon" />
                    </a>
                </li>
                <li>
                    <a href={"https://www.github.com/mitchlui"} target={"_blank"} rel={"noreferrer"}>
                        <img className={"icon"} src={"./github.svg"} alt="github icon" />
                    </a>
                </li>
            </ul>
        </div>
    </section>