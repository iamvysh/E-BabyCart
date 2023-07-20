import React from "react";
import { productListing } from "./ProductList";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";
import "../styles/toy.css";

const Toys = () => {
  const navigate = useNavigate();

  const toys = productListing.filter((item) => item.category == "Toys");

  console.log(toys);

  return (
    <div className="container  "> 
    
    <div className="row ">
      {toys.map((item) => (
        

          
          <Card
           key={item.id}
            style={{ width: "16rem",marginRight:"30px",marginBottom:"20px" }}
            onClick={() => navigate(`/view/${item.id}`)
            
          }
          className="col-lg-4 col- xs-12  col-md-6 card"
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title className="title">{item.name}</Card.Title>
              <Card.Text>$ {item.rate}</Card.Text>
              <Button variant="primary">View Item</Button>
            </Card.Body>
            </Card>
          
          
        
      ))}
    </div>
    </div>
  );
};

export default Toys;
