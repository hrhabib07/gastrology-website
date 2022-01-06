import { faCalendarPlus, faCalendarTimes, faClock, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import 'aos/dist/aos.css'

const Service = ({test}) => {
    const {testName, img, testFees, reportDevivery, testId} = test;
    const appID = `/appointment/${testId}`;
  useEffect(()=>{
    Aos.init({
      duration:2000,
      useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
    })
  },[])
    return (
        <div  data-aos="zoom-in-up"
        >
             <Col>
      <Card className="card-container">
        <Card.Img variant="top" src={img} className="card-image" />
        <Card.Body>
          <Card.Title> <h2>{testName}</h2>
          </Card.Title>
          <Card.Text>
            <><b><FontAwesomeIcon className="regular-icon" icon={ faWallet}/> {testFees} BDT</b></>
            <br />
            <><b><FontAwesomeIcon className="time-icon" icon={ faClock}/> {reportDevivery} hrs</b></>
            <br />
            <Link to={appID}>
            <button  className="btn-regular my-3">Show Details <FontAwesomeIcon className="regular-icon" icon={ faCalendarPlus}/> </button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;  