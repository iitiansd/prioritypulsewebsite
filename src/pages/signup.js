import React from 'react'
import FormSignup from './FormSignup';
import Imageslider from './Imageslider';
import './Form.css';
import Navbar from '../components/Navbar';
import { FooterContainer } from '../containers/footer'
//style={{display:'flex',justifyContent:'center',alignItems:'center',height:'50vh',border:'1px black solid'}}
const Signup = () => {
    return (
        <div>
               <Navbar location='driverdetails' />
               <div className='alignmentsign'>
            <FormSignup/>
            <div className = 'alignmentslider'>
            <Imageslider/>
            </div>
            </div>
           <FooterContainer/>
          
        </div>
    )
}

export default Signup;