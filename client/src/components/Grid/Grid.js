import React from "react";
import "./grid.scss";

export const Grid = ({ children }) => {
    return (
        <div className={"grid"}>
            {children}
        </div>
    )
}