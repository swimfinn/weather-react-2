import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
    let weatherInfo = {
        city: "Wenatchee",
        date: "Saturday, 7:12 p.m.",
        description: "Sunny",
        imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
        humidity: 23,
        wind: 5,
        temperature: 78
    };

    return (
        <div className="weatherInfo">
            <h1 className="cityInfo">{weatherInfo.city}</h1>
            <ul>
                <li className="dateInfo">
                    {weatherInfo.date}
                </li>
                <li className="descriptionInfo">
                    {weatherInfo.description}
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img
                        src={weatherInfo.imgUrl}
                        alt={weatherInfo.description}
                        className="weather-img"
                    />
                    <span className="temp">{weatherInfo.temperature}</span>
                    <span className="units">°F</span>
                </div>
            </div>
            <div className="col-6">
                <div className="otherInfo">
                    <ul>
                        <li>
                            Humidity: {weatherInfo.humidity}%
                    </li>
                        <li>
                            Wind: {weatherInfo.wind} mph
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
