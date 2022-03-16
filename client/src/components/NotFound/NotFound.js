import React from "react";
import { Container } from "../Container/Container";
import { LinkButton} from "../Button/Button";

export const NotFound = () =>
    <Container>
        <div className={"header-text"}>
            <h1>404 Not Found!</h1>
            <h2>You might wanna go home...</h2>
            <LinkButton to={"/"} text={"Go Home"}/>
        </div>
    </Container>