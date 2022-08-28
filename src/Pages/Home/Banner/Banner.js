import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import sajek from '../../../images/Rectangle 1.png';
import sreemongol from '../../../images/Rectangle 28.png';
import sundorbon from '../../../images/sundorbon1.png'
import {useNavigate} from 'react-router-dom';

const Banner = () => {

    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = () =>{
        navigate('/service/:detail');
    }


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sajek}
                />
                <Carousel.Caption>
                    <h1>Cox's Bazar</h1>
                    <Button onClick={handleSubmit} variant="danger">Add to cart</Button>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={sreemongol}
                />

                <Carousel.Caption>
                <h1>Bandharban</h1>
                    <Button onClick={handleSubmit} variant="danger">Add to cart</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sundorbon}
                />

                <Carousel.Caption>
                <h1>Sajek</h1>
                    <Button onClick={handleSubmit} variant="danger">Add to cart</Button>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};


export default Banner;

