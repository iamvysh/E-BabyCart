import React, { useContext,useRef ,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { productListing } from "./ProductList";
import Button from 'react-bootstrap/Button';
import { context } from '../Store/Context';
import "../styles/admin.css"
import { useNavigate } from 'react-router-dom';
import SidebarBox from './SidebarBox';




const Admin = () => {



  const {allproducts,setallproducts,setadmin}=useContext(context)
  
 
  
  const navigate=useNavigate()

    const handleDeleite=(id)=>{

      const newProducts= allproducts.filter((item)=>(item.id!==id))

       setallproducts(newProducts)

    }



  
  return (
    <>


    <div className='container ' >


    <div className='admin-container ' > 


    <div className='sidebar' >
            <SidebarBox />
          </div>

      
        <div>

          <h5> Hello ,Admin 👋  </h5>


            <div className='container background'>


          <div className='table-container' id='mainconatainer'>

       <Table striped bordered hover  >
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Rate</th>
          
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>

        {allproducts.map((product)=>(

        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td> ${product.rate}</td>
          
          <td>  <img src={product.image} alt="" srcset=""    style={{width:"80%"}}/></td>
          <td> <Button variant="success" style={{ fontSize: '0.8rem', padding: '0.3rem 0.5rem' }} onClick={()=>navigate(`/product/${product.id}`)}>Edit</Button>{' '} 
          </td>
          <td><Button variant="danger" style={{ fontSize: '0.8rem', padding: '0.3rem 0.5rem' }} onClick={()=>handleDeleite(product.id)}>Delete</Button>{' '}</td>
        </tr>
        ))}
       
      </tbody>
    </Table>

          </div>
            </div>


        </div>
      
      
    </div>
    </div>
    </>
  )
}

export default Admin
