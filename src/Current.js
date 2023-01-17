import React from "react";
import useSound from "use-sound";
import Lightning from "./audio/lightning.mp3";
import "./SearchBtn.css";

const Current = () => {
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
    }
    return (
        <>
            <button type="button" className="CurrentBtn btn shadow-sm" onClick={togglePlay}><b>Current</b></button>
        </>
    );

};

export default Current;

