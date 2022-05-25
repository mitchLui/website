import React from "react";
import { Outlet } from "react-router";
import { Container } from "../../components/Container/Container";
import { Projects } from "../../components/Projects/Projects";
import { projects } from "../../data/projects";

export const ProjectsPage = () => 
    <Container>
        <Projects projects={projects}/>
        <Outlet/>
    </Container>