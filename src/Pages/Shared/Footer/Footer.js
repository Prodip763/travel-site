import React from "react";
import image from '../../../images/logo.png';
import { Icon } from '@iconify/react';


const Footer = () =>{
    const today = new Date();
    const year = today.getFullYear();
    return(
        <footer className="text-center bg-info">
            <h4 style={{textDecoration: 'underline'}} className='text-primary'>Copyright @ {year} Travel site</h4>
            <div className="d-flex justify-content-between gap-4">
                <img className="w-25" src={image}></img>
                <div className="text-start">
                    <p>Contact Us</p>
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Travel App</p>
                    <p>Live travel</p>

                </div>
                <div>
                    <p style={{textDecoration: 'line-through'}} className='text-danger'>Social media link</p>
                    <div>
                    <a href="https://www.facebook.com/mp.prince.98/"><Icon icon="bi:facebook" /></a><br></br>
                    <a href="https://github.com/Prodip763"><Icon icon="akar-icons:github-fill" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;




//         <footer>
//                 <div class="goal">
//                     <h1 class="footer-caption">Goal</h1>
//                 </div>
                
//                 <div className=" flex d-flex">
//                     <span>Contact Us</span>
//                     <span>Terms of Service</span>
//                     <span>Privacy Policy</span>
//                     <span>Privacy Settings</span>
//                     <span>Travel App</span>
//                     <span>Travel Live</span>

//                 </div>

//                 <div class="social-media">

//                     <a href="https://www.facebook.com/uefa" class="social fb"><i class="fa-brands fa-facebook fa-3x" "></i></a>

// <a href=" https://www.youtube.com/channel/UCyGa1YEx9ST66rYrJTGIKOw" class="social youtube"><i
//                                 class="fa-brands fa-youtube fa-3x"></i></i></a>

//                     <a href="https://twitter.com/UEFA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
//                         class="social twitter"><i class="fa-brands fa-twitter fa-3x"></i></i></a>


//                 </div>
//             </footer>