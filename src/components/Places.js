import React from "react";

import PlaceCard from "./PlaceCard";

import vb from "../images/virgilio-barco.jpg";
import jb from "../images/jardín-botánico.jpg";
import mo from "../images/monserrate.jpg";

export default function Places() {
    return (
        <div className='places'>
            <h2>
                <strong>Places to</strong> Visit
            </h2>
            <div className='body'>
                <div className='c1'>
                    <PlaceCard name='Biblioteca Virgilio Barco' img={vb} type='large' />
                </div>
                <div className='c2'>
                    <PlaceCard name='Jardín Botánico de Bogotá' img={jb} type='medium' />
                    <PlaceCard name='Monserrate' img={mo} type='small' />
                </div>
            </div>
        </div>
    );
}
