import React from 'react'
import { Navigate } from 'react-router'


const ProtectRoute = ({children, redirecTo="/"}) => {

    
    if(localStorage.getItem("logEmail") && localStorage.getItem("logPassword")){

        return  children //<STARSHIPS/>
    }
    
        return  <Navigate to={redirecTo}></Navigate>
  
   
  
}

export default ProtectRoute