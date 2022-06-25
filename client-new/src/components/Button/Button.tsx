import { Link } from "react-router-dom";
import { Arrow } from "../Arrow/Arrow";
import { Cross } from "../Cross/Cross";
import "./button.scss";

type Button = {
    text: string;
}

type ButtonProps = Button & {
    url: string;
    target: string;
}

export const Button = ({url, target, text}: ButtonProps): JSX.Element => 
    <a className={"button"} href={url} target={target}>{text}</a>

type LinkButtonProps = Button & {
    to: string;
}

export const LinkButton = ({to, text}: LinkButtonProps): JSX.Element =>
    <Link to={to} className={"button"}>{text}</Link>


type FunctionButtonProps = Button & {
    onClick: () => void;
}

export const FunctionButton = ({ onClick, text }: FunctionButtonProps): JSX.Element =>
    <button className={"button"} onClick={onClick}>{text}</button>

type LinkFunctionButtonProps = Button & LinkButtonProps & FunctionButtonProps;

export const LinkFunctionButton = ({to, text, onClick}: LinkFunctionButtonProps): JSX.Element =>
    <Link onClick={onClick} to={to} className={"button"}>{text}</Link>

type ModalCloseButtonProps = {
    onClick: () => void;
    to: string;
}

export const ModalCloseButton = ({onClick, to}: ModalCloseButtonProps): JSX.Element =>
    <Link onClick={onClick} to={to} className={"modal"}><Cross/></Link>

export const GoBackButton = ({to, text}: LinkButtonProps): JSX.Element =>
    <Link to={to} className={"modal"}><Arrow text={text}/></Link>

type ContactButtonProps = Button & {
    icon: string;
    href: string;
    alt: string;
}

export const ContactButton = ({icon, href, alt, text}: ContactButtonProps): JSX.Element =>
    <a className={"button contact"} href={href} target={"_blank"} rel={"noreferrer"}>
        <div className={"contact-icon"}>
            <img src={icon} alt={alt}/>
        </div>
        <div className={"contact-text"}>
            {text}
        </div>
    </a>