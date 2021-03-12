import { useEffect, useState } from "react";

import "./styles/index.sass";
import Banner from "./components/Banner";
import Sections from "./components/Sections";
import Loading from "./components/Loading";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Get JSON data using Ajax
        const Http = new XMLHttpRequest();
        // Bogotá's id
        const bog = {
            lat: 4.6097,
            lon: -74.0817
        };
        const key = process.env.REACT_APP_OWM_KEY;
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${bog.lat}&lon=${bog.lon}&appid=${key}&units=metric`;

        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = e => {
            const { readyState, status } = Http;

            if (readyState === 4 && status === 200) {
                setData(JSON.parse(Http.responseText));
            }
        };
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (!data) return <Loading />;

    return (
        <div className='App'>
            <div className='container'>
                <header>
                    <Banner current={data.current} />
                </header>
                <main>
                    <Sections data={data.daily} />
                </main>
            </div>
        </div>
    );
}

export default App;
