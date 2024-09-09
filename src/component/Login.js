import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSigninForm,setSinginForm] = useState(true);
    const handleSignInForm = () =>{
        setSinginForm(!isSigninForm);
    }
  return (
    <div className="">
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg'
            alt='Body-img' />
        </div>
        <form className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80 '>
            <h1 className='my-4 text-3xl font-bold'>{isSigninForm?"Sign In":"Sign Up"}</h1>
            {!isSigninForm && <input type='text' placeholder='Enter Full Name' className='p-2 my-3 w-full bg-gray-800' />}
            <input type='text' placeholder='Enter Email' className='p-2 my-3 w-full bg-gray-800' />
            <input type='password' placeholder='Enter password' className='p-2 my-3 w-full bg-gray-800' />
            <button type='Submit' className='my-4 p-3 bg-red-700 w-full rounded-lg'>{isSigninForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={handleSignInForm}>
            {isSigninForm?"New to Netflix? Sign up now":"Already register? Sign in now"}
            
            </p>
        </form>
        
    </div>
  )
}

export default Login;