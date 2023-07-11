import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {context} from "./Store/Context"



import CustomNavbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import RRegistration from './Components/Registration';
import Home from './Components/Home';
import Footer from './Components/Footer';


function App() {


  const [signin,setsignin]=useState([])


  const state={signin,setsignin}
  

  return (
    <>
    <CustomNavbar/>

    
    <context.Provider  value={state}>

    <Routes>
      <Route path='/'   element={<Home/>}   />
      <Route path='/login' element={<Login/>}      />
      <Route path='/registration' element={<RRegistration/>}      />

    </Routes>
    <Footer/>

    </context.Provider>

      
    </>
  )
}

export default App
