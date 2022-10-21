import React from "react";
import Images from "../../assets/Images";
import ProjectCarousel from "./ProjectCarousel";
import Lottie from "react-lottie";

export default function Home() {
    const rocketOptions = {
        loop: true,
        autoplay: true,
        animationData: Images.home.rocket,
    };
    return (
        <section id="home">
            <div id="home__intro">
                <img src={Images.logos.watermark} alt="logo" id="watermark" />
                <img
                    src={Images.home.topright}
                    alt="top right circles"
                    id="topRight"
                />
                <img
                    src={Images.home.bottomLeft}
                    alt="bottom left circles"
                    id="bottomLeft"
                />
                <div id="home__intro--text">
                    <div id="home__intro--text-left">
                        <h1>
                            Hi,
                            <span id="home__intro--text-left-intro">
                                I'm Charles!
                            </span>
                        </h1>
                        <h2>A Full Stack Web Developer & Software Engineer</h2>
                    </div>
                    <div id="home__intro--text-right">
                        <h3>
                            I make your online presence memorable to the world
                        </h3>
                        <a
                            href="#projects"
                            id="home__intro--text-right-link"
                            className="button2"
                        >
                            <div id="home__intro--text-right-link-container">
                                <Lottie
                                    options={rocketOptions}
                                    height={60}
                                    width={50}
                                />

                                <span>See my work</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <ProjectCarousel />
        </section>
    );
}
