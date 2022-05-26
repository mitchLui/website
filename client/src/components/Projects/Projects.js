import React from "react";
import { LinkFunctionButton, Button } from "../Button/Button";
import { FadeInSection } from "../FadeInSection/FadeInSection";
import "./projects.css";



export const ProjectCard = ({ index, name, title, thumbnail, alt, headline, git_url }) =>
    <article key={index} className={"project " + name}>
        <h2>{title}</h2>
        <picture className={"thumbnail"}>
            <img 
                src={"/project_images/"+thumbnail} 
                alt={alt} 
            />
        </picture>
        <div className={"project-content"}>{headline}</div>
        <footer>
            <LinkFunctionButton onClick={()=>{
                window.scrollTo(0, 0);
                document.getElementsByClassName("projects-container")[0].classList.add("not-visible");
                // scroll to top
                
            }} to={"/projects/"+name} text={"Learn more"}/>
            <Button url={git_url} target={"_blank"} text={"GitHub"} alt={"Visit github for " + title} />
        </footer>
    </article>

export function Projects({ projects }){

    return (
        <>
        <div className="projects-container">
            <div className={"fade-in"}>
                <span className={"container-header"}><h1><code>Projects</code></h1></span>
                <h2>An archive of what I'm working on and what I've done in the past.</h2>
            </div> 
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
        </div>
        </>
    )
}

