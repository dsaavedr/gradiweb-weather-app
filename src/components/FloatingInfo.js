import React from "react";

export default function FloatingInfo(props) {
    return (
        <div className='floatingInfo'>
            <div className='top'>
                <img src={props.imgURL} alt='Weather icon' />
            </div>
        </div>
    );
}
