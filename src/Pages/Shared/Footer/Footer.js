import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container1  sticky-bottom mt-2">
            <div className="footer-container">
                <div>
                    <h1>Get Updates On Your Probably Want To Know About In Your Inbox</h1>
                    <div className="input-container">
                        <input placeholder="get your update" type="email" />
                        <button className="btn-regular2">Subscribe</button>
                    </div>
                </div>
                <div>
                    <h1>Know Us</h1>
                    <Link to="/home" style={{textDecoration:'none', color: 'lightGray'}}><h4>Home</h4></Link>
                    <Link to="/about" style={{textDecoration:'none', color:'lightGray'}}><h4>About</h4></Link>
                    <Link to="/products" style={{textDecoration:'none', color:'lightGray'}}><h4>Products</h4></Link>
                </div>
                <div>
                    <h1>Overview</h1>
                    <Link to="/products" style={{textDecoration:'none', color:'lightGray'}}><h4>Contact Us</h4></Link>
                    <Link to="/login" style={{textDecoration:'none', color:'lightGray'}}><h4>Email</h4></Link>
                </div>

            </div>
        </div>
    );
};

export default Footer;