import React from "react";
import "./music.css";
import YouTubeSearch from "../youtube/youtube";


function Music() {
    return (
        <div className="music">

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                <YouTubeSearch />
                </div>
                
            </div>


           
        </div >
    );
}

export default Music;
