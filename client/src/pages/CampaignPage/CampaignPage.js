import React from "react";
import { Container } from "../../components/Container/Container";
import "./campaignpage.css";

export const CampaignPage = () => 
    <Container>
        <div className={"lol"}>
            <div className={"headline"}>
                Vote Mitch for <br/> 
                Vice-President of <img className={"css-logo"} src="./css-agm/css-logo.png" alt={"css"}/>
            </div>
            <div className={"agm-deets"}>
                9 May 2022, 6pm - Queen's Building 1.6
            </div>
            <div className={"what-i-want"}>
                <span>What I want to do as vice-president: </span>
                <ul className={"vp-list"}>
                    <li>Introduce a Python "Zero to Hero" workshop in early TB1 to encourage more cross-disciplinary projects in events and talks</li>
                    <li>Work with the Technical Events Officer to revamp BrisHack and organise more collab events with other societies</li>                    
                    <li>Organise a wider variety of socials (bowling, cook-off etc)</li>
                </ul>
            </div>
            <div className={"why-me"}>
                <span>Why you should vote for me: </span>
                <ul className={"vp-list"}>
                    <li>Current committee member with experience in organising events</li>
                    <li>Wide network of industry contacts e.g. Amazon, Meta, TransferWise</li>
                    <li>Committed to delivering great quality events for everyone</li>
                </ul>
            </div>
            <img className={"headshot"} src="./css-agm/headshot.png" alt={"headshot"}/>
            <span className={"tagline"}>
                What You've Seen <br/>
                is What You'll Get, <br/>
                even Better.
            </span>
            <div className={"poster-footer"}>
                <span className={"link"}>https://mitchlui.dev/for-css-vp</span>
                <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}><img className={"poster-logo"} src={"./logo.svg"} alt={"logo"}/></a>
            </div>
        </div>   
    </Container>
