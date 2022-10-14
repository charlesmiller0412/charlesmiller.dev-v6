import { useState } from "react";
import $ from "jquery";
import Images from "../../assets/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Overlay() {
    const [showOverlay, setShowOverlay] = useState();

    $(document).on("click", "a", function () {
        setShowOverlay(false);
    });
    return (
        <>
            {/* overlay open/close button */}
            <div
                id="overlay__close"
                onClick={() => setShowOverlay(!showOverlay)}
            >
                {showOverlay ? (
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        size="xl"
                        id="overlay__close--icon"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faBars}
                        size="xl"
                        id="overlay__close--icon"
                    />
                )}
            </div>
            {/* overlay */}
            <div id="overlay" className={showOverlay ? "showOverlay" : ""}>
                {/* featured project section */}
                <div
                    id="overlay__featuredProject"
                    className={showOverlay ? "showFeatured" : ""}
                >
                    {/* logo and link to home */}
                    <a
                        href="https://www.charlesmiller.dev"
                        id="overlay__featuredProject--homeLink"
                    >
                        CHARLES MILLER
                        <img src={Images.logos.logo} alt="logo" />
                    </a>
                    <a
                        href="https://planet-fact-site-n7oo.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div id="overlay__featuredProject--img" />

                        <div id="overlay__featuredProject--text">
                            <h3>Featured Project</h3>
                            <h5>Planet Facts App</h5>
                        </div>
                    </a>
                </div>
                <div
                    id="overlay__contactInfo"
                    className={showOverlay ? "showContact" : "hideSocialLinks"}
                >
                    <a href="mailto:charles@charlesmiller.dev">
                        charles
                        <img
                            src={Images.contact.at}
                            alt="at symbol"
                            id="overlay__contactInfo--at"
                        />
                        charlesmiller.dev
                    </a>
                    <a
                        href="https://www.linkedin.com/in/charlesmiller0412"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Images.contact.linkedIn}
                            alt="linked in"
                            className="socialLinks"
                        />
                        <span>/charlesmiller0412</span>
                    </a>
                    <a
                        href="https://www.github.com/charlesmiller0412"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Images.contact.github}
                            alt="github"
                            className="socialLinks"
                        />
                        <span>/charlesmiller0412</span>
                    </a>
                    <a
                        href="https://discordapp.com/users/2807/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={Images.icons.discord}
                            alt="Discord"
                            id="overlay__contactInfo--discord"
                        />
                        <span>/charlesmiller0412</span>
                    </a>
                </div>
                <div
                    id="overlay__links"
                    className={showOverlay ? "showLinks" : ""}
                >
                    <ul className={showOverlay ? "" : "hideLinks"}>
                        <a href="#home">
                            <li>Home</li>
                        </a>
                        <a href="#projects">
                            <li>Projects</li>
                        </a>
                        <a href="#about">
                            <li>About</li>
                        </a>
                        <a href="#contact">
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    );
}
