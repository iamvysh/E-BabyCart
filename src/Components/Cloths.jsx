import React from 'react'
import {productListing}  from "./ProductList"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/cloths.css"
import { useNavigate } from 'react-router-dom';



const Cloths = () => {

    const cloths=productListing.filter((item)=>item.category=="cloths")

    

    const navigate=useNavigate()


  return (

    <div className='gridContainer'>

    {cloths.map((item)=>(

    <div key={item.id} >
         <Card style={{ width: '18rem'}}   onClick={()=>navigate(`/view/${item.id}`)}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className='title'>{item.name}</Card.Title>
        <Card.Text>
          $ {item.rate}
        </Card.Text>
        <Button variant="primary">View Item</Button>
      </Card.Body>
    </Card>
    </div>
    ))}






    </div>

  )
}

export default Cloths