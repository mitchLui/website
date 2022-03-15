import React from "react";
import { Copyright } from "../Copyright/Copyright";
import "./container.css";

export const Container = ({ children }) => 
    <div><div className="container">{children} </div><Copyright/></div>
    