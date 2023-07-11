import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import "../styles/home.css"

import {BsTags} from "react-icons/bs"


const Home = () => {



  return (



    <div>

<Carousel>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="./src/Images/Carousel/alex-pasarelu-S8BW-Wx9G8I-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <p className='head'> <BsTags/> FLAT 30% OFF + CASHBACK! *</p>
          <h3 className='mainhead'>Baby Essential Fashion & Nursery</h3>
          <p className='content'>Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa pellentesque mi quis elit elementum tristique urna.

          * Enim cras quam et nullam risus nec tincidunt mattis nunc.</p>
          <Button variant="outline-primary" size="lg">
          
          SHOP NOW
        </Button>{' '}

        <button className='offer'>Use code: BEC30</button>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="./src/Images/Carousel/jimmy-conover-kCMKAEVTdkM-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <p className='head'> <BsTags/> FLAT 30% OFF + CASHBACK! *</p>
          <h3 className='mainhead'>Baby Essential Fashion & Nursery</h3>
          <p className='content'>Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa pellentesque mi quis elit elementum tristique urna.

          * Enim cras quam et nullam risus nec tincidunt mattis nunc.</p>
          <Button variant="outline-primary" size="lg">
          
          SHOP NOW
        </Button>{' '}

        <button className='offer'>Use code: BEC30</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="./src/Images/Carousel/adele-morris-mDiFpFl_jTs-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <p className='head'> <BsTags/> FLAT 30% OFF + CASHBACK! *</p>
          <h3 className='mainhead'>Baby Essential Fashion & Nursery</h3>
          <p className='content'>Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa pellentesque mi quis elit elementum tristique urna.

          * Enim cras quam et nullam risus nec tincidunt mattis nunc.</p>
          <Button variant="outline-primary" size="lg">
          
          SHOP NOW
        </Button>{' '}

        <button className='offer'>Use code: BEC30</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




    </div>
  )
}

export default Home