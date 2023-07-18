  import React, { useRef } from 'react'
  import { useContext } from 'react';
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import { useNavigate, useParams } from 'react-router-dom';
  import { context } from '../Store/Context';
  import "../styles/editproduct.css"

  const Editproduct = () => {


      const {id}=useParams()
      const formRef=useRef()
      const navigate=useNavigate()

      const {allproducts,setallproducts}=useContext(context)

      const product=allproducts.filter((item)=>item.id==id)
      console.log(product);

      const updateProduct = (updatedProduct) => {
        const updatedProducts = allproducts.map((item) => {
          if (item.id ==id) {
            return updatedProduct;
          }
          return item;
        });
        
        setallproducts(updatedProducts);
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;
        const updatedProduct = {
          id,
          name: form.name.value,
          category: form.category.value,
          des: form.description.value,
          deepdes: form.deepDescription.value,
          rate: form.rate.value,
          image: form.image.value,
        };
        updateProduct(updatedProduct);

        navigate("/admin")

 
        
      };

      







    return (
      <div className='container'>
          

          <Form className="form-container"  ref={formRef} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-5" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" defaultValue={product[0].name}/>

          <Form.Label>Category</Form.Label>
          <Form.Control type="text"  name="category"  defaultValue={product[0].category}/>

          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" defaultValue={product[0].des}/>

          <Form.Label>Deep Description</Form.Label>
          <Form.Control type="text" name="deepDescription" defaultValue={product[0].deepdes}/>

          <Form.Label>Rate</Form.Label>
          <Form.Control type="text" name="rate" defaultValue={product[0].rate}/>

          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="image" defaultValue={product[0].image}/>
          
        </Form.Group>

      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>



        
      </div>
    )
  }

  export default Editproduct
