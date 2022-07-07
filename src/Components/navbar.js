import React from "react";
import Logo from "../assets/logo.png";
import $ from "jquery";

export default class Navbar extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if ((window.scrollY > 728) & (window.scrollY < 2183)) {
            document.getElementById("navbar").className = "navbar__scroll";
        } else {
            document.getElementById("navbar").className = null;
        }

        var scroll = $(window).scrollTop();
        var projectsOffset = $("#projects").offset().top - 50;
        var aboutOffset = $("#about").offset().top - 50;
        var contactOffset = $("#contact").offset().top - 50;

        //home
        if (scroll >= 0 && scroll < projectsOffset) {
            $("#homeLink").addClass("active");
            $("#projectsLink").removeClass("active");
            $("#aboutLink").removeClass("active");
            $("#contactLink").removeClass("active");
        }
        //projects
        if (scroll >= projectsOffset && scroll < aboutOffset) {
            $("#projectsLink").addClass("active");
            $("#aboutLink").removeClass("active");
            $("#homeLink").removeClass("active");
        }
        //about
        if (scroll >= aboutOffset && scroll < contactOffset) {
            $("#aboutLink").addClass("active");
            $("#homeLink").removeClass("active");
            $("#projectsLink").removeClass("active");
            $("#contactLink").removeClass("active");
        }
        //contact
        if (scroll >= contactOffset) {
            $("#contactLink").addClass("active");
            $("#aboutLink").removeClass("active");
        }
    };

    handleSidebar = () => {
        if (window.innerWidth <= "919px") {
            $("#sidebar").css("display", "none");
        }
    };

    render() {
        return (
            <div id="navbar">
                <div id="navbar__img">
                    <a href="#home">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
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
