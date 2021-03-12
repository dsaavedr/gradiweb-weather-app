import React from "react";

export default function CityCard(props) {
    const { weather, main, name, wind } = props.data;
    console.log(props.data);

    const iconURL = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    let direction = "";
    const { deg } = wind;

    if (deg <= 45 || deg > 315) {
        direction = "North";
    } else if (deg <= 135) {
        direction = "East";
    } else if (deg <= 225) {
        direction = "South";
    } else {
        direction = "West";
    }

    return (
        <div className='cityCard'>
            <div className='main'>
                <div className='icon'>
                    <img src={iconURL} alt='' />
                </div>
                <div className='temp'>
                    <span>{Math.round(main.temp)} &deg;C</span>
                </div>
                <div className='info'>
                    <h4 className='city'>
                        {name}, {props.data.sys.country}
                    </h4>
                </div>
            </div>
            <div className='bottom'>
                <div className='humidity'>
                    <span>Humidity: {main.humidity}%</span>
                </div>
                <div className='direction'>{direction}</div>
                <div className='speed'>{wind.speed}km/h</div>
            </div>
        </div>
    );
}
