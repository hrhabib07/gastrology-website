import {  faPhoneVolume, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from "../../../images/logo.png"
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="banner-bg">
            <div className="container top-banner-container">
            <div >
                <img src={img} alt="" />
            </div>
            <div style={{display:'flex'}}>
            <div className="mx-3">
                <h2>
                <FontAwesomeIcon icon={faPhoneVolume} /> 
                    <span style={{display:'inline'}}>+1234567</span></h2>
            
                <small>For a Consultation Call</small>
            </div>
            <div className="hidden-mobile">
            <h2>
                <FontAwesomeIcon icon={faSearchLocation} />
                Our Clinic</h2>
                <small>SubhaniGath,
                     Sylhet, Bangladesh.</small>
            </div>
            </div>
        </div>
        </div>
    );
};

export default TopBanner;