import React, { useState } from "react";
import { Button, LinkButton } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { FadeInSection } from "../FadeInSection/FadeInSection";
import "./projects.scss";

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
            <LinkButton to={"/projects/"+name} text={"Learn more"}/>
            {
                git_url &&
                <Button url={git_url} target={"_blank"} text={"GitHub"} alt={"Visit github for " + title} />
            }
        </footer>
    </article>

export function Projects({ projects }){
    const [filter, setFilter] = useState("none");

    function getFilteredProjects(){
        Object.filter = (obj, predicate) => 
            Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {});

        switch(filter){
            case "none":
                return projects;
            default:
                return Object.filter(projects, (project) => project.category === filter);
        }
    }
        
    return (
        <>
        <div className="projects-container">
            <div>
                <span className={"container-header"}><h1><code>Projects</code></h1></span>
                <h2>An archive of what I'm working on and what I've done in the past.</h2>
                <Dropdown 
                    className={"project-sort"} 
                    onChange={setFilter}
                    label={"Filter by:"} 
                    options={
                        {
                            "Categories": [
                                { value: "none", text: "None" },
                                { value: "Work experience", text: "Work experience" },
                                { value: "Personal project", text: "Personal projects" },
                                { value: "Hackathon project", text: "Hackathon projects" },
                                { value: "Coursework project", text: "Coursework" }
                            ]
                        }    
                    } />

            </div> 
            <div className={"projects-grid"}>
                {
                    Object.keys(getFilteredProjects()).map(function(key, index) {
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

