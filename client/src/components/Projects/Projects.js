import React from "react";
import {Button} from "../Button/Button";
import "./projects.css";
import "../Container/container.css";
import "../Button/button.css";

export const Projects = () => 
    <section className={"container"}>
        <div className={"container-header"}>
            <h1><code>projects</code></h1>
            <h2>an archive of what I'm working on and what I've done in the past.</h2>
        </div>
        <div className={"projects-grid"}>
            <article className={"project mitchlui-dev"}>
                <h2>mitchlui.dev</h2>
                <picture className={"thumbnail"}>
                    <img src={"./project_images/mitchlui_dev.svg"} alt={"mitchlui.dev screenshot"} />
                </picture>
                <div className={"project-content"}>                    
                    Personal website built on ReactJS for showcasing frontend skills and
                    projects I've worked on to serve as a digital portfolio.
                </div>
                <footer>
                    <Button url={"https://mitchlui.dev"} target={"_blank"} text={"Visit website"} alt={"Visit mitchlui.dev"}/>
                    <Button url={"https://github.com/mitchLui/website"} target={"_blank"} text={"GitHub"} alt={"Visit github for mitchlui.dev"}/>
                </footer>
            </article>
            <article className={"project greenmap"}>
                <h2>GreenMap</h2>
                <picture className={"thumbnail"}>
                    <img src={"./project_images/greenmap.svg"} alt={"greenmap screenshot"} />
                </picture>
                <div className={"project-content"}>
                    A navigation platform that aggregates data from 3rd party APIs and 
                    provides real-time information about nearby shared vehicles. 
                    University of Bristol CSS x Boeing Hackathon 2022 Submission.
                </div>
                <footer>
                    <Button url={"https://github.com/mitchLui/greenmap"} target={"_blank"} text={"GitHub"} alt={"Visit github for GreenMap"}/>
                </footer> 
            </article>
            <article className={"project ai-workflow"}>
                <h2>AI Workflow</h2>
                <picture className={"thumbnail"}>
                    <img src={"./project_images/ai_workflow.svg"} alt={"ai workflow screenshot"} />
                </picture>
                <div className={"project-content"}>
                    An event-triggered automation tool with a web interface for workflow customisation.
                    Coursework for Software Engineering Project at University of Bristol.
                </div>
                <footer>
                    <Button url={"https://github.com/mitchLui/ai_workflow"} target={"_blank"} text={"GitHub"} alt={"Visit github for AI Workflow"}/>
                </footer>
            </article>
            <article className={"project gol"}>
                <h2>Game of Life</h2>
                <picture className={"thumbnail"}>
                    <img src={"./project_images/gol.svg"} alt={"game of life screenshot"} />
                </picture>
                <div className={"project-content"}>
                    Parallel and Distributed implementation of Conway's Game of Life using Golang. 
                    Coursework for Computer Systems A at University of Bristol.
                </div>
                <footer>
                    <Button url={"https://github.com/mitchLui/gol"} target={"_blank"} text={"GitHub"} alt={"Visit github for Game of Life"}/>
                </footer>
            </article>
            <article className={"project mask-detector"}>
                <h2>Mask Detector</h2>
                <picture className={"thumbnail"}>
                    <img src={"./project_images/mask_detector.svg"} alt={"mask detector screenshot"} />
                </picture>
                <div className={"project-content"}>
                    Real-time face covering detection application to encourage good mask-wearing practises. 
                    University of Bristol BEEEES Make-a-thon 2021 Submission.
                </div>
                <footer>
                    <Button url={"https://github.com/mitchLui/mask_detector"} target={"_blank"} text={"GitHub"} alt={"Visit github for Mask detector"}/>
                </footer>
            </article>
            <article className={"project marine-vessel-tracker"}>
                <h2>Marine Vessel Tracker</h2>
                <picture className={"thumbnail"}>
                    <img src={"./project_images/marine_vessel.svg"} alt={"marine vessel screenshot"} />
                </picture>
                <div className={"project-content"}>
                    A real-time marine vessel tracker that shows the position, 
                    type and cargo of every marine vessel and ports in the world. 
                    University of Bristol CSS x Boeing Hackathon 2021 Submission.
                </div>
                <footer>
                    <Button url={"https://github.com/mitchLui/marine_vessel_tracker"} target={"_blank"} text={"GitHub"} alt={"Visit github for Marine vessel tracker"}/>
                </footer>
            </article>
            <article className={"project scotland-yard"}>
                <h2>Scotland Yard</h2>
                <picture className={"thumbnail"}>
                    <img src={"./project_images/scotland_yard.svg"} alt={"scotland yard screenshot"} />
                </picture>
                <div className={"project-content"}>
                    Modelled game mechanics of Scotland Yard given a skeleton using Java and wrote an AI 
                    that uses a backtracking algorithm and scoring method to find the best path for
                    Mr X to escape from the detectives.
                    Coursework for OOP at University of Bristol.
                </div>
                <footer>
                    <Button url={"https://github.com/mitchLui/scotland_yard"} target={"_blank"} text={"GitHub"} alt={"Visit github for Scotland Yard"}/>
                </footer>
            </article>
        </div>
    </section>