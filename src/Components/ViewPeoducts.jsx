import React from 'react'

import { productListing } from './ProductList';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  import { MDBBtn } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import "../styles/view.css"

const  ViewPeoducts = () => {
  const {id}= useParams()

  const product = productListing.filter((item)=>item.id== id)
  console.log(product[0].image)
  return (
    <div  className='mainDiv'>
        <MDBCard style={{ maxWidth: '540px' }}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage  className='image' src={product[0].image} alt='no image found' fluid />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
          <MDBCardTitle className='head'>{product[0].name}</MDBCardTitle>
          <MDBCardText className='description'>
            {product[0].des}
          </MDBCardText>
          
          <MDBCardText>
            <small className='text-muted'>$  {product[0].rate}</small>
          </MDBCardText>
        </MDBCardBody>
    <MDBBtn>Buy Now</MDBBtn>
      </MDBCol>
    </MDBRow>
  </MDBCard>
  </div>
  )
}

export default ViewPeoducts