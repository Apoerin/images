import React from "react";

const Image = props => {
    return (
        <li className="image-wrap">
            <img src={props.url} alt="Something went wrong"/>
        </li>
    )
}


export default Image;