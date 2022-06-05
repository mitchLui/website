import React from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../Arrow/Arrow";
import { Cross } from "../Cross/Cross";
import "./button.scss";

export const Button = ({url, target, alt, text}) => 
    <a className={"button"} href={url} target={target} alt={alt}>{text}</a>

export const LinkButton = ({to, text}) =>
    <Link to={to} className={"button"}>{text}</Link>

export const LinkFunctionButton = ({to, text, onClick}) =>
    <Link onClick={onClick} to={to} className={"button"}>{text}</Link>

export const ModalCloseButton = ({onClick, to}) =>
    <Link onClick={onClick} to={to} className={"modal"}><Cross/></Link>

export const GoBackButton = ({to}) =>
    <Link to={to} className={"modal"}><Arrow text={"Projects"}/></Link>

export const ContactButton = ({icon, href, alt, text}) =>
    <a className={"button contact"} href={href} target={"_blank"} rel={"noreferrer"}>
        <div className={"contact-icon"}>
            <img src={icon} alt={alt}/>
        </div>
        <div className={"contact-text"}>
            {text}
        </div>
    </a>