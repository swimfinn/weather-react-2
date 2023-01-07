import React from "react";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";
import Address from "./Address";
import Music from "./Music";
import './App.css';

export default function App() {
  return (
    <div>
      <SearchEngine />
      <Weather />
      <Address />
      <Music />
    </div>
  );

}

