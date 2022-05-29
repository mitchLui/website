import React from "react";
import "./arrow.css";

export const Arrow = ({ text }) =>
    <div className={"goback-container"}>
        <div className={"arrow"}/>
        <span className={"arrow-text"}>{text}</span>
    </div>
