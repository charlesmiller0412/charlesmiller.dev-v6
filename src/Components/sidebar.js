import React from "react";
import LinkedIn from "../assets/sidebar/linkedin.png";
import Github from "../assets/sidebar/github.png";
import Behance from "../assets/sidebar/behance.png";
import Line from "../assets/sidebar/line.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar() {
    return (
        <div id="sidebar">
            <div id="sidebar__links">
                <ul>
                    <li>
                        <img src={Line} alt="line" id="line" />
                    </li>
                    <a href="mailto:charles@charlesmiller.dev">
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </li>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/charlesmiller0412"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <li>
                            <img src={LinkedIn} alt="linkedin" />
                        </li>
                    </a>
                    <a
                        href="https://www.github.com/charlesmiller0412"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <li>
                            <img src={Github} alt="Github" />
                        </li>
                    </a>
                    <a
                        href="https://www.behance.net/charlesmiller0412"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <li>
                            <img src={Behance} alt="Behance" />
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    );
}
