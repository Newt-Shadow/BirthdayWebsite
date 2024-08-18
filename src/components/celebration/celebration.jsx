import React from "react";
import './celebration.css';
import Cards from '../cards/cards.jsx';


function Celebration() {
    return (
        <div className="celebration" >
            <div className="celeb" >
                <div className="celeb_party">
                    <h2>Join us </h2>
                </div>

            </div>
            <Cards />
            <p className="wild">The Wildest And Most Memorable Party Ever</p>
            
        </div>
    )
}

export default Celebration;