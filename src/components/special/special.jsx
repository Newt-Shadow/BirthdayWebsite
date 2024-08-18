import React from "react";
import './special.css';

function Special() {
    return (
        <div className="specials">
            <div className="birthdayCard">
                <div className="cardFront">
                    <h3 className="happy">HAPPY BIRTHDAY !</h3>
                    <div className="balloons">
                        <div className="balloonOne" />
                        <div className="balloonTwo" />
                        <div className="balloonThree" />
                        <div className="balloonFour" />
                    </div>
                </div>
                <div className="cardInside">
                    <h3 className="back">🎈HAPPY BIRTHDAY🎈</h3>
                    <p>    </p>
                    <p className="sp">
                        Happy birthday Buddy!! I hope your day is filled with lots of love and
                        laughter! May all of your birthday wishes come true.
                    </p>
                    <p className="sp">
                        P.S : Be Ready For Your Grand GPL
                    </p>
                    <p className="name sp">Anmol</p>
                </div>
            </div>
        </div>


    )
}

export default Special;