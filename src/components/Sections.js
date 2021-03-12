import React from "react";

import Cards from "./Cards";
import Forecast from "./Forecast";
import Places from "./Places";

export default function Sections() {
    return (
        <div className='sectionsWrapper'>
            <Forecast />
            <Places />
            <Cards />
        </div>
    );
}
