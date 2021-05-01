import React from 'react'
import './Form.css';
const FormSignup = () => {
    return (
        <div className='form-content-right'>
            <form className ='form'>
              <h1>
                Signup
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
          <button classname = 'form-input-btn' type='submit'>
                         Sign up
              </button>
              <span className = 'form-input-login'>
         Do you<a href='/home'>already have an account</a> 
        </span>  
        </form>
      </div>
    )
}

export default FormSignup
