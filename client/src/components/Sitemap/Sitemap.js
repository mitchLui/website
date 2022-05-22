import { React } from 'react';
import { Link } from 'react-router-dom';
import "./sitemap.css";

export const Sitemap = ({ projects }) =>
    <>
    <span className={"container-header"}><h1><code>Sitemap</code></h1></span>
        <ul className={"sitemap"}>
            <li><Link to={"/"}>index</Link></li>
            <ul className={"list"}>
                <li><Link to={"/projects"}>projects</Link></li>
                <ul className={"projects"}>
                    {
                        Object.keys(projects).map(function(key, index) {
                            return (
                                <li key={index}><Link to={"/"+key}>{key}</Link></li>
                            )
                        })
                    }
                </ul>
                <li><Link to={"/cv.pdf"}>cv.pdf</Link></li>
                <li><Link to={"/sitemap"}>sitemap</Link></li>
                <li><Link to={"/for-css-vp"}>for-css-vp</Link></li>
            </ul>
        </ul>

    </>
