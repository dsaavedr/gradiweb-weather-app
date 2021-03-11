import React from "react";

import loadingGif from "../images/loader.gif";

export default function Loading(props) {
    return (
        <div className='loading'>
            <h4>{props.msg || "Loading"}...</h4>
            <img src={loadingGif} alt='Loading...' />
        </div>
    );
}
