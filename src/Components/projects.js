import React from "react";
import ProjectCard from "./projectCard";

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div id="projects__content">
                <div className="container">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="container">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    );
}
