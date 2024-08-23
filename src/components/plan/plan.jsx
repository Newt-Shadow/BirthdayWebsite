import React from "react";
import Rsvp from "../rsvp/rsvp";
import './plan.css';

function Fun() {
    return (
        <div className="plan" >
            <div className="fun">
                <div className="fs-1">
                    <p>Want To</p>
                </div>
                <div className="fs-2">
                    <p>Plan The Fun</p>
                </div>
                <Rsvp />
                <div className="fs-2">
                    <p>Pick A Theme That Rocks</p>
                </div>
                <div className="fs-2">
                    <p>Invite Everyone You Know</p>
                </div>
                <div className="fs-2">
                    <p>And</p>
                </div>
                <div className="fs-2">
                    <p>Prepare For The Unforgettable Moments ...</p>
                </div>
            </div>
        </div>
    );
}

export default Fun;
