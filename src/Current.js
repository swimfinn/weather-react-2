import React from "react";
import useSound from "use-sound";
import axios from "axios";
import Lightning from "./audio/lightning.mp3";
import "./SearchBtn.css";

const Current = (props) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const [playCurrent, { pause }] = useSound(Lightning, {
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
    });

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            playCurrent();
        }
        setIsPlaying(!isPlaying);
    };

    function handleCurrentResponse(response) {
        props.handleResponse(response);
    }

    function currentSearch(position) {
        console.log(position);

        let apiKey = "3a8d7f059fc61ac00591426445cb607a";
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
        let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleCurrentResponse);
    }

    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(currentSearch);
    }
    function handleClick(event) {
        event.preventDefault();
        getCurrentLocation();
        togglePlay();
    }

    return (
        <>
            <button type="button" className="CurrentBtn btn shadow-sm" onClick={handleClick}><b>Current</b></button>
        </>
    );

};

export default Current;

