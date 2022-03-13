import React from "react";
import {Button} from "../Button/Button";

export const NotFound = () =>
    <section className={"not-found-container"}>
        <div className={"header-text"}>
            <h1>404 Not Found!</h1>
            <h2>You might wanna go home...</h2>
            <Button url={"./"} text={"Go home"} target={"_self"} alt={"go home"}/>
        </div>
    </section>