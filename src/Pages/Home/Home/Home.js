import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import backimage from '../../../images/Rectangle 1.png';


const Home = () =>{
    return(
        <div className="home">
            
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};


export default Home;