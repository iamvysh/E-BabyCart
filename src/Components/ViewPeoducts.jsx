import React, { useContext } from "react";

import { productListing } from "./ProductList";

import Card from "react-bootstrap/Card";

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import { useNavigate, useParams } from "react-router-dom";
import "../styles/view.css";
import Button from "react-bootstrap/Button";
import { context } from "../Store/Context";

const ViewPeoducts = () => {
  const { id } = useParams();

  const { cart, setcart, login } = useContext(context);

  const navigate = useNavigate();

  const product = productListing.filter((item) => item.id == id);

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

    const productss = cart.filter((item) => item.id == id);

    if (login == true) {
      if (productss.length == 0) {
        setcart([...cart, aditem]);
        navigate("/cart");
      } else {
        return alert("item already in cart");
      }
    } else {
      alert("please login first");
    }

    console.log("cart items", cart);
  };

  return (
    <>
      <div>
        <MDBCard style={{ maxWidth: "540px" }} className="mainDiv">
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                className="image"
                src={product[0].image}
                alt="no image found"
                fluid
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle className="head">{product[0].name}</MDBCardTitle>
                <MDBCardText className="description">
                  {product[0].des}
                </MDBCardText>

                <MDBCardText>
                  <small className="text-muted">$ {product[0].rate}</small>
                </MDBCardText>
              </MDBCardBody>
              <Button variant="primary" onClick={handleCart}>
                Add To Cart
              </Button>
              {console.log(cart)}
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>

      <h1 className="head2">Similer products</h1>


      <div className="container  "> 
    
    <div className="row ">
      {productListing
          .filter(
            (item) =>
              item.category == product[0].category && item.id !== product[0].id
          ).map((item) => (
        

          
          <Card
           key={item.id}
            style={{ width: "16rem",marginRight:"30px",marginBottom:"20px" }}
            
          className="col-lg-4 col- xs-12  col-md-6 card"
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title className="title">{item.name}</Card.Title>
              <Card.Text>$ {item.rate}</Card.Text>
              <Button variant="primary" onClick={() => navigate(`/view/${item.id}`)
            
          }>View Item</Button>
            </Card.Body>
            </Card>
          
          
        
      ))}
    </div>
    </div>






      {/* <div className="gridContainer">
        {productListing
          .filter(
            (item) =>
              item.category == product[0].category && item.id !== product[0].id
          )
          .map((item) => (
            <Card key={item.id} style={{ width: "18rem" }} className="className="col-lg-4 col- xs-12  col-md-6 card">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "7rem" }}
              />
              <Card.Body style={{ marginTop: "2rem" }}>
                <Card.Title>{item.name}</Card.Title>

                <Button
                  variant="primary"
                  onClick={() => navigate(`/view/${item.id}`)}
                >
                  View Item
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div> */}
    </>
  );
};

export default ViewPeoducts;
