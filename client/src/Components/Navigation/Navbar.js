import React from "react";
import Images from "../../assets/Images";
import $ from "jquery";

export default class Navbar extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        var scroll = $(window).scrollTop();
        var projectsOffset = $("#projects").offset().top - 50;
        var aboutOffset = $("#about").offset().top - 50;
        var contactOffset = $("#contact").offset().top - 50;

        //home
        if (scroll >= 0 && scroll < projectsOffset) {
            $("#homeLink").addClass("active");
            $("#mobileHomeLink").addClass("activeMobile");
            $("#mobileAboutLink").removeClass("activeMobile");
            $("#mobileProjectsLink").removeClass("activeMobile");
            $("#mobileContactLink").removeClass("activeMobile");
            $("#projectsLink").removeClass("active");
            $("#aboutLink").removeClass("active");
            $("#contactLink").removeClass("active");
        }
        //projects
        if (scroll >= projectsOffset && scroll < aboutOffset) {
            $("#mobileProjectsLink").addClass("activeMobile");
            $("#projectsLink").addClass("active");
            $("#aboutLink").removeClass("active");
            $("#homeLink").removeClass("active");
            $("#mobileHomeLink").removeClass("activeMobile");
            $("#mobileContactLink").removeClass("activeMobile");
            $("#mobileAboutLink").removeClass("activeMobile");
        }
        //about
        if (scroll >= aboutOffset && scroll < contactOffset) {
            $("#mobileAboutLink").addClass("activeMobile");
            $("#aboutLink").addClass("active");
            $("#homeLink").removeClass("active");
            $("#mobileHomeLink").removeClass("activeMobile");
            $("#projectsLink").removeClass("active");
            $("#contactLink").removeClass("active");
            $("#mobileProjectsLink").removeClass("activeMobile");
            $("#mobileContactLink").removeClass("activeMobile");
        }
        //contact
        if (scroll >= contactOffset) {
            $("#mobileContactLink").addClass("activeMobile");
            $("#mobileAboutLink").removeClass("activeMobile");
            $("#contactLink").addClass("active");
            $("#aboutLink").removeClass("active");
        }
        // show mobileNav after scroll
        if (scroll >= 50) {
            $("#mobileNav").css({ opacity: "1", transition: "all .3s" });
        } else {
            $("#mobileNav").css({ opacity: "0", transition: "all .3s" });
        }
    };

    render() {
        return (
            <div id="navbar">
                {/* logo */}
                <div id="navbar__img">
                    <a href="#home">
                        <img src={Images.logos.logo} alt="logo" />
                    </a>
                </div>
                {/* links */}
                <div id="navbar__links">
                    <ul>
                        <a href="#home">
                            <li id="homeLink" className="active">
                                Home
                            </li>
                        </a>
                        <a href="#projects">
                            <li id="projectsLink">Projects</li>
                        </a>
                        <a href="#about">
                            <li id="aboutLink">About</li>
                        </a>
                        <a href="#contact">
                            <li id="contactLink">Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
        );
    }
}
