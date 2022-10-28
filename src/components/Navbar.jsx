import React from "react";
import "../css/navbar.css";
// import dragonball from "../../public/images/dragonball.png";

function Navbar() {
    return (
        <div className="navbar_container">
            {/* <img src={dragonball} width="100" alt="dragon ball"></img> */}
            <nav>
                <ul className="navItems">
                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#works">Works</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;
/** <li>
                    <a href="#hobbies">Hobbies</a>
                </li> */
