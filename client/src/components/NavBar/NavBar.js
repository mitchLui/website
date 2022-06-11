import { React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { HamburgerMenu } from "../Hamburger/Hamburger";
import "./navbar.scss";

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
        window.onresize = handleResize;
    });

    return (
        <>
        {!isMobileMenu &&  <DesktopNavBar setIsOpen={setIsOpen} />}
        {isMobileMenu && <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </>
    )
}

export const DesktopNavBar = ({setIsOpen}) => 
    <header className="navbar desktop">
        <Logo setIsOpen={setIsOpen}/>
        <NavBarLinks/>
    </header>

export const MobileNavBar = ({isOpen, setIsOpen}) =>
    <header className="navbar mobile">
        <div className={"mainnav"}>
            <Logo setIsOpen={setIsOpen}/>
            <div className="hamburger-menu-container" >
                <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
            </div>
        </div>
        <div className={`mobile-menu ${isOpen ? "mobile-nav-open" : "mobile-nav-close"}`}>
            <NavBarLinks onClick={() => setIsOpen(!isOpen)}/>
        </div>
    </header>



export const NavBarLinks = ({onClick}) =>
    <nav>
        <ul>
            <Link to={"/"}>
                <li onClick={onClick}>
                    <span className={"nav-text"}>Home</span>
                </li>
            </Link>
            <Link to={"/about"}>
                <li onClick={onClick}>
                    <span className={"nav-text"}>About</span>
                </li>
            </Link>
            <Link to={"/projects"}>
                <li onClick={onClick}>
                    <span className={"nav-text"}>Projects</span>
                </li>
            </Link>
            <Link to={"/cv.pdf"} target={"_blank"} rel={"noreferrer"}>
                <li onClick={onClick}>
                    <span className={"nav-text"}>CV</span>
                </li>
            </Link>
        </ul>
    </nav>

        
export const Logo = ({setIsOpen}) => 
    <div className={"logo-container"}>
        <Link onClick={()=> setIsOpen(false)} to={"/"} className="logo-link">
            <h1 className={"logo"}><img className={"logo-graphic"} src={"/logo.svg"} alt={"logo"}/>mitch<span className={"bold"}>Lui</span></h1>
        </Link>
    </div>