import React from 'react';
import { useHistory } from 'react-router';

const AppointmentInfo = () => {
    const history = useHistory();
    const handleGoBack = () =>{
        history.push('/')
    }
    return (
        <div className="container text-danger w-75 my-5 mx-auto">
            <h2>This page will show you individual test details. <br /> 
            Please select the test from homepage which you wanna show</h2>
            <br />
            <button className="btn-regular" onClick={handleGoBack}>Go Back</button>
        </div>
        
    );
};

export default AppointmentInfo;