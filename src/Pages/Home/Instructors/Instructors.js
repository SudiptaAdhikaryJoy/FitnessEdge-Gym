import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('instructors.json')
        .then(res => res.json())
        .then(data =>setInstructors(data));
    },[])
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    instructors.map(instructor => <Instructor
                        key={instructor.id}
                        instructor={instructor}
                    ></Instructor>)
                }
  
            </Row>
        </div>
    );
};

export default Instructors;