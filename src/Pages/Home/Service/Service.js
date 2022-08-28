import React from "react";
import {Card, ListGroup, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const Service = ({service}) =>{
    const {id, name, price, picture} = service;
    const navigate = useNavigate();
    const handleSubmitDetail = id =>{
        navigate(`/service/${id}`);
    }
    return(
        <Card style={{ width: '18rem' }} className='shadow-lg'>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup.Item className="fs-5 mb-2 danger">{price}</ListGroup.Item>
          <Button variant="danger" onClick={()=> handleSubmitDetail(id)}>Add to cart</Button>
        </Card.Body>
      </Card>
    );
};


export default Service;

{/* <div className="shadow-sm container w-75">
            <img className="w-50 rounded border-4 shadow-lg" src={picture}></img>
            <h3>{name}</h3>
            <p className="text-danger">{price}</p>
        </div> */}