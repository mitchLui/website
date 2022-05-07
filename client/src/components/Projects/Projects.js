import React from "react";

import { Outlet, useParams } from "react-router";
import { LinkButton, Button } from "../Button/Button";
import "./projects.css";

export const projects = {
    "mitchlui-dev": {
        title: "mitchlui.dev", 
        thumbnail: "mitchlui_dev.svg",
        category: "Personal project",
        current_status: "In development", 
        started: "1 March 2022",
        ended: "n/a",
        awards: "n/a",
        technologies: "React.js",
        alt: "mitchlui.dev screenshot", 
        headline: `Personal website built on ReactJS 
        for showcasing frontend skills and projects 
        I've worked on to serve as a digital portfolio.`,
        content_detailed: [],
        git_url: "https://github.com/mitchLui/website",
    },
    "greenmap": {
        title: "GreenMap", 
        thumbnail: "greenmap.svg", 
        category: "Hackthon project",
        current_status: "In development", 
        started: "26 Feb 2022",
        ended: "n/a",
        awards: "CSS x Boeing Hackathon 2022 - Honourable Mention",
        technologies: "React.js, FastAPI, Docker",
        alt: "greenmap screenshot", 
        headline: `A navigation platform that aggregates data from 3rd party APIs and 
        provides real-time information about nearby shared vehicles. 
        University of Bristol CSS x Boeing Hackathon 2022 Submission.`,
        content_detailed: [],
        git_url: "https://github.com/mitchLui/greenmap",
    },
    "ai-workflow": {
        title: "IBM AI Workflow", 
        thumbnail: "ai_workflow.svg", 
        category: "Coursework project",
        current_status: "In development", 
        started: "8 October 2021",
        ended: "n/a",
        awards: "n/a",
        technologies: "React.js, FastAPI, Kubernetes, IBM Carbon Design",
        alt: "greenmap screenshot", 
        headline: `An event-triggered automation tool with a web interface for workflow customisation.
        Coursework for Software Engineering Project at University of Bristol.`,
        content_detailed: [],
        git_url: "https://github.com/mitchLui/ai-workflow",
    },
    "gol": {
        title: "Game of Life", 
        thumbnail: "gol.svg", 
        category: "Coursework project",
        current_status: "Completed", 
        started: "1 November 2021",
        ended: "27 December 2021",
        awards: "74% (First class)",
        technologies: "Golang, AWS",
        alt: "game of life screenshot", 
        headline: `Parallel and Distributed implementation of Conway's Game of Life using Golang. 
        Coursework for Computer Systems A at University of Bristol.`,
        content_detailed: [],
        git_url: "https://github.com/mitchLui/game-of-life",
    },
    "mask-detector": {
        title: "Mask Detector", 
        thumbnail: "mask_detector.svg", 
        category: "Hackathon project",
        current_status: "Completed", 
        started: "24 April 2021",
        ended: "25 April 2021",
        awards: "BEEES Make-a-thon 2021 - Overall best prize / Most verified / Most gamified",
        technologies: "Python, TensorFlow, Arduino",
        alt: "mask detector screenshot", 
        headline: `Real-time face covering detection application to encourage good mask-wearing practises. 
        University of Bristol BEEEES Make-a-thon 2021 Submission.`,
        content_detailed: [],
        git_url: "https://github.com/mitchLui/mask-detector"
    },
    "marine-vessel-tracker": {
        title: "Marine Vessel Tracker",
        thumbnail: "marine_vessel.svg", 
        category: "Hackathon project",
        current_status: "Completed", 
        started: "20 March 2021",
        ended: "21 March 2021",
        awards: "CSS x Boeing Hackathon 2021 - 2nd place in category",
        technologies: "FastAPI, Google Maps API, Docker",
        alt: "marine vessel tracker screenshot", 
        headline: `A real-time marine vessel tracker that shows the position, 
        type and cargo of every marine vessel and ports in the world. 
        University of Bristol CSS x Boeing Hackathon 2021 Submission.`,
        content_detailed: [],
        git_url: "https://github.com/mitchLui/marine-vessel-tracker"
    },
    "scotland-yard": {
        title: "Scotland Yard",
        thumbnail: "scotland_yard.svg", 
        category: "Coursework project",
        current_status: "Completed", 
        started: "1 March 2021",
        ended: "12 May 2021",
        awards: "n/a",
        technologies: "Java, Guava",
        alt: "scotland yard screenshot", 
        headline: `Modelled game mechanics of Scotland Yard given a skeleton using Java and wrote an AI 
        that uses a backtracking algorithm and scoring method to find the best path for
        Mr X to escape from the detectives.
        Coursework for OOP at University of Bristol.`,
        content_detailed: [],
        git_url: "https://github.com/mitchLui/scotland-yard"
    },
}

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

export const Projects = () =>
    <div className="projects-container">
        <span className={"container-header"}><h1><code>Projects</code></h1></span>
        <h2>An archive of what I'm working on and what I've done in the past.</h2>
        <div className={"projects-grid"}>
            {
                Object.keys(projects).map(function(key, index) {
                    return (
                        <ProjectCard
                            key={index}
                            name={key}
                            title={projects[key].title}
                            thumbnail={projects[key].thumbnail}
                            alt={projects[key].alt}
                            headline={projects[key].headline}
                            git_url={projects[key].git_url}
                        />
                    )
                })
            }
        </div>
        <Outlet/>
    </div>


