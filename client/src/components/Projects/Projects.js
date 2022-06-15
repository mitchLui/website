import React, { useState } from "react";
import { Grid } from "../Grid/Grid";
import { ProjectCard } from "../Cards/Cards";
import { Dropdown } from "../Dropdown/Dropdown";
import { FadeInSection } from "../FadeInSection/FadeInSection";
import "./projects.scss";

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
            <Grid>
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
            </Grid>
        </>
    )
}

