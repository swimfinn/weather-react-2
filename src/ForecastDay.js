import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min)
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDate();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="Forecast-day">{day()}
                <WeatherIcon code={props.data.weather[0].icon} size={36} />
            </div>
            <div className="Forecast-temperatures">
                <span className="Forecast-temperatures-max">
                    {maxTemperature()}
                </span>
                <span className="Forecast-temperatures-min">
                    {minTemperature()}
                </span>
            </div>
        </div>
    );
}