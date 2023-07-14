import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {context} from "./Store/Context"

import "./App.css"

import CustomNavbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
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


function App() {


  const [signin,setsignin]=useState([])
  const [search,setsearch]=useState()
  const [cart,setcart]=useState([])
  const [login,setlogin]=useState(false)
  const [register,setregister]=useState([])


  const state={signin,setsignin,search,setsearch,cart,setcart,login,setlogin,register,setregister}
  

  return (
    <div >

    
    <context.Provider  value={state}>

    <CustomNavbar/>
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


    </Routes>
    <Footer/>

    </context.Provider>

      
    </div>
  )
}

export default App
