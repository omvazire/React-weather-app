import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    let [City, setCity] = useState("");
    let[error, setError] = useState("");



    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    let getWhetherInfo = async () => {
       let responce = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
       let jsonResponce = await responce.json();

       let result = {
     city: City,
     temp: jsonResponce.main.temp,
    tempmin: jsonResponce.main.temp_min,
    tempmax: jsonResponce.main.temp_max,
    humidity: jsonResponce.main.humidity,
    feelslike: jsonResponce.main.feels_like,
     weather: jsonResponce.weather[0].description,
    };

       console.log(result);
       return result;
    }



let handleChange = (event) =>{
    setCity(event.target.value);
}

let handleSubmit = async (event) =>{
    event.preventDefault();
    console.log(City);
    
    setCity("");
   let newinfo =  await getWhetherInfo(City);
   updateInfo(newinfo);

    
}

    return(
        <div className='searchbox'>
           
            <form onSubmit={handleSubmit}>
                      <TextField id="City" label="City Name" variant="outlined" value={City} onChange={handleChange}/>
                      <br /><br />

 <Button variant="contained" type='submit'>Search</Button>
                    
            </form>
        </div>
    )
}