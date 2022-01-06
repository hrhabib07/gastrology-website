import React from 'react';
import Doctor from '../Doctor/Doctor';
import Slider from '../Header/Slider/Slider';
import PatientsReview from '../PatientsReview/PatientsReview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Services></Services>
            <Doctor></Doctor>
            <PatientsReview></PatientsReview>
        </>
    );
};

export default Home;