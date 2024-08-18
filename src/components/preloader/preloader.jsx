import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './preloader.css';

const Preloader = () => {
    const [countdown, setCountdown] = useState(3);
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            setShowMessage(true);
            const messageTimer = setTimeout(() => {
                navigate('/main');
            }, 2000);

            return () => clearTimeout(messageTimer);
        }
    }, [countdown, navigate]);

    return (
        <div className="preloader">
            {showMessage ? (
                <div className="message">
                    <h1>Happy Birthday!</h1>
                </div>
            ) : (
                <div className="countdown">
                    <h1>{countdown}</h1>
                </div>
            )}
        </div>
    );
};

export default Preloader;
