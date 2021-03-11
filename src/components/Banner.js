import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

import Loading from "./Loading";
import FloatingInfo from "./FloatingInfo";

export default function Banner() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Get JSON data using Ajax
        const Http = new XMLHttpRequest();
        // Bogotá's id
        const city = "3688689";
        const key = "47f3d15d03f33af83023cb5f186ff4f0";
        const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${key}&units=metric`;

        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = e => {
            if (Http.readyState === 4 && Http.status === 200) {
                // Simulate server wait time to show loader
                setTimeout(() => {
                    setData(JSON.parse(Http.responseText));
                }, 1500);
            }
        };
    }, []);

    if (data) {
        const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        return (
            <div className='banner'>
                <FloatingInfo imgURL={iconURL} />
                <div className='info'>
                    <div className='name'>
                        <IoLocationSharp />
                        <p>{data.name}</p>
                    </div>
                    <p>Temperature: {data.main.temp} &deg;C</p>
                    <p>Feels like: {data.main.feels_like} &deg;C</p>
                    <p>Description: {data.weather[0].description}</p>
                </div>
            </div>
        );
    }

    return <Loading />;
}
