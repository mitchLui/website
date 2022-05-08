import React from "react";
import { Contact } from "../../components/Contact/Contact";
import { Container } from "../../components/Container/Container";
import { Intro } from "../../components/Intro/Intro";

export const HomePage = () => 
    <Container>
        <Intro/>
        <Contact/>
    </Container>