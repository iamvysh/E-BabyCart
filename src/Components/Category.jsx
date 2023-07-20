import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../styles/category.css";

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="cardContainer">
        {/* <Card style={{ flex: '1' }}>
          <Card.Img className='image' variant="top" src="./src/Images/category/2dc0d5dfb4fd5eb3a58489e449b24157.jpg" />
          <Button onClick={() => navigate("/cloths")} variant="primary">CLOTHS</Button>
        </Card> */}
        <Card style={{ flex: "1" }}>
          <Card.Img
            onClick={() => navigate("/cloths")}
            className="image"
            variant="top"
            src="https://images.unsplash.com/photo-1505679208891-9ab12ee61dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <div className="cardText">CLOTHS</div>
        </Card>
        {/* <Card >
          <Card.Img className='image' variant="top" src="./src/Images/category/51JZ2Z461GL.jpg" />
          <Button onClick={() => navigate("/toys")} variant="primary">TOYS</Button>
        </Card> */}
        <Card style={{ flex: "1" }}>
          <Card.Img
            onClick={() => navigate("/toys")}
            className="image"
            variant="top"
            src="https://images.unsplash.com/photo-1547999926-9e384876b19c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJhYnklMjB0b3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          />
          <div className="cardText">TOYS</div>
        </Card>
        {/* <Card style={{ flex: '1' }}>
          <Card.Img className='image' variant="top" src="./src/Images/category/formulafeeding101-xl.jpeg" />
          <Button onClick={() => navigate("/nutrition")} variant="primary">NUTRITION</Button>
        </Card>
         */}
        <Card style={{ flex: "1" }}>
          <Card.Img
            onClick={() => navigate("/nutrition")}
            className="image"
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1683141134463-fc4b4c027282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGZvb2RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          />
          <div className="cardText">NUTRITION</div>
        </Card>
      </div>
    </div>
  );
};

export default Category;
