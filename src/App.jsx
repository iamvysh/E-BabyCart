import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {context} from "./Store/Context"

import "./App.css"

import CustomNavbar from './Components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import RRegistration from './Components/Registration';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Category from './Components/Category';
import Toys from './Components/Toys';
import Cloths from './Components/Cloths';
import Nutrition from './Components/Nutrition';
import ViewPeoducts from './Components/ViewPeoducts';
import Cart from './Components/Cart';
import Admin from './Components/Admin';
import { productListing } from './Components/ProductList';
import Editproduct from './Components/Editproduct';
import Adminusers from './Components/Adminusers';


function App() {

   const location=useLocation()
  const [signin,setsignin]=useState([])
  const [search,setsearch]=useState()
  const [cart,setcart]=useState([])
  const [login,setlogin]=useState(false)
  const [register,setregister]=useState([])
  const [admin,setadmin]=useState(false)
  const [allproducts,setallproducts]=useState(productListing)


  // useEffect(()=>{
  //   if(location.pathname.includes("admin")){
  //     return setadmin(false)
  //   }
    
  // },[])
  console.log(location);
   

  const state={signin,setsignin,search,setsearch,cart,setcart,login,setlogin,register,setregister,allproducts,setallproducts,admin,setadmin}
  

  return (
    <div >

    
    <context.Provider  value={state}>

     {admin?null:<CustomNavbar/>}
    <Routes>
      <Route path='/'   element={<Home/>}   />
      <Route path='/login' element={<Login/>}      />
      <Route path='/registration' element={<RRegistration/>}      />
      <Route path='/category'  element={<Category/>} />
      <Route path='/toys' element={<Toys/>}/>
      <Route path='/cloths' element={<Cloths/>} />
      <Route path='/nutrition' element={<Nutrition/>} />
      <Route path='/view/:id' element={<ViewPeoducts/>} />
      <Route path='/cart' element={<Cart/>} />


      <Route path='/admin' element={<Admin/>} />
      
      <Route path='product/:id' element={<Editproduct/>} />

      <Route path='/users'  element={<Adminusers/>} />


    </Routes>

    {admin?null:<Footer/>}
    

    </context.Provider>

      
    </div>
  )
}

export default App
