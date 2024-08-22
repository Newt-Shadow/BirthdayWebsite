import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import './greetings.css';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const greetingsDatabase = ref(getDatabase(app), "greetings");

const Greetings = () => {
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [alertVisible, setAlertVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name === "" || formData.message === "") {
            alert("All fields must be filled out");
            return;
        }

        try {
            const newGreeting = push(greetingsDatabase);
            set(newGreeting, formData);

            await addDoc(collection(db, "greetings"), {
                ...formData,
                timestamp: serverTimestamp()
            });

            setAlertVisible(true);
            setTimeout(() => setAlertVisible(false), 3000);

            setFormData({ name: '', message: '' });
        } catch (error) {
            console.error("Error writing document: ", error);
        }
    };

    return (
        <div className="greetings-container" id="greetings">
            <div className={`alert alert-success p-2 ${alertVisible ? 'show' : ''}`}>
                Greetings Sent ➤
            </div>
            <form id="greetingsForm" onSubmit={handleSubmit} method='post'>
                <div className="form-grp">
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                </div>
                <div className="form-grp">
                    <label htmlFor="message">Greetings :</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Birthday Greetings"></textarea>
                </div>
                <button className="btn btn-outline-secondary" type="submit">Send ╰┈➤</button>
            </form>
        </div>
    );
};

export default Greetings;
