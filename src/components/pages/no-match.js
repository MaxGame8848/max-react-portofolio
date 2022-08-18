import React from "react";
import { Link } from "react-router-dom";

export default function () {
    return (
        <div>
            <h2>This page wasn't found</h2>
            <Link to="/"> Return back to HomePage</Link>
        </div>
    );
}