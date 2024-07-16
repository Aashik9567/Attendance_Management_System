import React from 'react'
import Login from '../loginSignup/Login';
import SignUp from '../loginSignup/SignUp';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const Webroutes = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>

       </Routes>
    </BrowserRouter>
  )
}

export default Webroutes
