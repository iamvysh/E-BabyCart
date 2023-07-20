import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

import { BsTags } from "react-icons/bs";

const Home = () => {
  const navigate = useNavigate();
  const sett = () => {
    navigate("/category");
    console.log("gfhgjh");
  };

  return (


    <div className="conatainer">

    <div className="maindiv">
      <Carousel>
        <Carousel.Item className="c-item">
          <img
            className="d-block w-100 c-img"
            src="https://images.unsplash.com/photo-1608365151231-7dbed3034787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="head">
              {" "}
              <BsTags /> FLAT 30% OFF + CASHBACK! *
            </p>
            <h3 className="mainhead">Baby Essential Fashion & Nursery</h3>
            <p className="content">
              Fermentum, cursus ultrices porttitor tincidunt suscipit quam
              facilisis sit massa pellentesque mi quis elit elementum tristique
              urna. * Enim cras quam et nullam risus nec tincidunt mattis nunc.
            </p>
            <Button onClick={sett} variant="outline-primary" size="lg">
              SHOP NOW
            </Button>{" "}
            <button className="offer">Use code: BEC30</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            className="d-block w-100 c-img"
            src="https://images.unsplash.com/photo-1578668577946-2f84638d344f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p className="head">
              {" "}
              <BsTags /> FLAT 30% OFF + CASHBACK! *
            </p>
            <h3 className="mainhead">Baby Essential Fashion & Nursery</h3>
            <p className="content">
              Fermentum, cursus ultrices porttitor tincidunt suscipit quam
              facilisis sit massa pellentesque mi quis elit elementum tristique
              urna. * Enim cras quam et nullam risus nec tincidunt mattis nunc.
            </p>
            <Button onClick={sett} variant="outline-primary" size="lg">
              SHOP NOW
            </Button>{" "}
            <button className="offer">Use code: BEC30</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-item">
          <img
            className="d-block w-100 c-img"
            src="https://plus.unsplash.com/premium_photo-1661591441762-039ac365783e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p className="head">
              {" "}
              <BsTags /> FLAT 30% OFF + CASHBACK! *
            </p>
            <h3 className="mainhead">Baby Essential Fashion & Nursery</h3>
            <p className="content">
              Fermentum, cursus ultrices porttitor tincidunt suscipit quam
              facilisis sit massa pellentesque mi quis elit elementum tristique
              urna. * Enim cras quam et nullam risus nec tincidunt mattis nunc.
            </p>
            <Button onClick={sett} variant="outline-primary" size="lg">
              SHOP NOW
            </Button>{" "}
            <button className="offer">Use code: BEC30</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
};

export default Home;
