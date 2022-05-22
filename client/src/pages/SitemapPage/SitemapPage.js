import React from "react";
import { Container } from "../../components/Container/Container";
import { Sitemap } from "../../components/Sitemap/Sitemap";
import { projects } from "../../data/projects";

export const SitemapPage = () =>
    <Container>
        <Sitemap projects={projects}/>
    </Container>