import React from "react";
import { Container } from "../../components/Container/Container";
import { Projects } from "../../components/Projects/Projects";
import { projects } from "../../data/projects";

export const ProjectsPage = () => 
    <Container>
        <div className={"fade-in"}>
            <span className={"container-header"}><h1><code>Projects</code></h1></span>
            <h2>An archive of what I'm working on and what I've done in the past.</h2>
        </div> 
        <Projects projects={projects}/>
    </Container>