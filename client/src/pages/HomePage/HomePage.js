import React from "react";
import { Contact } from "../../components/Contact/Contact";
import { Container } from "../../components/Container/Container";
import { Intro } from "../../components/Intro/Intro";
import "./homepage.css";

export const HomePage = () => 
    <Container>
        <div className={"fade-in"}>
            <Intro/>
            <Contact/>
        </div>
    </Container>