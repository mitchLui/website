import React, { useState } from "react";
import { Container } from "../../../components/Container/Container";
import { projects } from "../../../data/projects";



export function MitchLuiDevPage(){
    const [project] = useState(projects["mitchlui-dev"]);

    return (
        <Container>
            <h1>{project.title}</h1>
        </Container>
    );
}
