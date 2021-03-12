import React from "react";
import { IoLocationSharp } from "react-icons/io5";

export default function PlaceCard(props) {
    return (
        <div
            className={"placeCard " + props.type}
            style={{
                background: `url(${props.img})`
            }}
        >
            <div className='header'>
                <div className='info'>
                    <IoLocationSharp /> {props.name}
                </div>
            </div>
        </div>
    );
}
