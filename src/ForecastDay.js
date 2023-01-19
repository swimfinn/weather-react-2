import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min)
        return `${temperature}°`;
    }

    function descriptionForecast() {
        console.log()
        let description = props.data.weather[0].description;
        return `${description}`;
    }

    function days() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div class="Forecast-weather">
            <div className="Forecast-days">{days()}</div>
            <div className="WeatherImg">
                <WeatherIcon code={props.data.weather[0].icon} />
            </div>
            <div className="Forecast-temperatures">
                <span className="Forecast-temperatures-max">
                    {maxTemperature()}
                </span><span> / </span>
                <span className="Forecast-temperatures-min">
                    {minTemperature()}
                </span>
            </div>
            <div className="Forecast-description">
                {descriptionForecast()}
            </div>
        </div >
    );
}