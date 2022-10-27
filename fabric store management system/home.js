import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/hom2.jpg';
import img2 from './images/home3.jpg';
import img3 from './images/home5.jpg';
import './style.css'
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import Bar from './head.js';

function Home() {
  return (
    <div className='slide'>
      <Bar/>
    <Carousel variant="dark" fade>
      <Carousel.Item interval={1000}>
        <img
          height="570"
          width="1300"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='img1'>White fabrics</h3>
          <Link to='/whitefabric'>
          <Button variant="dark" className="mb-3">More info</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          height="570"
          width="1300"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='img2'>Coloured fabrics</h3>
          <Link to='/colour'>
          <Button variant="dark" className="mb-3">More info</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          height="570"
          width="1300"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='img3'>Printed Fabrics</h3>
          <Link to='/printed'>
          <Button variant="dark" className="mb-3">More info</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home

