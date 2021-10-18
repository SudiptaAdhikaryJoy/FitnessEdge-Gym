import React, { useEffect, useState } from 'react';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h2>This is Services</h2>
            {services.length}
        </div>
    );
};

export default Services;