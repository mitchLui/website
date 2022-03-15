import React from "react";
import "./copyright.css";

function getCurrentYear() {
    return new Date().getFullYear();
}

export const Copyright = () =>
    <section className={"copyright"}>
        Copyright © {getCurrentYear()} Mitch Lui. All rights reserved.
    </section>

