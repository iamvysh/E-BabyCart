import React, { useContext } from 'react'
import Alert from 'react-bootstrap/Alert';

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
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/view.css"
import Button from "react-bootstrap/Button";
import { context } from '../Store/Context';

const  ViewPeoducts = () => {
  const {id}= useParams()

  const {cart,setcart}=useContext(context)

  const navigate=useNavigate()



  const product = productListing.filter((item)=>item.id== id)
  



  const handleCart = () => {
    const [aditem] = product;
  
    // Check if the product is already in the cart
    // const isProductInCart = cart.some((item) => item.id === product.id);

    // // some method is used to check if there is any item in the cart array with a matching id to the product.id. If a match is found, the isProductInCart variable will be true
  
    // if (isProductInCart) {
    //   // Product already in cart, show alert
    //   alert("Product already in cart");
    //   return null
    // } else {
    //   // Product not in cart, add it to the cart
    //   setcart([...cart, aditem]);
    //   navigate("/cart");
    // }

    const productss=cart.filter((item)=>item.id==id)

    if(productss.length==0){
      setcart([...cart, aditem]);
      navigate("/cart");

    }else{
      return (
        alert("item already in cart")
      );
    }



  
    console.log("cart items", cart);
  
  };
  
  return (
  <>
  
  
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
          <Button variant='primary'  onClick={handleCart}>Add To Cart</Button>
          {console.log(cart)}
      </MDBCol>
    </MDBRow>
  </MDBCard>
  </div>
  </>
  )
}

export default ViewPeoducts