import React from "react";
import prodip from '../../images/prodip.jpg';


const About = () =>{
    return(
        <div>
            <h2 className="text-center text-2xl text-danger mt-5">About me</h2>
            <div>
                <img style={{textAlign: 'center', display: 'block', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: '50%'}} src={prodip}></img>
                <h4 className="text-center mt-2 text-primary">Prodip Das</h4>
                <p className="text-center mt-2 text-dark"><small>I'm a simple person. I'm always walk's in my mind. I am a Full-Stack developer. When i'm completing my study then i will apply in remote job. That's it nothing, then i will apply higher study in Europe country. In this time, i will completed my intern.</small></p>
            </div>
        </div>
    );
};


export default About;