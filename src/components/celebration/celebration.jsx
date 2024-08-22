import React from "react";
import './celebration.css';
import Cards from '../cards/cards.jsx';
import cardInfo from "../../database/partyinfo.js"; 

function Celebration() {
    return (
        <div className="celebration" id="join-us">
            <div className="celeb">
                <div className="celeb_party">
                    <h2>Join us</h2>
                </div>
            </div>
            <div className="grid-logo">
                <div className="logo-banner-1">
                    {cardInfo.map(card => (
                        <Cards
                            key={card.id}
                            img={card.img}
                            text={card.text}
                            textInfo={card.textInfo}
                        />
                    ))}
                </div>
            </div>
            <p className="wild">The Wildest And Most Memorable Party Ever</p>
        </div>
    );
}

export default Celebration;
