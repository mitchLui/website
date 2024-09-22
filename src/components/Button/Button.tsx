import { Link } from 'react-router-dom';
import { Arrow } from '../Arrow/Arrow';
import { Cross } from '../Cross/Cross';
import { ReactElement } from 'react';
import './button.scss';

type CommonButtonProps = {
    text: string;
}

type ButtonProps = CommonButtonProps & {
    url: string | null;
    target: string;
}

export const Button = ({ url, target, text }: ButtonProps): ReactElement => {
  if (url) {
    return (<a className={'button'} href={url} target={target}>{text}</a>);
  } else {
    return <></>;
  }
};

type LinkButtonProps = CommonButtonProps & {
    to: string;
}

export const LinkButton = ({ to, text }: LinkButtonProps): ReactElement =>
  <Link to={to} className={'button'}>{text}</Link>;

type FunctionButtonProps = CommonButtonProps & {
    onClick: () => void;
}

export const FunctionButton = ({ onClick, text }: FunctionButtonProps): ReactElement =>
  <button className={'button'} onClick={onClick}>{text}</button>;

type LinkFunctionButtonProps = CommonButtonProps & LinkButtonProps & FunctionButtonProps;

export const LinkFunctionButton = ({ to, text, onClick }: LinkFunctionButtonProps): ReactElement =>
  <Link onClick={onClick} to={to} className={'button'}>{text}</Link>;

type ModalCloseButtonProps = {
    onClick: () => void;
    to: string;
}

export const ModalCloseButton = ({ onClick, to }: ModalCloseButtonProps): ReactElement =>
  <Link onClick={onClick} to={to} className={'modal'}><Cross/></Link>;

export const GoBackButton = ({ to, text }: LinkButtonProps): ReactElement =>
  <Link to={to} className={'modal'}><Arrow text={text}/></Link>;

type ContactButtonProps = CommonButtonProps & {
    icon: string;
    href: string;
    alt: string;
}

export const ContactButton = ({ icon, href, alt, text }: ContactButtonProps): ReactElement =>
  <a className={'button contact'} href={href} target={'_blank'} rel={'noreferrer'}>
    <div className={'contact-icon'}>
      <img src={icon} alt={alt}/>
    </div>
    <div className={'contact-text'}>
      {text}
    </div>
  </a>;
