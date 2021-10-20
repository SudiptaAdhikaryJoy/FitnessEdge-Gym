import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const Service = ({service}) => {
    const {id, name, description, img} = service;
    const history = useHistory();
    console.log(id);

    const handleDetail =(e)=>{
        console.log('hello',e);
        const detailId = `/info/${e}`
        history.push(detailId);
    }


    
    return (
        <> 
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title style={{text:'bold'}}>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            
                                <button onClick={()=>handleDetail(id)} className="btn btn-warning">Details</button>
                            
                        </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;