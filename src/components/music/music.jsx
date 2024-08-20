import React from "react";
import "./music.css";
import YouTubeSearch from "../youtube/youtube";

function Music() {
    return (
        <div className="music">

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div class="col-md-5">
                     <YouTubeSearch />
                </div>
            </div>


           
        </div >
    );
}

export default Music;
