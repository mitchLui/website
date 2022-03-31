import React from "react";
import { ContactButton } from "../Button/Button";
import EmailSVG from "./contact_images/email.svg";
import LinkedInSVG from "./contact_images/linkedin.svg";
import GitHubSVG from "./contact_images/github.svg";
import "./contact.css";

export const Contact = () =>
    <section className={"contact-container"}>
        <div className={"contact-header-text"}>
            Contact me:
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
            </ul>
        </div>
    </section>

