import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubscribe = () => {
        if (!email) {
            toast.error("Please enter an email address.");
        } else if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
        } else {
            toast.success("Subscribed successfully!");
            setEmail('');
        }
    };

    return (
        <div id="subscribe">
            <div className="subscribe-container">
                <h2 className="subscribe-title">Stay Updated</h2>
                <p className="subscribe-text">
                    Subscribe to our newsletter for the latest AI writing tips and BookAI updates.
                </p>
                <div className="subscribe-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="subscribe-input"
                    />
                    <button onClick={handleSubscribe} className="subscribe-button">Subscribe</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Subscribe;
