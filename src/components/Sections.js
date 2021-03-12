import React from "react";

import CityCards from "./CityCards";
import Forecast from "./Forecast";
import Places from "./Places";

export default function Sections(props) {
    const { data } = props;

    return (
        <div className='sectionsWrapper'>
            <Forecast data={data.slice(1, 4)} />
            <Places />
            <CityCards />
        </div>
    );
}
