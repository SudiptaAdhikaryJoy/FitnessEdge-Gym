import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className="mt-5">
            <h2>Our Services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;