import React from 'react'
import Login from '../loginSignup/Login';
import SignUp from '../loginSignup/SignUp';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
const Webroutes = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default Webroutes
