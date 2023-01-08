import React from "react";
import "./index.css";
import "./Forecast.css";
import fog from "./images/fog.jpg";
import partiallySunny from "./images/partially-sunny.jpg";
import rain from "./images/rain.jpg";
import snow from "./images/snow.jpg";
import sleet from "./images/sleet.jpg";

export default function Forecast() {
    let forecastIcon = {
        fog: (fog),
        partiallySunny: (partiallySunny),
        rain: (rain),
        snow: (snow),
        sleet: (sleet)
    };

    return (
        <div className="Forecast">
            <div className="Days">
                <div class="d-flex flex-row justify-content-m-evenly">
                    <div class="p-0"><ul><li><span class="forecast-img"><img
                        src={forecastIcon.fog}
                        alt="fog"
                        className="forecast-img" /></span></li><li><span>Monday</span></li>
                        <li><span class="p-3">12°</span></li>
                        <li><span>Foggy</span></li></ul></div>

                    <div class="p-0"><ul><li><img
                        src={forecastIcon.partiallySunny}
                        alt="partiallySunny"
                        className="forecast-img"
                    /></li><li><span>Tuesday</span></li>
                        <li><span class="p-3">20°</span></li>
                        <li><span>Partly</span></li></ul></div>

                    <div class="p-0"><ul><li><img
                        src={forecastIcon.rain}
                        alt="rain"
                        className="forecast-img"
                    /></li><li><span>Wednesday</span></li>
                        <li><span class="p-3">20°</span></li>
                        <li><span>Rainy</span></li></ul></div>

                    <div class="p-0"><ul><li><img
                        src={forecastIcon.snow}
                        alt="snow"
                        className="forecast-img"
                    /></li><li><span>Thursday</span></li>
                        <li><span class="p-3">15°</span></li>
                        <li><span>Snowy</span></li></ul></div>

                    <div class="p-0"><ul><li><img
                        src={forecastIcon.sleet}
                        alt="sleet"
                        className="forecast-img"
                    /></li><li><span>Friday</span></li>
                        <li><span class="p-3">11°</span></li><li>
                            <span>Sleet</span></li></ul></div>


                </div >
            </div>
        </div >

    );
}