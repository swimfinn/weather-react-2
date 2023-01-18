import React from "react";
import "./Weather.css";
import "./WeatherIcon.css";
import Sun from "./images/sun.jpg";
import ClearNight from "./images/clearNight.png";
import PartiallySunny from "./images/partiallySunny.jpg";
import CloudyNight from "./images/cloudyNight.jpg";
import Cloudy from "./images/cloudy.jpg";
import Rain from "./images/rain.jpg";
import Sleet from "./images/sleet.jpg";
import Snow from "./images/snow.jpg";
import Fog from "./images/fog.jpg"

export default function WeatherIcon(props) {
    if (props.code === "01d")

        return (
            <div className="Sun">
                <img src={Sun} alt="Sunny" />
            </div>
        );

    if (props.code === "01n")

        return (
            <div className="ClearNight">
                <img src={ClearNight} alt="Clear Night" />
            </div>
        );

    if (props.code === "02d")

        return (
            <div className="PartiallySunny">
                <img src={PartiallySunny} alt="Partially Sunny" />
            </div>
        );

    if (props.code === "02n")

        return (
            <div className="CloudyNight">
                <img src={CloudyNight} alt="Cloudy Night" />
            </div>
        );

    if (props.code === "03d")

        return (
            <div className="Cloudy">
                <img src={Cloudy} alt="Cloudy" />
            </div>
        );

    if (props.code === "03n")

        return (
            <div className="Cloudy">
                <img src={Cloudy} alt="Cloudy" />
            </div>
        );

    if (props.code === "04d")

        return (
            <div className="Cloudy">
                <img src={Cloudy} alt="Cloudy" />
            </div>
        );

    if (props.code === "04n")

        return (
            <div className="Cloudy">
                <img src={Cloudy} alt="Cloudy" />
            </div>
        );

    if (props.code === "09d")

        return (
            <div className="Rain">
                <img src={Rain} alt="Cloudy" />
            </div>
        );

    if (props.code === "09n")

        return (
            <div className="Cloudy">
                <img src={Cloudy} alt="SCloudy" />
            </div>
        );

    if (props.code === "10d")

        return (
            <div className="Cloudy">
                <img src={Cloudy} alt="Cloudy" />
            </div>
        );

    if (props.code === "10n")

        return (
            <div className="Cloudy">
                <img src={Cloudy} alt="Cloudy" />
            </div>
        );

    if (props.code === "11d")

        return (
            <div className="Sleet">
                <img src={Sleet} alt="Sleet" />
            </div>
        );

    if (props.code === "11n")

        return (
            <div className="Sleet">
                <img src={Sleet} alt="Sleet" />
            </div>
        );

    if (props.code === "13d")

        return (
            <div className="Snow">
                <img src={Snow} alt="Snowy" />
            </div>
        );

    if (props.code === "14n")

        return (
            <div className="Snow">
                <img src={Snow} alt="Snowy" />
            </div>
        );

    if (props.code === "50d")

        return (
            <div className="Fog">
                <img src={Fog} alt="Foggy" />
            </div>
        );

    if (props.code === "50n")

        return (
            <div className="Fog">
                <img src={Fog} alt="Foggy" />
            </div>
        );
}


