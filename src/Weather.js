import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    let [city, setCity] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [weather, setWeather] = useState("null");

    function displayWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "3a8d7f059fc61ac00591426445cb607a";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(url).then(displayWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <div class="searchEngine mb-3">
            <form onSubmit={handleSubmit} className="search-bar">
                <input type="text" className="form-control shadow-sm"
                    autofocus="on" onChange={updateCity} placeholder="Type a city..." />
                <button type="button"
                    className="search-button btn btn-primary shadow-sm"><b>
                        Search
                </b>
                </button>
                <button type="button" className="current-button btn btn-success">
                    <b>
                        Current
                </b>
                </button>
            </form>
        </div>
    );
    if (loaded) {
        return (
            <div>
                {form}
                <ul>
                    <li>Temperature: {Math.round(weather.temperature)}°F</li>
                    <li>Description: {weather.description}</li>
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind}mph</li>
                    <li>
                        <img src={weather.icon} alt={weather.descriptoin} />{" "}
                    </li>
                </ul>
            </div>
        );
    } else {
        return form;
    }
}
