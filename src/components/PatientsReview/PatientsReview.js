import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'

const PatientsReview = () =>{
        const imgUrl = `https://image.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg`;
        useEffect(()=>{
            Aos.init({
                duration:1000,
            })
        },[])
        return (
            <div  data-aos="fade-up">
            <div className="container py-3 my-5" >
             <div className="container my-3" >
                 <h2 data-aos="fade-up-left">Our Patients Reviews</h2>
                 <h6 data-aos="fade-up-right">Read patient reviews and find out what they are saying about us.</h6>
             </div>
             <div className="row my-3" style={{textAlign:"start"}}>
                 <div className="col-sm-12 col-md-6 col-lg-4 container my-3 border rounded" data-aos="fade-up-left">
                     <div data-aos="zoom-in-up"  data-aos-duration="3000">
                     <h4>“I consider myself extremely fortunate to have recommend that it was possible for me to receive the treatment quickly. I now feel great and look forward to living my life normally”</h4>
                     </div>
                     <div className="d-flex my-4"  data-aos="zoom-in-down"  data-aos-duration="3000">
                         <div className="border rounded">
                             <img src="http://jituchauhan.com/site-templates/medical-website-template/02_gastroenterology/images/testimonial-pic-1.jpg" alt="" />
                         </div>
                         <div className="mx-3">
                             <><b>Regina Cruz</b></> 
                             <br />
                             <span className="text-primary">PATIENT</span>
                         </div>
                     </div>
                 </div>
                 <div className="col-sm-12 col-md-6 col-lg-4 container my-3 border rounded" data-aos="fade-up">
                     <div  data-aos="zoom-in-up"  data-aos-duration="3000">
                     <h4>“I need to thank you, most sincerely, for your interest and work on my throat problem. The extent and accuracy that you can achieve truly amaze me, thank you profoundly”</h4>
                     </div>
                     <div className="d-flex my-5"   data-aos="zoom-in-down"  data-aos-duration="3000">
                         <div className="border rounded">
                             <img src="http://jituchauhan.com/site-templates/medical-website-template/02_gastroenterology/images/testimonial-pic-3.jpg" alt="" />
                         </div>
                         <div className="mx-3">
                             <><b>Donna Hany</b></> 
                             <br />
                             <span className="text-primary">PATIENT</span>
                         </div>
                     </div>
                 </div>
                 <div className="col-sm-12 col-md-6 col-lg-4 container my-3 border rounded" data-aos="fade-up-right">
                     <div  data-aos="zoom-in-up"  data-aos-duration="3000">
                     <h4>“With expertise to make a new man out of me. I have a great deal to thank him for and would like to take this opportunity of wishing him family good health and happiness always”</h4>
                     </div>
                     <div className="d-flex my-4"   data-aos="zoom-in-down"  data-aos-duration="3000">
                         <div className="border rounded">
                             <img src="http://jituchauhan.com/site-templates/medical-website-template/02_gastroenterology/images/testimonial-pic.jpg" alt="" />
                         </div>
                         <div className="mx-3">
                             <><b>Karen Diehl</b></> 
                             <br />
                             <span className="text-primary">PATIENT</span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         </div>
        );
};

export default PatientsReview;