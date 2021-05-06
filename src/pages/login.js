import React from 'react'
import Navbar from '../components/Navbar';
import './Form.css';
import Imageslider from './Imageslider';
const Login = () => {
    return (
        <div >
             <Navbar location='login' />
             <div className = 'alignmentsign'>
             <div className='form-content-right'>
            <form className ='form'>
              <h1>
                Login
                </h1>
          <div className='form-inputs'>
            <label htmlFor='email' className='form-label'></label>
            <input
            id='email'
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
            />
          </div>
         
          <div className='form-inputs'>
            <label htmlFor='password' className='form-label'></label>
            <input
            id='password'
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
         
            />
          
          </div>
          <div className='form-inputs'>
            <label htmlFor='password2' className='form-label'></label>
            <input
            id='password2'
              className='form-input'
              type='password'
              name='password2'
              placeholder='ConfirmPassword' 
       />
            
          </div>
          <div className='form-inputs'>
            <label htmlFor='uniquecode' className='form-label'></label>
            <input
            id='uniquecode'
              className='form-input'
              type='text'
              name='uniquecode'
              placeholder='Unique Code' 
           />
            
          </div>
          <div className = 'makemiddle'>
          <div>
          <button  classname = 'button' type='submit'>
                         Sign up
              </button>
              </div>
              <span className = 'form-input-login'>
         Do you   <a href='/login'>already have an account</a> 
        </span>
        </div>  
        </form>
      </div>
      <div className = 'alignmentslider'>
      <Imageslider/>
      </div>
      </div>
        </div>

    )
}

export default Login;