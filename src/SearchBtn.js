import React from "react";
import useSound from "use-sound";
import Scanner from "./audio/scanner.mp3";
import "./SearchBtn.css";



const SearchBtn = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const [playSearchBtn, { pause }] = useSound(Scanner, {
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
    });

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            playSearchBtn();
        }
        setIsPlaying(!isPlaying);
    }

    function helpSubmit(event) {
        event.defaultPrevent();
    }

    return (
        <div className="Search-button">
            <button type="submit" onSubmit={helpSubmit} className="SearchBtn btn shadow-sm" onClick={togglePlay}><b>Search</b></button>
        </div>
    );
};

export default SearchBtn;

