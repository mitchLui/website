import { React } from "react";
import { useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { projects } from "../../components/Projects/Projects";
import { ModalCloseButton } from "../../components/Button/Button";
import "./projectmodalpage.css";

export const ProjectModalPage = () => {
    const { projectClass } = useParams();
    return (
        <div className={"modal-container"}>
            <ModalCloseButton to={"/projects"}/>
            <div className={"modal-content"}>
                <h1 className={"text"}>{projects[projectClass].title}</h1>
                <picture className={"modal-thumbnail"}>
                <img 
                    src={"./project_images/"+projects[projectClass].thumbnail} 
                    alt={projects[projectClass].alt} 
                />
                </picture>
                <div className={"modal-headline"}>
                    <h2>{projects[projectClass].headline}</h2>
                </div>
                <div className={"modal-status"}>
                    <b>Category: </b>{projects[projectClass].category}<br/>
                    <b>Current Status: </b>{projects[projectClass].current_status}<br/>
                    <b>Started: </b>{projects[projectClass].started}<br/>
                    <b>Ended: </b>{projects[projectClass].ended}<br/>
                    <b>Awards: </b>{projects[projectClass].awards}<br/>
                    <b>Technologies used: </b>{projects[projectClass].technologies}<br/>
                </div>
                <div className={"modal-text"}>
                    {projects[projectClass].content_detailed.map((paragraph, index) =>
                        <p key={index}>{paragraph}</p>
                    )}
                </div>
                <footer className={"modal-footer"}>
                    <Button url={projects[projectClass].git_url} target={"_blank"} text={"GitHub"} alt={"Visit github for " + projects[projectClass].title} />
                </footer>
            </div>
        </div>
    )
}