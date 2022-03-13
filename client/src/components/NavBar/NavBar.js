import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => 
    <header className="navbar">
        <Link to={"/"} className="logo-link"><Logo></Logo></Link>
        <nav>
            <ul>
                <li><Link to={"/"}>home</Link></li>
                <li><Link to={"/projects"}>projects</Link></li>
                <li><Link to={"/cv.pdf"} target={"_blank"} rel={"noreferrer"}>cv</Link></li>
            </ul>
        </nav>
    </header>
        
export const Logo = () => 
    <div className={"logo-container"}>
        <h1 className={"logo"}>mitch<span className={"bold"}>Lui</span></h1>
    </div>