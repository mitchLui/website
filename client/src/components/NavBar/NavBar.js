import { React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { HamburgerMenu } from "../Hamburger/Hamburger";
import "./navbar.css";

const MOBILE = 768;

export const NavBar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < MOBILE);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < MOBILE) {
                setIsMobileMenu(true);
            } else {
                setIsMobileMenu(false);
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
    });

    return (
        <>
        {!isMobileMenu &&  <DesktopNavBar />}
        {isMobileMenu && <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </>
    )
}

export const DesktopNavBar = () => 
    <header className="navbar desktop">
        <Link to={"/"} className="logo-link"><Logo /></Link>
        <NavBarLinks/>
    </header>

export const MobileNavBar = ({isOpen, setIsOpen}) =>
    <header className="navbar mobile">
        <div>
            <Link to={"/"} className="logo-link"><Logo /></Link>
            <div className="hamburger-menu-container" onClick={() => setIsOpen(!isOpen)}>
                <HamburgerMenu isOpen={isOpen}/>
            </div>
        </div>
        <div className={`mobile-menu ${isOpen ? "open" : "close"}`}>
            <NavBarLinks onClick={() => setIsOpen(!isOpen)}/>
        </div>
    </header>



export const NavBarLinks = ({onClick}) =>
    <nav>
        <ul>
            <li onClick={onClick}><Link to={"/"}>home</Link></li>
            <li onClick={onClick}><Link to={"/projects"}>projects</Link></li>
            <li><Link to={"/cv.pdf"} target={"_blank"} rel={"noreferrer"}>cv</Link></li>
        </ul>
    </nav>

        
export const Logo = () => 
    <div className={"logo-container"}>
        <h1 className={"logo"}>mitch<span className={"bold"}>Lui</span></h1>
    </div>