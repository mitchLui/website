import React from "react";
import { Outlet } from "react-router";
import { LinkButton, Button } from "../Button/Button";
import { FadeInSection } from "../FadeInSection/FadeInSection";
import "./projects.css";



export const ProjectCard = ({ index, name, title, thumbnail, alt, headline, git_url }) =>
    <article key={index} className={"project " + name}>
        <h2>{title}</h2>
        <picture className={"thumbnail"}>
            <img 
                src={"./project_images/"+thumbnail} 
                alt={alt} 
            />
        </picture>
        <div className={"project-content"}>{headline}</div>
        <footer>
            <LinkButton to={"/"+name} text={"Learn more"}/>
            <Button url={git_url} target={"_blank"} text={"GitHub"} alt={"Visit github for " + title} />
        </footer>
    </article>

export const Projects = ({ projects }) =>
    <div className="projects-container">
        <span className={"container-header"}><h1><code>Projects</code></h1></span>
        <h2>An archive of what I'm working on and what I've done in the past.</h2>
        <div className={"projects-grid"}>
            {
                Object.keys(projects).map(function(key, index) {
                    return (
                        <FadeInSection key={index}>
                            <ProjectCard
                                key={index}
                                name={key}
                                title={projects[key].title}
                                thumbnail={projects[key].thumbnail}
                                alt={projects[key].alt}
                                headline={projects[key].headline}
                                git_url={projects[key].git_url}
                            />
                        </FadeInSection>
                    )
                })
            }
        </div>
        <Outlet/>
    </div>


