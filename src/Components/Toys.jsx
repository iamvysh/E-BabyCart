import React from 'react'
import {productListing}  from "./ProductList"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 import { useNavigate } from 'react-router-dom';
import "../styles/toy.css"


const Toys = () => {

  const navigate = useNavigate()

    const toys=productListing.filter((item)=>item.category=="Toys")

    console.log(toys);


  return (

    <div className='gridContainer '>

    {toys.map((item)=>(

    <div key={item.id} >
         <Card style={{ width: '18rem'}} onClick={()=>navigate(`/view/${item.id}`)} >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className='title'>{item.name}</Card.Title>
        <Card.Text>
          $ {item.rate}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
    ))}






    </div>

  )
}

export default Toys