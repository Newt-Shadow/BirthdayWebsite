import React from "react";
import './location.css';

function Location() {
    const handleLocateClick = () => {
        window.open("https://www.google.com/maps/place/4321+W+Flamingo+Rd,+Las+Vegas,+NV+89103,+USA/data=!4m2!3m1!1s0x80c8c69ebe53d5df:0x3fea6721832b13bb?sa=X&ved=1t:242&ictx=111", "_blank");
    };

    return (
        <div className="location" id="location">
            <div className="fs-7">
                Locate Us
            </div>
            <div>
                <p className="fs-7">
                    Palms Casino Resort, Las Vegas
                </p>
            </div>
            <button className="rsvp-button" onClick={handleLocateClick}>Locate</button>
        </div>
    );
}

export default Location;
