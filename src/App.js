import React from "react";
import Weather from "./Weather";
import Address from "./Address";
import Mood from "./Mood";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        < div className="card-body">
          <Weather defaultCity="Wenatchee" />
        </div >
      </div >
      <Address />
      <Mood />
    </div >
  );

}

