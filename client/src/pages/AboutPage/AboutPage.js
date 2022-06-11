import React, { useEffect, useState } from "react";
import { FunctionButton, LinkButton } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Map } from "../../components/Map/Map";
import { timeline } from "../../data/timeline";
import { setTitle, setDescription, setOgProperties } from "../../meta/meta";
import "./aboutpage.scss"

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
            {
                Object.keys(timeline).map((year) => {
                    return (
                        <FunctionButton key={year} onClick={() => {
                            console.log(year)
                        }}
                        text={year} />
                    );
                }) 
            }
            <div className={"timeline-grid"}>
                <Map className={"map"} userLng={114.20902924258836} userLat={22.428316182904794} />
                <section className={"event"}>
                    {
                        Object.keys(timeline).map((year) => {
                            return (
                                <div key={year} className={"event-container"}>
                                    <h3>{year}</h3>
                                    {
                                        timeline[year].map((event) => {
                                            return (
                                                <div>
                                                {
                                                    event.content.map((content) => {
                                                        return (
                                                            <div>
                                                                <h4>{content.header}</h4>
                                                                <p>{content.desc}</p>
                                                            </div>
                                                        );
                                                    })
                                                }
                                                </div>
                                            )
                                            }
                                        )
                                    }
                                </div>)
                            }
                        )
                    }
                </section>
            </div>
            <div style={{textAlign: "center"}}>
              <LinkButton to={"/projects"} text={"Check out my work"}/>
            </div>
        </Container>
    );
}