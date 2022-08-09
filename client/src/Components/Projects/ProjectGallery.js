import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import WeatherImage from "../../assets/projects/gallery/weatherImage.png";
import TwoTrees from "../../assets/projects/gallery/twotrees2.png";
import DutchBros from "../../assets/projects/gallery/dutchBros.jpg";
import Natours from "../../assets/projects/gallery/natours.png";
export default function ProjectGallery() {
    return (
        <Carousel
            id="projectGallery__carousel"
            showStatus={false}
            useKeyboardArrows={true}
            showThumbs={true}
        >
            {/* slide 1 */}
            <div id="projectGallery__carousel--content">
                <div id="projectGallery__carousel--content-left">
                    <img src={WeatherImage} alt="weather application" />
                </div>
                <div className="verticalLine"></div>
                <div id="projectGallery__carousel--content-right">
                    <h2>Weather Application</h2>
                    <p>
                        Given the task to create a project that would display my
                        skills and knowledge that were obtained while completing
                        my degree. This opportunity was used to challenge myself
                        and learn something new while still applying my already
                        known skills. A web application using React.JS was the
                        chosen project. Within React, OpenWeatherMap API using
                        JSON was used for all of the data that was necessary to
                        populate the application. This project was delivered
                        fully operational and on-time with proper validation to
                        ensure there is no failure within the application.
                        <ul>
                            <li>React</li>
                            <li>CSS</li>
                            <li>BootStrap</li>
                            <li>JSON</li>
                            <li>API</li>
                        </ul>
                    </p>

                    <div id="projectGallery__carousel--content-right-links">
                        <a
                            href="https://github.com/charlesmiller0412/weatherApp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See the code
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="icon"
                            />
                        </a>
                        <a
                            href="https://www.charlesmiller.dev/weather-app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See the site
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="icon"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* slide 2 */}
            <div id="projectGallery__carousel--content">
                <div id="projectGallery__carousel--content-left">
                    <img src={TwoTrees} alt="Two Trees Front-End Project" />
                </div>
                <div className="verticalLine"></div>
                <div id="projectGallery__carousel--content-right">
                    <h2>Two Trees Design</h2>
                    <p>
                        Tasked with creating a web page based on the given
                        design file (Sketch/Figma), I was able to successfully
                        deliver a near pixel perfect page based on desktop view.
                        This was one of my very first projects and am currently
                        working to make it fully responsive as well.
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Responsive</li>
                        </ul>
                    </p>

                    <div id="projectGallery__carousel--content-right-links">
                        <a
                            href="https://github.com/charlesmiller0412/twotrees"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See the code
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="icon"
                            />
                        </a>
                        <a
                            href="https://www.charlesmiller.dev/projects/web/Two%20Trees/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See the site
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="icon"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* slide 3 */}
            <div id="projectGallery__carousel--content">
                <div id="projectGallery__carousel--content-left">
                    <img src={DutchBros} alt="Dutch Bros UX/UI Redesign" />
                </div>
                <div className="verticalLine"></div>
                <div id="projectGallery__carousel--content-right">
                    <h2>Dutch Bros Coffee UX/UI Redesign</h2>
                    <p>
                        The Dutch Bros coffee chain website had several issues
                        and needed a complete redesign. To achieve the results
                        that we had presented to the Dutch Bros, we conducted
                        several usability tests and created multiple prototypes
                        in order to ensure all errors and issues identified in
                        testing were resolved.
                        <ul>
                            <li>Usability Testing</li>
                            <li>Persona Creation</li>
                            <li>Wireframing</li>
                            <li>Mockups</li>
                            <li>Prototyping</li>
                        </ul>
                    </p>

                    <div id="projectGallery__carousel--content-right-links">
                        <a
                            href="https://www.charlesmiller.dev/projects/web/dutchBros/dutchbros.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See the process
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="icon"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* slide 4 */}
            <div id="projectGallery__carousel--content">
                <div id="projectGallery__carousel--content-left">
                    <img src={Natours} alt="Natours Landing Page" />
                </div>
                <div className="verticalLine"></div>
                <div id="projectGallery__carousel--content-right">
                    <h2>Dutch Bros Coffee UX/UI Redesign</h2>
                    <p>
                        Natours is a landing page for a company that provides
                        multi-day nature tours to groups. This landing page was
                        very detailed and includes many different engaging
                        effects for the user to include a video for a background
                        and rotating cards using only SCSS while also being
                        fully responsive. This gave an enjoyable experience to
                        the user while incorporating a very unique design to
                        make Natours memorable.
                        <ul>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                            <li>SCSS</li>
                        </ul>
                    </p>

                    <div id="projectGallery__carousel--content-right-links">
                        <a
                            href="https://github.com/charlesmiller0412/natours"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See the code
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="icon"
                            />
                        </a>
                        <a
                            href="https://www.charlesmiller.dev/projects/web/natours/index.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            See the site
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}
