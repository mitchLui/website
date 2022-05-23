import React from "react";
import { Contact } from "../../components/Contact/Contact";
import { Container } from "../../components/Container/Container";
import { FadeInSection } from "../../components/FadeInSection/FadeInSection";
import { Intro } from "../../components/Intro/Intro";

export const HomePage = () => 
    <Container>
        <FadeInSection>
            <Intro/>
        </FadeInSection>
        <FadeInSection>
            <Contact/>
        </FadeInSection>
    </Container>