import React from "react";
import { Link, useParams } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import photo from '../../images/Rectangle 1.png';

const ServiceDetail = () => {
    const { detail } = useParams();
    return (
        <div className="">
            <h2 className="text-center text-danger">welcome to details: {detail}</h2>
            <Card style={{ width: '18rem', margin:'0 auto', float: 'none', marginBottom: '10px' }} className='shadow-lg ' >
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>Best Travel Forever</Card.Title>
                    <ListGroup.Item className="fs-5 mb-2 danger"><p><small>Amenities include a heated outdoor pool, rooms with kitchens. Sonesta ES Suites Charleston's rooms have a living room with sofa bed and a 32-37-inch cable TV.</small></p></ListGroup.Item>
                </Card.Body>
                <div className="text-center">
                    <Link to='/checkout'>
                        <button className="btn btn-danger">Proceed Checkout</button>
                    </Link>
                </div>
            </Card>

        </div>
    );
};

export default ServiceDetail;

