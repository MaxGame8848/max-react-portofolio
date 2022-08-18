import React from "react";

export default function (props) {
    return (
        <div>
            <h2>Portfolio Details {props.match.params.slug}</h2>
        </div>
    );
}