import React from "react";
import Current from "./Current"
import axios from "axios";
import "./Weather.css";

export default function CurrentLocation(position) {

    function currentSearch() {
        console.log(position);
        let apiKey = "3a8d7f059fc61ac00591426445cb607a";
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
        let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(getCurrentLocation);
    }

    function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(currentSearch);
    }
    return (
        <div>
            <Current onClick={getCurrentLocation} />
        </div>
    );
}
