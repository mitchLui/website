import React from "react";
import { Link } from "react-router-dom";
import "./copyright.css";

function getCurrentYear() {
    return new Date().getFullYear();
}

export const Copyright = () =>
    <section className={"copyright"}>
        Copyright © {getCurrentYear()} Mitch Lui. All rights reserved.
        <p><Link to={"/sitemap"}>Sitemap</Link></p>
    </section>

