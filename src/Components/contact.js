import React from "react";
import ContactForm from "./contactForm";
import github from "../assets/sidebar/github.png";
import behance from "../assets/sidebar/behance.png";
import linkedin from "../assets/sidebar/linkedin.png";
import Arrow from "../assets/contact/arrow.png";
import At from "../assets/contact/at.png";
import underline from "../assets/contact/underline.png";
import or from "../assets/contact/orWritten.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
    return (
        <section id="contact">
            <div id="contact__text">
                <div id="contact__text--attention">
                    <h2>Get in touch!</h2>
                </div>
                <div id="contact__text--group" className="row">
                    <div id="contact__text--group-info">
                        <h3>Available for:</h3>
                        <ul>
                            <div>
                                <li>Work</li>
                                <li>Ideas</li>
                            </div>
                            <div>
                                <li>Collaboration</li>
                                <li>Coffee</li>
                            </div>
                        </ul>
                    </div>
                    <div id="contact__text--group-links">
                        <div className="row">
                            <a href="mailto:charles@charlesmiller.dev">
                                charles
                                <img src={At} alt="at symbol" />
                                charlesmiller.dev
                            </a>
                        </div>
                        <div className="row">
                            <img src={or} alt="or" id="or" />
                        </div>
                        <div className="row">
                            <a href="https://www.linkedin.com/in/charlesmiller0412">
                                <div id="imgWrap">
                                    <img src={linkedin} alt="linked in" />
                                </div>
                            </a>
                            <a href="https://www.github.com/charlesmiller0412">
                                <div id="imgWrap">
                                    <img src={github} alt="github" />
                                </div>
                            </a>
                            <a href="https://www.behance.net/charlesmiller0412">
                                <div id="imgWrap">
                                    <img src={behance} alt="behance" />
                                </div>
                            </a>
                        </div>
                        <div className="row" id="userLink">
                            /charlesmiller0412
                            <img
                                src={underline}
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
                    <img src={Arrow} alt="arrow" id="arrow" />
                    <h2>Send me a message</h2>
                </div>
                <div id="contact__form--form">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
