import React from "react";
import Images from ".././assets/Images";

export default function About() {
    return (
        <section id="about">
            <div id="about__top">
                <div id="about__top--image">
                    <img src={Images.about.myPhoto} alt="Charles Miller" />
                </div>
                <div id="about__top--text">
                    <h2>Charles Miller</h2>
                    <h3>Web Developer | UX/UI Designer</h3>
                    <p>
                        My long-time passion has been to create fun and
                        attractive websites using the appropriate project
                        lifecycle and the latest technologies. I use my interest
                        for design and my knowledge of code to bring the most
                        intricate projects to life.
                    </p>
                    <div id="about__top--text-center">
                        <p>Aside from my career, some things I enjoy are:</p>
                        <ul>
                            <li>the subtle art of sarcasm</li>
                            <li>family time</li>
                            <li>ice hockey</li>
                            <li>progressive change and behaviorisms</li>
                        </ul>
                    </div>
                    <h5>If you're still reading...</h5>
                    <p>
                        I spent my early adult life serving as a firefighter in
                        the US Military until deciding to pursue my true passion
                        in web development as a career. I am now able to combine
                        the Air Force core values (Integrity, Service, and
                        Excellence) with my own (Ambition, Detail Oriented,
                        Professional, and Compassion) in order to be a great
                        asset to any team.
                    </p>
                </div>
            </div>
            <div id="about__bottom">
                <div id="about__bottom--skills">
                    <div id="about__bottom--skills-list">
                        <h2>
                            Experience in
                            <img src={Images.about.rectangle} alt="Rectangle" />
                        </h2>
                        <div className="row">
                            <span className="tooltip" data-tooltip="HTML">
                                <img src={Images.icons.html} alt="HTML" />
                            </span>
                            <span className="tooltip" data-tooltip="CSS">
                                <img src={Images.icons.css} alt="CSS" />
                            </span>
                            <span className="tooltip" data-tooltip="JavaScript">
                                <img
                                    src={Images.icons.javascript}
                                    alt="JavaScript"
                                />
                            </span>
                            <span className="tooltip" data-tooltip="MongoDB">
                                <img src={Images.icons.mongoDB} alt="MongoDB" />
                            </span>
                            <span className="tooltip" data-tooltip="Express.JS">
                                <img
                                    src={Images.icons.expressJS}
                                    alt="Express.JS"
                                />
                            </span>
                            <span className="tooltip" data-tooltip="React.JS">
                                <img
                                    src={Images.icons.reactIcon}
                                    alt="React.JS"
                                />
                            </span>
                            <span className="tooltip" data-tooltip="Node.JS">
                                <img src={Images.icons.nodeJS} alt="Node.JS" />
                            </span>
                            <span className="tooltip" data-tooltip="jQuery">
                                <img src={Images.icons.jquery} alt="jQuery" />
                            </span>
                            <span className="tooltip" data-tooltip="JSON">
                                <img src={Images.icons.jsonIcon} alt="JSON" />
                            </span>
                        </div>
                        <div className="row">
                            <span className="tooltip" data-tooltip="Sass">
                                <img src={Images.icons.sass} alt="Sass" />
                            </span>
                            <span className="tooltip" data-tooltip="Bootstrap">
                                <img
                                    src={Images.icons.bootstrap}
                                    alt="Bootstrap"
                                />
                            </span>
                            <span className="tooltip" data-tooltip="Git">
                                <img src={Images.icons.git} alt="Git" />
                            </span>
                            <span className="tooltip" data-tooltip="PHP">
                                <img src={Images.icons.php} alt="PHP" />
                            </span>
                            <span className="tooltip" data-tooltip="Python">
                                <img src={Images.icons.python} alt="Python" />
                            </span>
                            <span className="tooltip" data-tooltip="Java">
                                <img src={Images.icons.java} alt="Java" />
                            </span>
                            <span className="tooltip" data-tooltip="Bash">
                                <img src={Images.icons.bash} alt="Bash" />
                            </span>
                            <span className="tooltip" data-tooltip="Markdown">
                                <img
                                    src={Images.icons.markdown}
                                    alt="Markdown"
                                />
                            </span>
                            <span className="tooltip" data-tooltip="Rest API">
                                <img
                                    src={Images.icons.restAPI}
                                    alt="Rest API"
                                />
                            </span>
                        </div>
                    </div>
                    <div id="about__bottom--skills-list">
                        <h2>
                            Tools I use
                            <img src={Images.about.rectangle} alt="Rectangle" />
                        </h2>
                        <div className="row">
                            <span className="tooltip" data-tooltip="VS Code">
                                <img
                                    src={Images.icons.vsCode}
                                    alt="Visual Studio Code"
                                />
                            </span>
                            <span
                                className="tooltip tooltip__tall"
                                data-tooltip="Node Package Manager (NPM)"
                            >
                                <img
                                    src={Images.icons.npmIcon}
                                    alt="Node Package Manager (NPM)"
                                />
                            </span>
                            <span
                                className="tooltip tooltip__tall"
                                data-tooltip="Block Element Modifier"
                            >
                                <img src={Images.icons.bem} alt="BEM" />
                            </span>
                            <span className="tooltip" data-tooltip="Github">
                                <img src={Images.icons.github} alt="Github" />
                            </span>
                            <span className="tooltip" data-tooltip="Wordpress">
                                <img
                                    src={Images.icons.wordpress}
                                    alt="Wordpress"
                                />
                            </span>
                            <span
                                className="tooltip"
                                data-tooltip="Amazon Web Services"
                            >
                                <img
                                    src={Images.icons.aws}
                                    alt="Amazon Web Services"
                                />
                            </span>
                            <span className="tooltip" data-tooltip="Google">
                                <img src={Images.icons.google} alt="Google" />
                            </span>
                        </div>
                        <div className="row">
                            <span className="tooltip" data-tooltip="Figma">
                                <img src={Images.icons.figma} alt="Figma" />
                            </span>

                            <span className="tooltip" data-tooltip="Photoshop">
                                <img
                                    src={Images.icons.photoshop}
                                    alt="Photoshop"
                                />
                            </span>
                            <span
                                className="tooltip"
                                data-tooltip="Illustrator"
                            >
                                <img
                                    src={Images.icons.illustrator}
                                    alt="Illustrator"
                                />
                            </span>
                            <span className="tooltip" data-tooltip="XD">
                                <img src={Images.icons.xd} alt="XD" />
                            </span>
                            <span
                                className="tooltip"
                                data-tooltip="After Effects"
                            >
                                <img
                                    src={Images.icons.afterEffects}
                                    alt="After Effects"
                                />
                            </span>
                            <span
                                className="tooltip"
                                data-tooltip="Premier Pro"
                            >
                                <img
                                    src={Images.icons.premier}
                                    alt="Premier Pro"
                                />
                            </span>
                            <span
                                className="tooltip"
                                data-tooltip="Stack Overflow &#128514;"
                            >
                                <img
                                    src={Images.icons.stackOverflow}
                                    alt="Stack Overflow"
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <span id="about__bottom--info-text" className="txt-shine">
                    (Hover or tap on an icon for more info)
                </span>
            </div>
        </section>
    );
}
