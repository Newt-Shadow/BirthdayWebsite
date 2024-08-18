import React from "react";
import './cards.css';
import foodImage from '../../assets/food.jpg';
import cakeImage from '../../assets/cake.jpg';
import gamesImage from '../../assets/games.jpg';
import surprisesImage from '../../assets/surprises.jpg';

function Cards() {
    return (
        <div className="grid-logo">
            <div className="logo-banner-1">
                <div className="logo-1">
                    <img src={foodImage} alt="Epic Food" className="image-1" />
                    <h2 className="text_info">Epic Food</h2>
                    <p className="text_info">Your Tastes Will Thank You!</p>
                </div>
                <div className="logo-1">
                    <img src={cakeImage} alt="Cake Madness" className="image-1" />
                    <h2 className="text_info">Cake Madness</h2>
                    <p className="text_info">A Cake Tasting Extravaganza Organised Only For You</p>
                </div>
                <div className="logo-1">
                    <img src={gamesImage} alt="Games That WOW !!" className="image-1" />
                    <h2 className="text_info">Games That WOW !!</h2>
                    <p className="text_info">Life Is A Game And You Just Levelled Up</p>
                </div>
                <div className="logo-1">
                    <img src={surprisesImage} alt="Surprises Await" className="image-1" />
                    <h2 className="text_info al-c">And Many More Surprises Still Await...</h2>
                </div>
            </div>
        </div>
    );
}

export default Cards;
