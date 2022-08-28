import React from "react";
import {useParams} from 'react-router-dom'

const ServiceDetail = () =>{
    const {detail} = useParams();
    return(
        <div>
            <h2>welcome to details: {detail}</h2>
        </div>
    );
};

export default ServiceDetail;