import React, { useEffect } from "react";
import { LinkButton } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Map } from "../../components/Map/Map";
import { AboutCard } from "../../components/Cards/Cards";
import { timeline } from "../../data/timeline";
import { setTitle, setDescription, setOgProperties } from "../../meta/meta";
import "./aboutpage.scss"
import { Grid } from "../../components/Grid/Grid";

export function AboutPage() {

    useEffect(() => {
        setTitle("About me | Mitch Lui");
        setDescription("About me");
        setOgProperties({
            title: "About me | Mitch Lui",
            description: "About me",
        })
    }, []);

    return (
        <Container>
            <span className={"container-header"}><h1><code>About</code></h1></span>
            <h2>placeholder text (something about choosing a year to learn more)</h2>
            <div className={"timeline-grid"}>
                <Map className={"map"} userLng={114.20902924258836} userLat={22.428316182904794} />
            </div>
            <Grid>
                <AboutCard index={1} name={"about-me"} title={"About me"} thumbnail={"about_me.jpg"} alt={"About me"} content={timeline.aboutMe} />
            </Grid>
            <div style={{textAlign: "center"}}>
              <LinkButton to={"/projects"} text={"Check out my work"}/>
            </div>
        </Container>
    );
}