import React from 'react';
import './cover.css';
import birthdayImage from '../../assets/birthday1.jpg'; // Adjust path as necessary

function Cover() {
    return (
        <div className="cover">
            <div className="card">
                <img src={birthdayImage} alt="Birthday Celebration" />
            </div>
        </div>
    );
}

export default Cover;
