import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <> 
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                         <Card.Title style={{text:'bold'}}>{name}</Card.Title>
                         <Card.Text>{description}</Card.Text>
                    </Card.Body>
            </Card>
        </Col>
        </>
    );
};

export default Service;