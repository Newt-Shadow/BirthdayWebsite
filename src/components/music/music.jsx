import React from "react";
import "./music.css";
import YouTubeSearch from "../youtube/youtube";


function Music() {
    return (
        <div className="music" id="music">

            <div className="row featurette">
                <div className="musicColor">
                    <h2 className="featurette-heading fw-normal lh-1">The table is set, the presents are wrapped, <span className="text-body-secondary">and the decorations perfect. </span></h2>
                    <p className="lead">Now all that’s left is to make this birthday one to remember with some Music.</p>
                    </div>
                <div className="col-md-5">
                
                </div>
                
            </div>

            <YouTubeSearch />
           
        </div >
    );
}

export default Music;
