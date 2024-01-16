import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login';

const PrivateRoute = ({children}) => {
    const state = useSelector((state)=>state.isLoggedIn);
  return (
    <div>
        {state?children:<Login/>}
    </div>
  )
}

export default PrivateRoute