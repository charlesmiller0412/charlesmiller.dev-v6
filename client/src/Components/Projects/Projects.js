import React from "react";
import ProjectSwiper from "./ProjectSwiper";

export default function Projects() {
    return (
        <section id="projects" className="section">
            <h1>.projects</h1>
            <ProjectSwiper />
            <h3>
                You can also see all of my projects in my new project database
                GUI.{" "}
                <a
                    href="https://www.charlesmiller.dev/projectDatabase/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check it out!
                </a>
            </h3>
        </section>
    );
}
