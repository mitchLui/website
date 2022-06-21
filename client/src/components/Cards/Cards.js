import React from "react";
import { Button, LinkButton } from "../Button/Button";
import "./cards.scss";

export const ProjectCard = ({ index, name, title, thumbnail, alt, headline, git_url }) =>
    <article key={index} className={"card project " + name}>
        <h2>{title}</h2>
        <picture className={"thumbnail"}>
            <img 
                src={"/project_images/"+thumbnail} 
                alt={alt} 
            />
        </picture>
        <div className={"card-content"}>{headline}</div>
        <footer>
            <LinkButton to={"/projects/"+name} text={"Learn more"}/>
            {
                git_url &&
                <Button url={git_url} target={"_blank"} text={"GitHub"} alt={"Visit github for " + title} />
            }
        </footer>
    </article>