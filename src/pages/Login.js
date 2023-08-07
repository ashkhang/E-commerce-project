import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import { useState } from 'react'
import axios from 'axios'
function Login() {
  const[values, setValues]= useState({
    email: '',
    password: '',
  })
const navigate= useNavigate();


  const [errors, setErrors]= useState({})
const handleInput=(event)=>{
  setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
}
const handleSubmit=(event) =>{
  event.preventDefault();
  setErrors(Validation (values));
  if(errors.email==="" && errors.password===""){
    axios.post('http://localhost:8081/login',values)
    .then(res=> {
        if (res.data ==="Success"){
          navigate('/');
        }else{
          alert ("No record existed");
        }
    })
    .catch(err=> console.log(err));
  }
}

  return (
    <div className='d-flex justify-content-center align-item-center bd-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
      <h2>Log-in</h2>
   <form action=''onSubmit={handleSubmit}>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label"><strong>Email address</strong></label>
     <input type="email" placeholder='Enter your email'name='email' onChange={handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    {errors.email && <span className='text-danger'>{errors.email}</span>}
   </div>
   <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label"><strong>Password</strong></label>
     <input type="password" placeholder='Enter your password' name='password' onChange={handleInput} class="form-control" id="exampleInputPassword1"/>
     {errors.password && <span className='text-danger'>{errors.password}</span>}
   </div>
   <div class="mb-3 form-check">
     {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
     <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
   </div>
   {/* <button type="submit" class="btn btn-primary">Submit</button> */}
   <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
     <p><h4>You are agree to our terms and policies</h4></p>
   <Link to="/signup" className='btn btn-default w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
 </form>
        
      </div>
    </div>
  )
}


export default Login
