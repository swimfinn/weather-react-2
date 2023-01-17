import React, { useState } from "react";
import SearchBtn from "./SearchBtn";
import WeatherInfo from "./WeatherInfo";
import CurrentForecast from "./CurrentForecast";
import CurrentLocation from "./CurrentLocation";
import axios from "axios";
import "./App.css";
import "./Weather.css";
import "./SearchBtn.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);


    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = "3a8d7f059fc61ac00591426445cb607a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div class="searchEngine mb-3">
                <form className="Search-bar" onSubmit={handleSubmit}>
                    <input type="text" className="Form-control shadow-sm" onChange={handleCityChange} autofocus="on" placeholder="Type a city..." />
                    <SearchBtn />
                    <CurrentLocation />
                </form>
                <>
                    <WeatherInfo data={weatherData} />
                    <CurrentForecast coordinates={weatherData.coordinates} />
                </>
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}