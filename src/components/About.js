import React from "react";

function About({ image, about }) {

    return (
        <aside>
            <img src={image ? image : "https://via.placeholder.com/215"} alt="blog logo" />
            <p>{About}</p>
        </aside>
    )
}

export default About