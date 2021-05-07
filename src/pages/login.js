import React from 'react'
import Navbar from '../components/Navbar';
import './Form.css';
import Imageslider from './Imageslider';
import Footer from '../components/Footer'
const Login = () => {
    return (
        <div >
             <Navbar location='login' />
             <div className = 'alignmentsign'>
             <div className='form-content-left'>
            <form className ='form'>
              <h1>
                Login
                </h1>
                <div className = 'makemiddle'>
                <span className = 'form-input-log'>
         welcome to priority pulse <a href = '/login'>your pulse our priority</a> 
        </span>
        </div>
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
        
          <div className = 'makemiddle'>
          <div>
          <button  classname = 'button' type='submit'>
                         Login
              </button>
              </div>
              <span className = 'form-input-login'>
         Do you want to <a href='/signup'>create an account ?</a> 
        </span>
        </div>  
        </form>
      </div>
      <div className = 'alignmentslider'>
      <Imageslider/>
      </div>
      </div>
      <Footer/>
        </div>

    )
}

export default Login;