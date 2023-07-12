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


function App() {


  const [signin,setsignin]=useState([])


  const state={signin,setsignin}
  

  return (
    <div >
    <CustomNavbar/>

    
    <context.Provider  value={state}>

    <Routes>
      <Route path='/'   element={<Home/>}   />
      <Route path='/login' element={<Login/>}      />
      <Route path='/registration' element={<RRegistration/>}      />
      <Route path='/category'  element={<Category/>} />
      <Route path='/toys' element={<Toys/>}/>
      <Route path='/cloths' element={<Cloths/>} />
      <Route path='/nutrition' element={<Nutrition/>} />
      <Route path='/view/:id' element={<ViewPeoducts/>} />


    </Routes>
    <Footer/>

    </context.Provider>

      
    </div>
  )
}

export default App
