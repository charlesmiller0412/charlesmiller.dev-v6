import React from "react";
import logoDark from "../assets/logoDark.png";
import rightArrow from "../assets/home/arrowRight.png";
import underline from "../assets/home/underline.png";
import topRight from "../assets/home/topRight.png";
import bottomLeft from "../assets/home/bottomLeft.png";

export default function Home() {
    return (
        <section id="home">
            <img src={topRight} alt="top right circles" id="topRight" />
            <img src={bottomLeft} alt="bottom left circles" id="bottomLeft" />
            <img src={logoDark} alt="dark logo" id="logoDark" />
            <div id="home__text">
                <h1>
                    Hi! <span></span> I'm Charles,
                </h1>
                <h2>A Full-Stack Web Developer & UX/UI Designer</h2>
                <h3>
                    Using my passion for developing modern <br />
                    and unique websites to deliver your online image to the
                    world.
                </h3>
            </div>

            <div id="home__text--link">
                <div id="home__text--link-top">
                    <img src={rightArrow} alt="right arrow" id="rightArrow" />
                    <a href="#projects">See my work</a>
                </div>

                <img src={underline} alt="underline" id="underline" />
            </div>
        </section>
    );
}
