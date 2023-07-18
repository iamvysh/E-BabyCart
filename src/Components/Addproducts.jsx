import React, { useContext,useRef } from 'react'
import SidebarBox from "./SidebarBox";
import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
import { context } from '../Store/Context';

const Addproducts = () => {


const formRef=useRef()
const {allproducts,setallproducts}=useContext(context)

const  handleSubmit=(e)=>{
    e.preventDefault()
    const form = formRef.current;
    const AddProduct = {
        id:  Date.now(),
        name: form.name.value,
        category: form.category.value,
        des: form.description.value,
        deepdes: form.deepDescription.value,
        rate: form.rate.value,
        image: form.image.value,
      };

      setallproducts([...allproducts,{...AddProduct}])
      alert("product added")
      console.log(allproducts);

}



  return (

    <div className='container' style={{display:"flex"}}  onSubmit={handleSubmit}>
      
      <div className="sidebar">
              <SidebarBox/>

        </div>

        <div className='form-main-container'  style={{ maxWidth: '500px', width: '100%', margin: 'auto' }}>
          

          <Form className="form-container"  ref={formRef}  >
            <Form.Group className="mb-3 " >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" />

          <Form.Label>Category</Form.Label>
          <Form.Control type="text"  name="category"  />

          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" />

          <Form.Label>Deep Description</Form.Label>
          <Form.Control type="text" name="deepDescription" />

          <Form.Label>Rate</Form.Label>
          <Form.Control type="text" name="rate" />

          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="image" />
          
        </Form.Group>

      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>



        
      </div>

    </div>
  )
}

export default Addproducts
