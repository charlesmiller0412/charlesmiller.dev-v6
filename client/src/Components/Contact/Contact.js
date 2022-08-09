import React from "react";
import Images from "../../assets/Images";
import ContactForm from "./ContactForm";
import Lottie from "react-lottie";

export default function Contact() {
    const bgOptions = {
        loop: true,
        autoplay: true,
        animationData: Images.contact.contactBG,
        rendererSettings: {
            preserveAspectRatio: "xMidYMin slice",
        },
    };
    const bgStyle = {
        position: "absolute",
        top: "-10%",
        left: "-25%",
        width: "125%",
        height: "110%",
    };
    return (
        <section id="contact">
            <Lottie options={bgOptions} style={bgStyle} />

            <img src={Images.contact.arrow} alt="arrow" id="arrow" />
            <div id="contact__text">
                <div id="contact__text--attention">
                    <h2>Get in touch!</h2>
                </div>
                <div id="contact__text--group" className="row">
                    <div id="contact__text--links">
                        <div className="row">
                            <a href="mailto:charles@charlesmiller.dev">
                                charles
                                <img src={Images.contact.at} alt="at symbol" />
                                charlesmiller.dev
                            </a>
                        </div>
                        <div className="row">
                            <img
                                src={Images.contact.orWritten}
                                alt="or"
                                id="or"
                            />
                        </div>
                        <div className="row">
                            <a
                                href="https://www.linkedin.com/in/charlesmiller0412"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div id="imgWrap">
                                    <img
                                        src={Images.contact.linkedIn}
                                        alt="linked in"
                                    />
                                </div>
                            </a>
                            <a
                                href="https://www.github.com/charlesmiller0412"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div id="imgWrap">
                                    <img
                                        src={Images.contact.github}
                                        alt="github"
                                    />
                                </div>
                            </a>
                            <a
                                href="https://discordapp.com/users/2807/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div id="imgWrap">
                                    <img
                                        src={Images.icons.discord}
                                        alt="Discord"
                                    />
                                </div>
                            </a>
                        </div>
                        <div className="row" id="userLink">
                            /charlesmiller0412
                            <img
                                src={Images.contact.underline}
                                alt="underline"
                                id="underline"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact__split"></div>
            <div id="contact__form">
                <div id="contact__form--title">
                    <h2>Send me a message</h2>
                </div>
                <div id="contact__form--form">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
