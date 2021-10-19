import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container1">
            <div className="footer-container">
                <div>
                    <h1>Get Updates On Your Probably Want To Know About In Your Inbox</h1>
                    <div className="input-container">
                        <input type="email" />
                        <button className="btn-regular2">Subscribe</button>
                    </div>
                </div>
                <div>
                    <h1>Know Us</h1>
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Products</h4>
                </div>
                <div>
                    <h1>Overview</h1>
                    <h3>Contact Us</h3>
                    <h4>Email</h4>
                </div>
                <div>
                    <h1></h1>
                    <h3></h3>
                    <h4></h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;