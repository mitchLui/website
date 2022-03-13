import React from "react";
import "./button.css";

export const Button = (props) => 
    <a className={"button"} href={props.url} target={props.target} alt={props.alt}>{props.text}</a>

    