import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Doctor.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
const Doctor = () => {
    const imgUrl = `https://image.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg`;
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[])
    return (
        <div className="doctor-section-container" data-aos="fade-up">
           <div className="container py-3 my-5">
            <div className="container my-3" data-aos="fade-out">
                <h2>Welcome to Gastroenterology Clinic</h2>
                <h6>We can arrange procedures such as endoscopies, colonoscopies, and gastrointestinal treatments at some of the top hospitals in the india. Wherever you are being treated, we aim to make your visit as simple and convenient as we can.</h6>
            </div>
            <div className="row my-3">
                <div className="col-sm-12 col-md-6   col-lg-6  container my-3"  data-aos="fade-up-right">
                    <img src={imgUrl} className="w-75 doctor-profile" alt=""  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6  container my-auto py-5 doctor-details"  data-aos="fade-up-left">
                    <div>
                        <h2>Dr. Edward Johnston</h2>
                        <h5>GASTROENTEROLOGY & BIOPHOTONICS</h5>
                    </div>
                    <hr />
                    <div className="container w-100 my-auto mx-auto">
                        <h6>Edward Johnston was won a prestigious research award to take intercalated degree in which he was awarded 1st Class Honours.</h6>
                        <p>
                        He is expertise in Heartburn, indigestion and acid reflux & treatment of patients with oesophageal strictures and Achalasia.Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well being.
                        </p>
                        <Link to="/expert">
                        <button className="btn-regular">View Profile <FontAwesomeIcon  icon={ faUserMd}/></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Doctor;