import React from "react";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";
import Address from "./Address";
import './App.css';


export default function App() {
  return (
    <div>
      <SearchEngine />
      <Weather />
      <Address />
    </div>
  );
}
