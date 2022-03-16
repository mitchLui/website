import React from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import "./projects.css";
import "../Container/container.css";
import "../Button/button.css";

const projects = [
    {
        class: "mitchlui-dev",
        title: "mitchlui.dev", 
        thumbnail: "./project_images/mitchlui_dev.svg", 
        alt: "mitchlui.dev screenshot", 
        content: `Personal website built on ReactJS 
        for showcasing frontend skills and projects 
        I've worked on to serve as a digital portfolio.`,
        buttons: <><Button url={"https://mitchlui.dev"} target={"_blank"} text={"Visit website"} alt={"Visit mitchlui.dev"} /><Button url={"https://github.com/mitchLui/website"} target={"_blank"} text={"GitHub"} alt={"Visit github for mitchlui.dev"} /></>
    },
    {
        class: "greenmap",
        title: "GreenMap", 
        thumbnail: "./project_images/greenmap.svg", 
        alt: "greenmap screenshot", 
        content: `A navigation platform that aggregates data from 3rd party APIs and 
        provides real-time information about nearby shared vehicles. 
        University of Bristol CSS x Boeing Hackathon 2022 Submission.`,
        buttons: <><Button url={"https://github.com/mitchLui/greenmap"} target={"_blank"} text={"GitHub"} alt={"Visit github for GreenMap"}/></>
    },
    {
        class: "ai-workflow",
        title: "AI Workflow", 
        thumbnail: "./project_images/ai_workflow.svg", 
        alt: "greenmap screenshot", 
        content: `An event-triggered automation tool with a web interface for workflow customisation.
        Coursework for Software Engineering Project at University of Bristol.`,
        buttons: <><Button url={"https://github.com/mitchLui/ai_workflow"} target={"_blank"} text={"GitHub"} alt={"Visit github for AI Workflow"}/></>
    },
    {
        class: "gol",
        title: "Golang Game of Life", 
        thumbnail: "./project_images/gol.svg", 
        alt: "game of life screenshot", 
        content: `Parallel and Distributed implementation of Conway's Game of Life using Golang. 
        Coursework for Computer Systems A at University of Bristol.`,
        buttons: <><Button url={"https://github.com/mitchLui/gol"} target={"_blank"} text={"GitHub"} alt={"Visit github for Game of Life"}/></>
    },
    {
        class: "gol",
        title: "Golang Game of Life", 
        thumbnail: "./project_images/gol.svg", 
        alt: "game of life screenshot", 
        content: `Parallel and Distributed implementation of Conway's Game of Life using Golang. 
        Coursework for Computer Systems A at University of Bristol.`,
        buttons: <><Button url={"https://github.com/mitchLui/gol"} target={"_blank"} text={"GitHub"} alt={"Visit github for Game of Life"}/></>
    },
    {
        class: "mask-detector",
        title: "Mask Detector", 
        thumbnail: "./project_images/mask_detector.svg", 
        alt: "mask detector screenshot", 
        content: `Real-time face covering detection application to encourage good mask-wearing practises. 
        University of Bristol BEEEES Make-a-thon 2021 Submission.`,
        buttons: <><Button url={"https://github.com/mitchLui/mask_detector"} target={"_blank"} text={"GitHub"} alt={"Visit github for Mask detector"}/></>
    },
    {
        class: "marine-vessel-tracker",
        title: "Marine Vessel Tracker",
        thumbnail: "./project_images/marine_vessel.svg", 
        alt: "marine vessel tracker screenshot", 
        content: `A real-time marine vessel tracker that shows the position, 
        type and cargo of every marine vessel and ports in the world. 
        University of Bristol CSS x Boeing Hackathon 2021 Submission.`,
        buttons: <><Button url={"https://github.com/mitchLui/marine_vessel_tracker"} target={"_blank"} text={"GitHub"} alt={"Visit github for Marine vessel tracker"}/></>
    },
    {
        class: "scotland-yard",
        title: "Java Scotland Yard",
        thumbnail: "./project_images/scotland_yard.svg", 
        alt: "scotland yard screenshot", 
        content: `Modelled game mechanics of Scotland Yard given a skeleton using Java and wrote an AI 
        that uses a backtracking algorithm and scoring method to find the best path for
        Mr X to escape from the detectives.
        Coursework for OOP at University of Bristol.`,
        buttons: <><Button url={"https://github.com/mitchLui/scotland_yard"} target={"_blank"} text={"GitHub"} alt={"Visit github for Scotland Yard"}/></>
    },
]

export const Projects = () =>
    <Container>
        <div className="projects-container">
            <h1><code>projects</code></h1>
            <h2>an archive of what I'm working on and what I've done in the past.</h2>
            <div className={"projects-grid"}>
                {projects.map(project => (
                    <article className={"project " + project.class}>
                    <h2>{project.title}</h2>
                    <picture className={"thumbnail"}>
                        <img src={project.thumbnail} alt={project.alt} />
                    </picture>
                    <div className={"project-content"}>{project.content}</div>
                    <footer>
                        {project.buttons}
                    </footer>
                </article>
                ))}
            </div>
        </div>
    </Container>