import React from "react";
import { Outlet, useParams } from "react-router";
import { LinkButton, Button, ModalCloseButton } from "../Button/Button";
import { Container } from "../Container/Container";
import "./projects.css";
import "./projectpage.css";
import "../Container/container.css";
import "../Button/button.css";

export const projects = {
    "mitchlui-dev": {
        title: "mitchlui.dev", 
        thumbnail: "./project_images/mitchlui_dev.svg",
        current_status: "In Development", 
        started: "2019-01-01",
        ended: "n/a",
        awards: "n/a",
        alt: "mitchlui.dev screenshot", 
        content: `Personal website built on ReactJS 
        for showcasing frontend skills and projects 
        I've worked on to serve as a digital portfolio.`,
        git_url: "https://github.com/mitchLui/website",
    },
    "greenmap": {
        title: "GreenMap", 
        thumbnail: "./project_images/greenmap.svg", 
        alt: "greenmap screenshot", 
        content: `A navigation platform that aggregates data from 3rd party APIs and 
        provides real-time information about nearby shared vehicles. 
        University of Bristol CSS x Boeing Hackathon 2022 Submission.`,
        git_url: "https://github.com/mitchLui/greenmap",
    },
    "ai-workflow": {
        title: "AI Workflow", 
        thumbnail: "./project_images/ai_workflow.svg", 
        alt: "greenmap screenshot", 
        content: `An event-triggered automation tool with a web interface for workflow customisation.
        Coursework for Software Engineering Project at University of Bristol.`,
        git_url: "https://github.com/mitchLui/ai-workflow",
    },
    "gol": {
        title: "Golang Game of Life", 
        thumbnail: "./project_images/gol.svg", 
        alt: "game of life screenshot", 
        content: `Parallel and Distributed implementation of Conway's Game of Life using Golang. 
        Coursework for Computer Systems A at University of Bristol.`,
        git_url: "https://github.com/mitchLui/gol",
    },
    "mask-detector": {
        title: "Mask Detector", 
        thumbnail: "./project_images/mask_detector.svg", 
        alt: "mask detector screenshot", 
        content: `Real-time face covering detection application to encourage good mask-wearing practises. 
        University of Bristol BEEEES Make-a-thon 2021 Submission.`,
        git_url: "https://github.com/mitchLui/mask_detector"
    },
    "marine-vessel-tracker": {
        title: "Marine Vessel Tracker",
        thumbnail: "./project_images/marine_vessel.svg", 
        alt: "marine vessel tracker screenshot", 
        content: `A real-time marine vessel tracker that shows the position, 
        type and cargo of every marine vessel and ports in the world. 
        University of Bristol CSS x Boeing Hackathon 2021 Submission.`,
        git_url: "https://github.com/mitchLui/marine_vessel_tracker"
    },
    "scotland-yard": {
        title: "Java Scotland Yard",
        thumbnail: "./project_images/scotland_yard.svg", 
        alt: "scotland yard screenshot", 
        content: `Modelled game mechanics of Scotland Yard given a skeleton using Java and wrote an AI 
        that uses a backtracking algorithm and scoring method to find the best path for
        Mr X to escape from the detectives.
        Coursework for OOP at University of Bristol.`,
        git_url: "https://github.com/mitchLui/scotland_yard"
    },
}

export const Projects = () =>
    <Container>
        <div className="projects-container">
            <h1><code>projects</code></h1>
            <h2>an archive of what I'm working on and what I've done in the past.</h2>
            <div className={"projects-grid"}>
                {
                    Object.keys(projects).map(function(key, index) {
                        return (
                            <article className={"project " + key}>
                                <h2>{projects[key].title}</h2>
                                <picture className={"thumbnail"}>
                                    <img src={projects[key].thumbnail} alt={projects[key].alt} />
                                </picture>
                                <div className={"project-content"}>{projects[key].content}</div>
                                <footer>
                                    {projects[key].buttons}
                                    <LinkButton to={"/"+key} text={"Learn more"}/>
                                    <Button url={projects[key].git_url} target={"_blank"} text={"GitHub"} alt={"Visit github for " + projects[key].title} />
                                </footer>
                            </article>
                        )
                    })
                }
            </div>
            <Outlet/>
        </div>
    </Container>


export const ProjectModalPage = () => {
    const { projectClass } = useParams();
    return (
        <div className={"modal-container"}>
            <ModalCloseButton to={"/projects"}/>
            <div className={"modal-content"}>
                <h1><code>{projects[projectClass].title}</code></h1>
                <picture className={"modal-thumbnail"}>
                    <img src={projects[projectClass].thumbnail} alt={projects[projectClass].alt} />
                </picture>
                <div className={"modal-status"}>
                    <b>Current Status: </b>{projects[projectClass].current_status}<br/>
                    <b>Started: </b>{projects[projectClass].started}<br/>
                    <b>Ended: </b>{projects[projectClass].ended}<br/>
                    <b>Awards: </b>{projects[projectClass].awards}<br/>
                </div>
            </div>
        </div>
    );
};