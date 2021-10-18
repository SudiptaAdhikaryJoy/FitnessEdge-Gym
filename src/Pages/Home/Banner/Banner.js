import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner/banner-1.jpeg';
import banner2 from '../../../images/banner/banner-2.jpeg';
import banner3 from '../../../images/banner/banner-3.jpeg';
import banner4 from '../../../images/banner/banner-4.jpeg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="banner-text">STOP DOUBTING. START SWEATING.</h3>
                        <p>Say yes to results with the best strength and weight training, cardio equipment, group exercise classes and more at a FitnessEdge Gym near you.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="banner-text">HUSTLE FOR THE MUSCLE</h3>
                        <p>The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="banner-text">All progress takes place outside the comfort zone.</h3>
                        <p>Things may come to those who wait, but only the things left by those who hustle.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="banner-text">ACTION IS THE FOUNDATION KEY TO ALL SUCCESS</h3>
                        <p>If you want something you’ve never had, you must be willing to do something you’ve never done.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </>
    );
};

export default Banner;