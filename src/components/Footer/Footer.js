import Aos from 'aos';
import React, { useEffect } from 'react';
import './Footer.css'

const Footer = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="footer-container"  data-aos="fade-up"  data-aos-duration="300">
            <div>
                <h4>Quick Links</h4>
            <ul>
                    <a href="#" ><li>Home</li></a>
                    <a href="#"><li>About Us</li></a>
                    <a href="#"><li>Treatments</li></a>
                    <a href="#"><li>Testimonials</li></a>
                    <a href="#"><li>Contact us</li>       </a>
            </ul>
            </div>
            <div>
            <h4>Treatments</h4>
               <ul>
               <a href="#"><li>Endoscopy</li></a>
                <a href="#"><li>Colonscopy</li></a>
                <a href="#"><li>Acid Reflux</li></a>
                <a href="#"><li>Liver Disease</li></a>
               </ul>


            </div>
        </div>
    );
};

export default Footer;