import { Link } from "react-router-dom";
import { Arrow } from "../Arrow/Arrow";
import { Cross } from "../Cross/Cross";
import "./button.scss";

type CommonButtonProps = {
    text: string;
}

type ButtonProps = CommonButtonProps & {
    url: string | null;
    target: string;
}

export const Button = ({url, target, text}: ButtonProps): JSX.Element =>{
    if (url) {
        return (<a className={"button"} href={url} target={target}>{text}</a>);
    } else {
        return <></>;
    }
}
    
type LinkButtonProps = CommonButtonProps & {
    to: string;
}

export const LinkButton = ({to, text}: LinkButtonProps): JSX.Element =>
    <Link to={to} className={"button"}>{text}</Link>


type FunctionButtonProps = CommonButtonProps & {
    onClick: () => void;
}

export const FunctionButton = ({ onClick, text }: FunctionButtonProps): JSX.Element =>
    <button className={"button"} onClick={onClick}>{text}</button>

type LinkFunctionButtonProps = CommonButtonProps & LinkButtonProps & FunctionButtonProps;

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

type ContactButtonProps = CommonButtonProps & {
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