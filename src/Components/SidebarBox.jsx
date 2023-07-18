import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/sidebarbx.css';
import { BsListStars } from 'react-icons/bs';
import { IoIosAdd } from "react-icons/io";

import { context } from "../Store/Context";

import { FaAddressCard } from "react-icons/fa";
import Button from 'react-bootstrap/Button';


const SidebarBox = () => {


  const {admin,setadmin}=useContext(context)

    

 const navigate=useNavigate()
  

  const handlelogout=()=>{
    setadmin(false)
    navigate("/login")
  }
  




  return (
    <div className="sidebar">
      <h2 className='text-white'>Admin </h2>


      {/* <ul>
        <li>
          <Link to="/admin">Products</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
        {/* Add more sidebar links as needed */}
      {/* </ul> */} 


            <div className='he'> 



            <BsListStars/>  <span className="  text-white   lists " style={{marginLeft:"20px"}} onClick={()=>navigate("/admin")}>Products</span>   <br /><br />

            <FaAddressCard   style={{marginRight:"50px"}}/>     <span className="  text-white   lists "  onClick={()=>navigate("/users")}>Users</span>   <br /><br />


            <IoIosAdd  style={{marginRight:"5px" ,marginLeft:"10px"}} />    <span className="  text-white   lists "  onClick={()=>navigate("/addproducts")}>Add Products</span>   <br /><br />
            
            <Button variant="success" style={{ fontSize: '0.8rem', padding: '0.3rem 0.5rem' }}   onClick={handlelogout}>Logout</Button>{' '}

              
        
            </div>


    </div>
  );
};

export default SidebarBox;
