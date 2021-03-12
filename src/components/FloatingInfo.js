import React, { useState } from "react";

export default function FloatingInfo(props) {
    const [collapsed, setCollapsed] = useState(false);

    const { weather, main } = props.info;
    const iconURL = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    const collapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={"floatingInfo " + (collapsed ? "collapsed" : "")} onClick={collapse}>
            <div className='top'>
                <img src={iconURL} alt='Weather icon' />
                <p className='desc'>{weather[0].main}</p>
            </div>
            <div className='bottom'>
                <span>
                    {Math.round(main.temp)}&deg;<sup>c</sup>
                </span>
            </div>
        </div>
    );
}
