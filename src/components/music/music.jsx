import React from "react";
import "./music.css";
import YouTubeSearch from "../youtube/youtube";

function Music() {
    return (
        <div className="music">
            <div className="noMusic">
                <p>No Music</p>
                <p>No Life</p>
                
            </div>
            <YouTubeSearch />
        </div>
    );
}

export default Music;
