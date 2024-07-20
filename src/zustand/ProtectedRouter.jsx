import React from 'react'
import store from './loginStore'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({children}) => {
const {isLogin} = store(state=>state)
  if(!isLogin){
    return(
        <Navigate to="/login"/>
    )
  }
  return children
}

export default ProtectedRouter
