import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Instructor = ({instructor}) => {
    const {id, name, age, designation, img} = instructor;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Age: {age}</Card.Text>
                    <Card.Text>Designation: {designation}</Card.Text>
                    <Link to="/home"><button className="btn btn-primary">Back To Home</button></Link>
                    </Card.Body>
                </Card>
            </Col>
            
        </>
    );
};

export default Instructor;
