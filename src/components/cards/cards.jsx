import React from "react";
import './cards.css';

function Cards(props) {
    return (
        <div className="logo-1">
            <img src={props.img} alt={props.text} className="image-1" />
            <h2 className="text_info">{props.text}</h2>
            <p className="text_info">{props.textInfo}</p>
        </div>
    );
}

export default Cards;
