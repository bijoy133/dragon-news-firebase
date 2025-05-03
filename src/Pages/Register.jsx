import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {createUser,setUser, updateUser}=use(AuthContext)
  const [nameError, setNameError]= useState("")
  const navigate= useNavigate();

     const handleRegister=(e)=>{
     
      e.preventDefault();
      const form = e.target;
      const name = e.target.name.value;
      if(name.length< 5){
        setNameError("Name should be more then 5 character")
        return;
      }
      else{
        setNameError("")
      }
      const photo= e.target.photo.value;
      const email= e.target.email.value;
      const password= e.target.password.value;
      // console.log(form,name,photo,email,password)
      createUser(email,password)
      .then((result)=>{
        const user = result.user;
        // console.log(user)
        updateUser({disPlayName: name, photoURL:photo})
        .then(()=>{
          setUser({...user,disPlayName: name, photoURL:photo})
          navigate("/")
        })
        .catch((error)=>{
          console.log(error)
          setUser(user)
        })
        
      })
      .catch(error=>{
        // const errorCode = error.code;
        const errorMessege = error.message;
       alert(errorMessege)
      })

     }
    

    return (
        <div className='flex justify-center min-h-screen items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
           <h2 className='font-semibold text-2xl text-center mt-2'>Register your account</h2>
         <div className="card-body">
  


           <form onSubmit={handleRegister} className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input 
            name='name'
             type="text"
              className="input"
               placeholder="Name"
               required/>
               {nameError && <p className='text-xs text-error'>{nameError}</p>}
            {/* url */}
            <label className="label">Photo Url</label>
            <input
             name='photo'
              type="text"
               className="input" 
               placeholder="Photo url"
               required />
            {/* email */}
             <label className="label">Email</label>
             <input 
             name='email'
              type="email"
               className="input" 
               placeholder="Email" 
               required/>

             {/* password */}
             <label className="label">Password</label>
             <input 
             name='password'
              type="password" 
              className="input" 
              placeholder="Password"
              required />
           
            
             <button type='submit' className="btn btn-neutral mt-4">Login</button>
             <p className='font -semibold text-center py-5'>Already Have An Account ?<Link className='text-secondary ' to='/auth/login'>Login</Link></p>
           </form>
         </div>
       </div>
           </div>
    );
};

export default Register;