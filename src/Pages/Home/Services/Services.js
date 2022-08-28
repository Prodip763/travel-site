import React, { useEffect, useState } from "react";
import {Row, Button, Container} from 'react-bootstrap';
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h2 className="text-center text-danger mt-5">Services</h2>
            <Container>
            <Row className="gap-4 m-4 ">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
        </div>
    );
};


export default Services;