import React, { useState } from "react";
import Images from "../../assets/Images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function MobileNav() {
    const [skillsOpen, setSkillsOpen] = useState();

    return (
        <>
            <div id="mobileNav">
                <ul>
                    <a href="#home">
                        <li className="activeMobile" id="mobileHomeLink">
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Home</span>
                        </li>
                    </a>
                    <a href="#projects">
                        <li id="mobileProjectsLink">
                            <FontAwesomeIcon icon={faFolderClosed} />
                            <span>Portfolio</span>
                        </li>
                    </a>
                    <li
                        onClick={() => setSkillsOpen(!skillsOpen)}
                        id="skillsMobile__button"
                        className={skillsOpen ? "activeMobile" : ""}
                    >
                        {skillsOpen ? (
                            <FontAwesomeIcon icon={faListCheck} beat />
                        ) : (
                            <FontAwesomeIcon icon={faList} />
                        )}

                        <span>Skills</span>
                    </li>
                    <a href="#about">
                        <li id="mobileAboutLink">
                            <FontAwesomeIcon icon={faUser} />
                            <span>About</span>
                        </li>
                    </a>

                    <a href="#contact__text--attention">
                        <li id="mobileContactLink">
                            <FontAwesomeIcon icon={faComment} />
                            <span>Hire Me</span>
                        </li>
                    </a>
                </ul>
            </div>
            <div id="skillsMobile" className={skillsOpen ? "showSkills" : ""}>
                <div id="skillsMobile__content">
                    {/* top experience */}
                    <div id="skillsMobile__content--experience">
                        <div id="skillsMobile__content--experience-title">
                            <h2>
                                Experience in
                                <img
                                    src={Images.about.rectangle}
                                    alt="Rectangle"
                                />
                            </h2>
                        </div>
                        <div className="row">
                            <img src={Images.icons.html} alt="HTML" />
                            <img src={Images.icons.css} alt="CSS" />
                            <img
                                src={Images.icons.javascript}
                                alt="JavaScript"
                            />
                            <img src={Images.icons.mongoDB} alt="MongoDB" />
                            <img
                                src={Images.icons.expressJS}
                                alt="Express.JS"
                            />
                            <img src={Images.icons.reactIcon} alt="React.JS" />
                            <img src={Images.icons.nodeJS} alt="Node.JS" />
                            <img src={Images.icons.jquery} alt="jQuery" />
                            <img src={Images.icons.jsonIcon} alt="JSON" />
                        </div>
                        <div className="row">
                            <img src={Images.icons.sass} alt="Sass" />
                            <img src={Images.icons.bootstrap} alt="Bootstrap" />
                            <img src={Images.icons.git} alt="Git" />
                            <img src={Images.icons.php} alt="PHP" />
                            <img src={Images.icons.python} alt="Python" />
                            <img src={Images.icons.java} alt="Java" />
                            <img src={Images.icons.bash} alt="Bash" />
                            <img src={Images.icons.markdown} alt="Markdown" />
                            <img src={Images.icons.restAPI} alt="Rest API" />
                        </div>
                    </div>
                    {/* bottom tools */}
                    <div id="skillsMobile__content--tools">
                        <div id="skillsMobile__content--tools-title">
                            <h2>
                                Tools I use
                                <img
                                    src={Images.about.rectangle}
                                    alt="Rectangle"
                                />
                            </h2>
                        </div>
                        <div className="row">
                            <img
                                src={Images.icons.vsCode}
                                alt="Visual Studio Code"
                            />
                            <img
                                src={Images.icons.npmIcon}
                                alt="Node Package Manager (NPM)"
                            />
                            <img src={Images.icons.bem} alt="BEM" />
                            <img src={Images.icons.github} alt="Github" />
                            <img src={Images.icons.wordpress} alt="Wordpress" />
                            <img
                                src={Images.icons.aws}
                                alt="Amazon Web Services"
                            />
                            <img src={Images.icons.google} alt="Google" />
                        </div>
                        <div className="row">
                            <img src={Images.icons.figma} alt="Figma" />
                            <img src={Images.icons.photoshop} alt="Photoshop" />
                            <img
                                src={Images.icons.illustrator}
                                alt="Illustrator"
                            />
                            <img src={Images.icons.xd} alt="XD" />
                            <img
                                src={Images.icons.afterEffects}
                                alt="After Effects"
                            />
                            <img src={Images.icons.premier} alt="Premier Pro" />
                            <img
                                src={Images.icons.stackOverflow}
                                alt="Stack Overflow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
