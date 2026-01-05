import SearchBox from './searchbox';
import InfoBox from './infobox';
import { useState } from 'react';


export default function WeatherApp(){
const [weatherInfo, setWeatherInfo] = useState({
        city: "mumbai",
        feelslike: 24.84,
        temp: 25.25,
        tempmin: 18.24,
        tempmax: 40.2,
        humidity: 47,
        weather: "haze"
});


let updateInfo = (newinfo) => {
setWeatherInfo(newinfo);
}

    return(
        <div style={{textAlign: "center"}}>
            <h2>weather app</h2>

            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}