import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Github from "../assets/sidebar/github.png";
import Behance from "../assets/sidebar/behance.png";
import Linkedin from "../assets/sidebar/linkedin.png";
import LogoDark from "../assets/logoDark.png";

export default function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <div>
            <div id="mobileNav">
                <ul>
                    <a href="#projects" onClick={closeMenu}>
                        <li>
                            <FontAwesomeIcon icon={faFolderClosed} />
                            <span>Portfolio</span>
                        </li>
                    </a>
                    <a href="" onClick={closeMenu}>
                        <li>
                            <FontAwesomeIcon icon={faList} />
                            <span>Skills</span>
                        </li>
                    </a>
                    <a href="#contact__text--attention" onClick={closeMenu}>
                        <li>
                            <FontAwesomeIcon icon={faComment} />
                            <span>Hire Me</span>
                        </li>
                    </a>
                    <li onClick={handleToggle}>
                        {menuOpen ? (
                            <FontAwesomeIcon icon={faCircleChevronRight} />
                        ) : (
                            <FontAwesomeIcon icon={faCircleChevronLeft} />
                        )}

                        <span>Menu</span>
                    </li>
                </ul>
            </div>
            <div
                id="sideMenu"
                className={`menuNav ${
                    menuOpen ? " swing-in-right-fwd" : " swing-out-right-bck"
                }`}
            >
                <ul>
                    <a href="#home">
                        <li>Home</li>
                    </a>
                    <a href="#projects">
                        <li>Projects</li>
                    </a>
                    <a href="#about">
                        <li>About Me</li>
                    </a>
                    <a href="#contact__text--attention">
                        <li>Get in touch!</li>
                    </a>
                </ul>
                <div id="sideMenu__contact">
                    <img src={LogoDark} alt="logo" />
                    <div id="sideMenu__contact--links">
                        <a
                            href="mailto:charles@charlesmiller.dev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a
                            href="https://www.github.com/charlesmiller0412"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={Github} alt="github" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/charlesmiller0412"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={Linkedin} alt="linkedin" />
                        </a>
                        <a
                            href="https://www.behance.net/charlesmiller0412"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={Behance} alt="behance" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
