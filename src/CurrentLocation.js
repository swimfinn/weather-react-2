import React from "react";

export default function SearchLocation(position) {
    let apiKey = "3a8d7f059fc61ac00591426445cb607a";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeatherCondition);

    function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
    }
    return "Loading...";


}
