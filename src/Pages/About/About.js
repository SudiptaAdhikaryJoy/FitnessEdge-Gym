import React from 'react';
import { Link } from 'react-router-dom';
import fitness from '../../images/about/fitness-1.jpeg';
import './About.css';
const About = () => {
    return (
        <div id="#about" className="main-container mt-5">
                <h2>Know us</h2>
            <div className="container gap-5">
                <div className="img-container">
                    <img className="img-fluid p-3 mx-0" src={fitness} alt="" />
                </div>
                <div className="text-container">
                    <h2>Be Self Dependent</h2>
                    <p className="text">At Gym and Fitness, we believe that building a positive culture is incredibly important. The business is underpinned by six core values which speak of our commitment to our customers, staff, the industry and our business as a whole. We believe in encouraging, supporting, challenging, learning and growing to be the best. At Gym and Fitness, every morsel of feedback is a nugget of shiny gold because it gives us the opportunity to provide the best customer experience.</p>

                    <Link to="/services"><button className="btn-regular">know Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;