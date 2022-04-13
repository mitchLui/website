import React from "react";
import HamburgerOpenSVG from "./hamburger/hamburgeropen.svg";
import HamburgerCloseSVG from "./hamburger/hamburgerclose.svg";
import "./hamburger.css";

export const HamburgerMenu = ({isOpen}) =>
    <>
    {
        !isOpen && 
        <>
        <img className={"hamburger"} src={HamburgerOpenSVG} alt="open hamburger menu"/>
        </>
    }
    {
        isOpen &&
        <>
        <img className={"hamburger"} src={HamburgerCloseSVG} alt="close hamburger menu"/>
        </>
    }
    </>