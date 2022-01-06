import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const handleGoBack = () =>{
        history.push('/')
    }
    return (
        <div>
            <img src="https://image.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1927.jpg" alt="" />
            <br />
            <br />
            <button className="btn-regular" onClick={handleGoBack}>Go Back</button>
            <br />
            <br />
        </div>
    );
};

export default NotFound;