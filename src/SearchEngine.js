import React from "react";
import "./App.css";

export default function SearchEngine() {
    return (
        <div class="searchEngine mb-3">
            <form className="search-bar">
                <input type="text" className="form-control shadow-sm"
                    autofocus="on" placeholder="Type a city..." />
                <button type="button"
                    className="search-button btn btn-primary shadow-sm"><b>
                        Search
                </b>
                </button>
                <button type="button" className="current-button btn btn-success">
                    <b>
                        Current
                </b>
                </button>
            </form>
        </div>
    );
}