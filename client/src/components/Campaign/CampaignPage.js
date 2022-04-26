import React from "react";
import { Container } from "../Container/Container";
import "./campaign.css";

export const CampaignPage = () => 
    <Container>
        <div className={"lol"}>
            <div className={"headline"}>
                Vote Mitch for <br/> 
                President of <img className={"css-logo"} src="./css-agm/css-logo.png" alt={"css"}/>
            </div>
            <img className={"headshot"} src="./css-agm/headshot.png" alt={"headshot"}/>
            <span className={"tagline"}>
                What You've Seen <br/>
                is What You'll Get <br/>
                (and more)
            </span>
            <div className={"why-me"}>
                <span>Why you should vote for me: </span>
                <ul className={"vp-list"}>
                    <li>Yes</li>
                </ul>
            </div>
            <div className={"what-i-want"}>
                <span>What I want to do as vice-president: </span>
                <ul className={"vp-list"}>
                    <li>Yes</li>
                </ul>
            </div>
            <div className={"poster-footer"}>
                <span className={"link"}>https://mitchlui.dev/for-css-vp</span>
                <img className={"poster-logo"} src={"./logo.svg"} alt={"logo"}/>
            </div>
        </div>   
    </Container>
