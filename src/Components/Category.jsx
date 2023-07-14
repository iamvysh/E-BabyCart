import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import "../styles/category.css";

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className='main'>
      <div className="cardContainer">
        {/* <Card style={{ flex: '1' }}>
          <Card.Img className='image' variant="top" src="./src/Images/category/2dc0d5dfb4fd5eb3a58489e449b24157.jpg" />
          <Button onClick={() => navigate("/cloths")} variant="primary">CLOTHS</Button>
        </Card> */}
        <Card style={{ flex: '1' }}>
          <Card.Img onClick={() => navigate("/cloths")} className='image' variant="top" src="./src/Images/category/2dc0d5dfb4fd5eb3a58489e449b24157.jpg" />
          <div className="cardText" >
            CLOTHS
          </div>
        </Card>
        {/* <Card >
          <Card.Img className='image' variant="top" src="./src/Images/category/51JZ2Z461GL.jpg" />
          <Button onClick={() => navigate("/toys")} variant="primary">TOYS</Button>
        </Card> */}
        <Card style={{ flex: '1' }}>
          <Card.Img onClick={() => navigate("/toys")} className='image' variant="top" src="./src/Images/category/51JZ2Z461GL.jpg" />
          <div className="cardText" >
            TOYS
          </div>
        </Card>
        {/* <Card style={{ flex: '1' }}>
          <Card.Img className='image' variant="top" src="./src/Images/category/formulafeeding101-xl.jpeg" />
          <Button onClick={() => navigate("/nutrition")} variant="primary">NUTRITION</Button>
        </Card>
         */}
          <Card style={{ flex: '1' }}>
          <Card.Img onClick={() => navigate("/nutrition")} className='image' variant="top" src="./src/Images/category/formulafeeding101-xl.jpeg" />
          <div className="cardText" >
            NUTRITION
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Category;
