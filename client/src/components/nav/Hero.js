import React, { useState, useEffect } from 'react';
import './header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return <Carousel activeIndex={index} onSelect={handleSelect} className="img" >
    <Carousel.Item className='px-md-5 '>
      <img src='./images/c2s.jpg' className=" d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item className='px-md-5' >
      <img src='./images/c3.jpg' className=" d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item className='px-md-5'>
      <img src='./images/c4.jpg' className="d-block w-100" alt="..." />
    </Carousel.Item>
    <Carousel.Item className='px-md-5'>
      <img src='./images/c1.jpg' className="d-block w-100" alt="..." />
    </Carousel.Item>
  </Carousel>;
};

export default Hero;
