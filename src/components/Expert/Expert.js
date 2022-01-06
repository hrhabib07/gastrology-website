import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'


const Expert = () => {
    const imgUrl = `https://image.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg`;
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="doctor-section-container"  data-aos="zoom-in-up"  data-aos-duration="500">
           <div className="container py-3">
            <div className="container my-3" >
                <h2 data-aos="fade-up-left"  data-aos-duration="500">Welcome to Gastroenterology Clinic</h2>
                <h6 data-aos="fade-up-right"  data-aos-duration="500">We can arrange procedures such as endoscopies, colonoscopies, and gastrointestinal treatments at some of the top hospitals in the india. Wherever you are being treated, we aim to make your visit as simple and convenient as we can.</h6>
            </div>
            <div className="row my-3">
                <div className="col-sm-12 col-md-6 col-lg-6  container my-auto py-5 doctor-details" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                    <div>
                        <h2>Dr. Edward Johnston</h2>
                        <h6>Professor, Department of Gastroenterology</h6>
                        <p><b>Email </b>: kabiranwarmd@gmail.com</p>
                    </div>
                    <hr />
                    <div className="container w-100 my-auto">
                        <p><b>SPECIALIST IN : </b>
                        Dr. Edward specializes in <b>colon cancer screening, liver disease,and all gastrointestinal disorders,</b> including <b>reflux disease,</b> and provides a wide variety of non-invasive treatments.</p>
                        <hr />
                        <h3>Biography</h3>
                        <br />
                        <p>
                        Dr. Edward Johnstan, a doctor and graduate of Central High School, graduated from the University of Suspendisse in 4 years before attending Fusceunisi University School of Medicine. Dr. Edward then completed his Internal Medicine Residency and Gastroenterology Fellowship at the digestive health care.
                        Dr. Edward specializes in colon cancer screening, liver disease, and all gastrointestinal disorders, including reflux disease, irritable bowel syndrome, and Celiac Sprue, and provides a wide variety of non-invasive treatments.
                        </p>
                        <button className="btn-regular my-3">Get a Schedule <FontAwesomeIcon className="regular-icon" icon={ faCalendarPlus}/> </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6   col-lg-6  container my-3" data-aos="fade-right     "
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                    <img src={imgUrl} className="w-75 doctor-profile" alt=""  />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Expert;