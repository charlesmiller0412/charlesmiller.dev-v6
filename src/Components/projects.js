import React from "react";
import ProjectCard from "./projectCard";

export default function Projects() {
    return (
        <div id="projects" className="section">
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
        </div>
    );
}
