import React from "react";
import Image from "./Image";

const ImageList = props => {
    const results = props.data;
    let size = 3;
    let images = results.slice(0, size).map(image => <Image url={image.download_url} key={image.id}/>);

    return (
        <ul className="img-list">{images}</ul>
    );
};

export default ImageList;