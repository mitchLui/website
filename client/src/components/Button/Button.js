import React from "react";
import { Link } from "react-router-dom";
import { Cross } from "../Cross/Cross";
import "./button.css";

export const Button = ({url, target, alt, text}) => 
    <a className={"button"} href={url} target={target} alt={alt}>{text}</a>

export const VPButton = ({url, target, alt, text}) => 
    <a className={"button agm"} href={url} target={target} alt={alt}>{text}</a>

export const LinkButton = ({to, text}) =>
    <Link to={to} className={"button"}>{text}</Link>

export const ModalCloseButton = ({to}) =>
    <Link to={to} className={"modal"}><Cross/></Link>

export const ContactButton = ({icon, href, alt, text}) =>
    <a className={"button contact"} href={href} target={"_blank"} rel={"noreferrer"}>
        <div className={"contact-icon"}>
            <img src={icon} alt={alt}/>
        </div>
        <div className={"contact-text"}>
            {text}
        </div>
    </a>