import React from "react";
import { Link } from "react-router-dom";
import { Cross } from "../Cross/Cross";
import "./button.css";

export const Button = (props) => 
    <a className={"button"} href={props.url} target={props.target} alt={props.alt}>{props.text}</a>

export const LinkButton = (props) =>
    <Link to={props.to} className={"button"}>{props.text}</Link>

export const ModalCloseButton = (props) =>
    <Link to={props.to} className={"modal"}><Cross/></Link>
