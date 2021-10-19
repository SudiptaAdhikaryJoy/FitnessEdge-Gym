import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, description, img} = service;
    return (
        <> 
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                         <Card.Title style={{text:'bold'}}>{name}</Card.Title>
                         <Card.Text>{description}</Card.Text>
                         <Link to={`/info/${id}`}>
                            <button className="btn btn-warning">Details</button>
                         </Link>
                    </Card.Body>
            </Card>
        </Col>
        </>
    );
};

export default Service;