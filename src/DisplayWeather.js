import React from 'react'
import './App.css';

function DisplayWeather(props) {

    const {data} = props;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    return (
    <div className='displayWeather'>
        <span className="cardTitle">
            Weather at {data.name}, {data.sys.country}
        </span>
        <span className="cardSubtitle">
            As of {new Date().toLocaleDateString()}
        </span>
        <div className='weatherDetails'>
        <h1>
            {Math.round((data.main.feels_like - 273.15)*100)/100}<sup>o</sup>C
        </h1>
        <img src={icon} className='weather-icon' alt='weather'/>
        <span className='weather-main'>{data.weather[0].main}</span>
        <span className='weather-description'>{data.weather[0].description}</span>
        </div>
        <div className='additionalData'>
            <br/>
        <span className='item'>Feels like: {Math.round((data.main.feels_like - 273,15)*100)/100}</span>
        <span className='item'>Temp min: {Math.round((data.main.temp_min - 273,15)*100)/100}</span>
        <span className='item'>Temp max: {Math.round((data.main.temp_max - 273,15)*100)/100}</span>
        <span className='item'>Pressure: {data.main.pressure}</span>
        <span className='item'>Humidity: {data.main.humidity}</span>
        </div>
    </div>
  )
}

export default DisplayWeather