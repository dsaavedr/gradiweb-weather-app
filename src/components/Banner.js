import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

import Loading from "./Loading";
import FloatingInfo from "./FloatingInfo";

export default function Banner(props) {
    const data = props.current;

    if (!data) {
        return <Loading />;
    }

    let info = {
        weather: data.weather,
        main: {
            temp: data.temp
        }
    };

    return (
        <div>
            <div className='banner'>
                <div className='name text-primary'>
                    <IoLocationSharp className='icon' />
                    <div>Bogotá</div>
                </div>
            </div>
            <FloatingInfo info={info} />
        </div>
    );
}
