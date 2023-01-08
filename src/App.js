import React from "react";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";
import Address from "./Address";
import Forecast from "./Forecast";
import Mood from "./Mood";
import Current from "./Current";
import SearchBtn from "./SearchBtn";
import './App.css';

export default function App() {
  return (
    <div>
      <SearchEngine />
      <Weather />
      <Address />
      <Forecast />
      <Mood />
      <Current />
      <SearchBtn />
    </div>
  );

}

