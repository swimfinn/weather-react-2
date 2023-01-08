import React from "react";
import useSound from "use-sound";
import "./Mood.css";
import knightRider from "./audio/knightRider.mp3";

const Mood = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const [playMood, { pause }] = useSound(knightRider, {
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
    });

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            playMood();
        }
        setIsPlaying(!isPlaying);
    }
    return (
        <div className="container">
            <button className="Mood" onClick={togglePlay}>Current Mood</button>
        </div>
    );

};

export default Mood;
