import React from 'react';
import './FooterElements.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import logo from '../../images/logo.png'
function Footer(){
    return (
        <div className='footer'>
        <div className="combine">

            <div className="icons">
            <FacebookIcon style={{ fontSize: 60 }}/>
            
            </div>
            <div className="icons">
            <LinkedInIcon style={{ fontSize: 60 }}/>
            </div>
            <div className="icons">
               <InstagramIcon style={{fontSize: 60}}/>
            </div>
        </div>
       
        <div className="combine1">
        <div className="icon1">
                <img src={logo} alt='logo'/>
            </div>
       {/* <img className='navbar_logo' src={logo} alt='logo' />*/}
            <div className="fold">
                <div className="cle">
                    <CallIcon style={{ fontSize: 45 }}/>
                    <h5>+91 91826 87397 </h5>
                </div>
                <div className="cle">
                <LocationOnIcon style={{ fontSize: 45 }}/>
                    <h5>MCIIE, IIT (BHU) VARANASI</h5>
                </div>
                <div className="cle">
                    <EmailIcon style={{ fontSize: 45 }} />
                    <h5>prioritypulse@gmail.com</h5>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Footer;