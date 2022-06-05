import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Container } from "../../components/Container/Container";
import { Projects } from "../../components/Projects/Projects";
import { projects } from "../../data/projects";

export function ProjectsPage(){

    return (
        <Container>
            <Projects projects={projects}/>
            <Outlet/>
        </Container>
    );
}