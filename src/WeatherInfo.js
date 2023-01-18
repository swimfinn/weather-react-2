import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./Weather.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1 className="CityInfo">{props.data.city}</h1>
            <ul>
                <li className="DateInfo">
                    <CurrentDate date={props.data.date} />
                </li>
                <li className="DescriptionInfo">
                    {props.data.description}
                </li>
            </ul>
            <div className="row Forecast-Weather">
                <div className="col-6">
                    <div className="WeatherImg">
                        <WeatherIcon code={props.data.icon} />
                    </div>
                    <WeatherTemp fahrenheit={props.data.temperature} />
                </div>
            </div>
            <div className="col-6">
                <div className="OtherInfo">
                    <ul>
                        <li>
                            Humidity: {props.data.humidity}%
                    </li>
                        <li>
                            Wind: {Math.round(props.data.wind)} mph
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}