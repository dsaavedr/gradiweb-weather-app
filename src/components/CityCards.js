import React, { Component } from "react";

import CityCard from "./CityCard";

export default class CityCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            cities: ["Paris", "Lyon"]
        };
    }

    componentDidMount() {
        for (const item of this.state.cities) {
            this.getByCityName(item);
        }
    }

    getByCityName = name => {
        const Http = new XMLHttpRequest();
        const key = process.env.REACT_APP_OWM_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric`;

        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = e => {
            const { readyState, status } = Http;

            if (readyState === 4 && status === 200) {
                this.setState(state => ({
                    cards: [
                        ...state.cards,
                        <CityCard data={JSON.parse(Http.responseText)} key={state.cards.length} />
                    ]
                }));
            }
        };
    };

    render() {
        return <div className='cards'>{this.state.cards}</div>;
    }
}
