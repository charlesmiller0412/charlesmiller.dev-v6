import React from "react";
import github from "../assets/sidebar/github.png";
import behance from "../assets/sidebar/behance.png";
import linkedin from "../assets/sidebar/linkedin.png";
import Arrow from "../assets/contact/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <div id="contact__text">
                    <div id="contact__text--attention">
                        <h2>Let's get in touch!</h2>
                    </div>
                    <div id="contact__text--list">
                        <h3>Available for:</h3>
                        <ul>
                            <li>Collaboration</li>
                            <li>Work</li>
                            <li>Ideas</li>
                            <li>
                                or just general web development conversation
                            </li>
                        </ul>
                    </div>
                    <div id="contact__text--links">
                        <ul>
                            <a href="mailto:charles@charlesmiller.dev">
                                <li>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </li>
                            </a>
                            <a href="https://www.linkedin.com/in/charlesmiller0412">
                                <li>
                                    <img src={linkedin} alt="linked in" />
                                </li>
                            </a>
                            <a href="https://www.github.com/charlesmiller0412">
                                <li>
                                    <img src={github} alt="github" />
                                </li>
                            </a>
                            <a href="https://www.behance.net/charlesmiller0412">
                                <li>
                                    <img src={behance} alt="behance" />
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div id="contact__form">
                    <div id="contact__form--title">
                        <img src={Arrow} alt="arrow" id="arrow" />
                        <h2>Send me a message</h2>
                    </div>
                    <div id="contact__form--form">
                        <form>
                            <input
                                type="text"
                                name="first"
                                placeholder="First name"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="E-Mail address"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number (Optional)"
                            />
                            <textarea
                                type="text"
                                name="message"
                                placeholder="What's your message?"
                            />

                            <div id="formBtns">
                                <input type="reset" id="resetBtn" />
                                <input
                                    type="submit"
                                    name="submit"
                                    value="Submit"
                                    id="submitBtn"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
