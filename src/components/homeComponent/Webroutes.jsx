import React from 'react'
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TeacherDashboard from '../dashboardComponents/TeacherDashboard';
import Login from '../../loginSignup/Login';
import SignUp from '../../loginSignup/SignUp';
import ProtectedRouter from '../../zustand/ProtectedRouter';

const Webroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/aboutus' element={<AboutUs />} />
        
        <Route path='/teacherdashboard' element={<ProtectedRouter>
          <TeacherDashboard/> </ProtectedRouter>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Webroutes
