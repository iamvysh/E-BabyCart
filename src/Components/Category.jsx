import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import "../styles/category.css"



const Category = () => {
  const navigate =useNavigate()



  return (

    <div className='main'>


             <Card  style={{ width: '12rem' }}>
      <Card.Img className='image' variant="top" src="./src/Images/category/2dc0d5dfb4fd5eb3a58489e449b24157.jpg" />
      <Button   onClick={()=>navigate("/cloths")} variant="primary">CLOTHS</Button>

      
    </Card>
       
              
             <Card   style={{ width: '18rem' }}>
                
      <Card.Img       className='image' variant="top" src="./src/Images/category/51JZ2Z461GL.jpg" />
      <Button  onClick={()=>navigate("/toys")} variant="primary">TOYS</Button>
      
      
    </Card>

             <Card style={{ width: '18rem' }}>
      <Card.Img   className='image' variant="top" src="./src/Images/category/formulafeeding101-xl.jpeg" />
      <Button   onClick={()=>navigate("/nutrition")} variant="primary">NUTRITIOIN</Button>
      
      
    </Card>

    


          




    </div>
  )
}

export default Category