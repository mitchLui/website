import React from "react";
import HamburgerOpenSVG from "./hamburger/hamburgeropen.svg";
import HamburgerCloseSVG from "./hamburger/hamburgerclose.svg";
import "./hamburger.css";

export const HamburgerMenu = ({onClick, isOpen}) =>
    <>
    {
        !isOpen && 
        <>
        <img onClick={onClick} className={"hamburger"} src={HamburgerOpenSVG} alt="open hamburger menu"/>
        </>
    }
    {
        isOpen &&
        <>
        <img onClick={onClick} className={"hamburger"} src={HamburgerCloseSVG} alt="close hamburger menu"/>
        </>
    }
    </>