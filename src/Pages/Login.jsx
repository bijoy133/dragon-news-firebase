import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {

  const [error,setError]= useState("");
  const {signIn}= use(AuthContext)
  const location= useLocation();
  const navigate = useNavigate();
  // console.log(location)
  
  const handleLogin=(e)=>{
    e.preventDefault();
    // const form = e.target
    const email = e.target.email.value;
    const password= e.target.password.value;
    // console.log({email,password})
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      // console.log(user)
      navigate(`${location.state?location.state: "/"}`)

    })
    .catch((error)=>{
      const errorCode =error.code;
      // const errorMessege= error.message;
      setError(errorCode)
      // alert(errorCode,errorMessege)
    })
  
    
  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center mt-2'>Login your account</h2>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
           name='email' 
           type="email" 
           className="input" 
           placeholder="Email" 
           required/>
          <label className="label">Password</label>
          {/* password */}
          <input 
          name='password'
           type="password" 
          className="input"
           placeholder="Password"
           required />
          <div><a className="link link-hover">Forgot password?</a></div>
            {
              error && <p className='text-red-400 text-xs'>{error}</p>
            }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font -semibold text-center py-5'>Dont’t Have An Account ?<Link className='text-secondary ' to='/auth/register'>Register</Link></p>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;