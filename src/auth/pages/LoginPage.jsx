import {useNavigate } from 'react-router-dom';

import React from 'react'

export const LoginPage = () => {

const navigate = useNavigate()
const onLogin = () =>{
  navigate("/dc", {
    replace: true
  })
}

  return (
   <div className='container mt-5'>
    <h1>Login</h1>
    <hr />
    <button 
        className='btn btn-primary'
        onClick={onLogin}
        >
      Login
    </button>
   </div>
  )
}


