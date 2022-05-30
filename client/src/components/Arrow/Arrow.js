import React from "react";
import "./arrow.scss";

export const Arrow = ({ text }) =>
    <div className={"arrow-container"}>
        <div className={"arrow"}/>
        <span className={"arrow-text"}>{text}</span>
    </div>
