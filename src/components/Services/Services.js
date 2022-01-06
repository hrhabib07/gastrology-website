import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Service from './Service/Service';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
    const {tests} = useData();
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
        easing: 'ease'});
    },[])
    return (
        <div>

            <div className="container">
            <div className="my-3 py-5" data-aos="zoom-in-up">
            <h2>Conditions We Treat</h2>
            <p>We treat every type of digestive disorders.</p>
            </div>
            <div>
            <Row xs={1} md={4} className="g-4">
            {
                    tests?.map(test=><Service key={test.testId} test={test}></Service>)
            }
            </Row>
            </div>
        </div>
        </div>
    );
};

export default Services;