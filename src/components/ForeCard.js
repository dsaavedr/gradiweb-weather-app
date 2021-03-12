import React from "react";

export default function ForeCard(props) {
    return (
        <div className='foreCard'>
            <img src={props.img} alt='Weather logo' className='icon' />
            <div className='text'>
                <h4 className='day'>{props.day}</h4>
                <span className='desc'>{props.desc}</span>
            </div>
            <div className={"temp " + (props.main ? "main" : "")}>
                <span>
                    {Math.round(props.limit.upper)}&deg; | {Math.round(props.limit.lower)}&deg;
                </span>
            </div>
        </div>
    );
}
