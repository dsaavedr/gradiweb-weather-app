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
        const key = process.env.REACT_APP_OWM_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${key}&units=metric`;

        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = e => {
            const { readyState, status } = Http;

            if (readyState === 4 && status === 200) {
                // Simulate server wait time to show loader
                setTimeout(() => {
                    setData(JSON.parse(Http.responseText));
                    console.log(data);
                }, 1500);
            }
        };
    }, []);

    if (data) {
        let info = {
            weather: data.weather,
            main: data.main
        };

        return (
            <div className='banner'>
                <div className='info'>
                    <div className='name text-primary'>
                        <IoLocationSharp />
                        <div>{data.name}</div>
                    </div>
                    <FloatingInfo info={info} />
                </div>
            </div>
        );
    }

    return <Loading />;
}
