import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slider1 from '../../../images/slider/slider-1.jpg'
import slider2 from '../../../images/slider/slider-2.jpg'
import slider3 from '../../../images/slider/slider-3.jpg'
import './Slider.css'
const Slider = () => {
    return (
        <>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption className="carousel-caption">
      <div className="hidden-mobile">
      <h1>We Are Excellence <br />
      In Gastroenterology 
      </h1>
      <p>A wide quality of diagnostic and therapy gastroenterology services.</p>
      <Link to="/expert">
      <button className="btn-regular">Make an Appointment</button>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption  className="carousel-caption hidden-mobile">
    <div>
      <h1>Expert Specialist In  <br />
      Gastroenterology 
      </h1>
      <p>Our doctors are all renowned specialist in gastrointestinal diseases. </p>
      <Link to="/expert">
      <button className="btn-regular">Make an Appointment</button>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption  className="carousel-caption hidden-mobile">
    <div>
      <h1>Special Care <br />
      For All Disease
      </h1>
      <p>A wide quality service of all health related issues.</p>
      <Link to="/expert">
      <button className="btn-regular">Make an Appointment</button>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Slider;