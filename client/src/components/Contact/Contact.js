import React from "react";
import { ContactButton } from "../Button/Button";
import EmailSVG from "./contact_images/email.svg";
import LinkedInSVG from "./contact_images/linkedin.svg";
import GitHubSVG from "./contact_images/github.svg";
import TwitterSVG from "./contact_images/twitter.svg";
import "./contact.scss";

export const Contact = () =>
    <section className={"contact-container"}>
        <div className={"contact-header-text"}>
            Contact me:
        </div>
        <div className={"current-status"}>
            I am currently open to new opportunities (full-time or part-time) in the UK.
        </div>
        <div className={"contact-links"}>
            <ul>
                <li>
                    <ContactButton
                        icon={EmailSVG} 
                        href={"mailto:mitch@mitchlui.dev"} 
                        alt={"email contact icon"} 
                        text={"Email"}
                    />
                </li>
                <li>
                    <ContactButton 
                        icon={LinkedInSVG} 
                        href={"https://www.linkedin.com/in/mitchlui/"} 
                        alt={"linkedin contact icon"} 
                        text={"Linkedin"}
                    />
                </li>
                <li>
                    <ContactButton 
                        icon={GitHubSVG} 
                        href={"https://www.github.com/mitchlui"} 
                        alt={"github contact icon"} 
                        text={"GitHub"}
                    />
                </li>
                <li>
                    <ContactButton 
                        icon={TwitterSVG} 
                        href={"https://www.twitter.com/mitchluidev"} 
                        alt={"twitter contact icon"} 
                        text={"Twitter"}
                    />
                </li>
            </ul>
        </div>
        <div>
            NB: I require visa sponsorship to work full-time in the UK.
        </div>
    </section>


