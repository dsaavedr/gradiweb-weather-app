import React from "react";
import ForeCard from "./ForeCard";

export default function Forecast(props) {
    const { data } = props;

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const cards = data.map((i, idx) => {
        // Convert unix timestamp to miliseconds
        const date = new Date(i.dt * 1000);
        const { icon, main } = i.weather[0];
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        const limit = {
            lower: i.temp.min,
            upper: i.temp.max
        };

        return (
            <ForeCard
                key={idx}
                main={idx == 0}
                day={weekday[date.getDay()]}
                img={iconURL}
                desc={main}
                limit={limit}
            />
        );
    });

    return (
        <div className='forecast'>
            <h2>
                <strong>3 Days</strong> Forecast
            </h2>
            <div className='body'>{cards}</div>
        </div>
    );
}
