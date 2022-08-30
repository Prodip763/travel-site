import React from "react";
import {Link, useParams} from 'react-router-dom'

const ServiceDetail = () =>{
    const {detail} = useParams();
    return(
        <div>
            <h2>welcome to details: {detail}</h2>
            <div className="text-center">
                <Link to='/checkout'>
                    <button className="btn btn-danger">Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;