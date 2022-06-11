import React from "react";
import "./dropdown.scss";

export const Dropdown = ({ className, onChange, label, options }) => 
    <>
        <label className={"dropdown-label"} htmlFor={className}>{label}</label>
        <select className={"dropdown-menu"} onChange={(e) => onChange(e.target.value)} name={"Sort by:"} id={className} defaultValue={"none"}>
            {Object.keys(options).map((key) =>
                <optgroup key={key} label={key}>
                    {options[key].map((option) =>
                        <option key={option.value} value={option.value}>{option.text}</option>
                    )} 
                </optgroup>
            )}
        </select>
    </>