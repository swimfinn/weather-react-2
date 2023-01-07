import React from "react";
import knightRider from "./knightRider.mp3";
import { Howl } from 'howler';

export default function Music() {
    const { Howl, Howler } = require('howler');
    var sound = new Howl({
        src: ['sound.mp3'],
        Howler: [.5],
        autoplay: true,
    });
    sound.play()
    Howler.volume(0.5);
}