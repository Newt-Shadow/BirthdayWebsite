import React from "react";
import './wish.css';
import Greetings from "./greetings";

function Wish(){
    return (
        <div className="wishes">
            <div className="wish">
                <p>
                    Let's Wish Our Friend the Best Of His Birthday
                </p>
            </div>
            <Greetings />
        </div>
    )
}

export default Wish;