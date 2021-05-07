import React from 'react'
import Navbar from '../components/Navbar';
import './Home.css';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div >
             <Navbar location='home' />
             <div>
            <div className="container2">
                <div className="container">
                    <div className="box" >
                        <span className = 'form-input-log'>
                        K Sudeep Kumar
                        </span>
                    </div>
                    <div className="box" >
                    <span className = 'form-input-log'>
                        K Sudeep Kumar
                        </span>
                    </div>
                    <div className="box">
                    <span className = 'form-input-log'>
                        K Sudeep Kumar
                        </span>
                    </div>
                    <div className="box" >
                    <span className = 'form-input-log'>
                        K Sudeep Kumar
                        </span>
                    </div>
                    <div className="box" >
                    <span className = 'form-input-log'>
                        K Sudeep Kumar
                        </span>
                    </div>
                </div>
                <div className="container1">
                <span className = 'form-input-log'>
                        K Sudeep Kumar
                        </span>
                </div>
            </div>
            <div className="container3">
                <div className="cont-1">
                    <span className = 'form-input'>
                    Driver & Hospital Details:
                        </span>
                    <div className="hosp-1">
                    <span className = 'form-input1'>
                   Sudeep Kumar
                   <span className = 'form-input'>
                   call:+91 9505445002
                        </span>
                        </span>
                      
                        <div className="name-2">
                        <span className = 'form-input-log1'>
                        K Sudeep Kumar
                        </span>
                        <br/>
                        <span className = 'form-input-log1'>
                       0866 2472209 contact@pp.co.in 
                        </span>
                        <br/>
                        <span className = 'form-input-log1'>
                       Near Spencers super market
                        </span>
                        </div>
                    </div>
                </div>
                <div className="cont-2">
                    <div className="hosp-1">
                    <span className = 'form-input'>
                    Patient Details:
                        </span>
                        <span className = 'form-input3'>
                    Priority Level:5
                        </span>
                     {  /* <span className = 'form-track'>
                           
                            </span>*/}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Home