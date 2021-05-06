import React,{ useState } from 'react';
//import{Nav,NavLink,Bars,NavMenu} from './NavbarElements';
import './NavbarElements.css';
import logo from '../../images/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

function Navbar({location}) {
    const [icons, seticons] = useState(false)
    const [classna, setclassna] = useState('slider')
    return (
        <div className='navbar'>
            <img className='navbar_logo' src={logo} alt='logo' />
            <div className='menu-toggle' onClick={()=>{
                var bola = !icons
                seticons(!icons)
                if(bola===false){
                    setclassna('mid')
                    setTimeout(() => {
                        setclassna(bola ? 'active' : 'slider')
                    }, 1000)
                }else{
                    setclassna(bola ? 'active' : 'slider')
                }
                }}>
                {!icons ?
                    <MenuIcon style={{fontSize:'30px',color:'white'}} /> :
                    <ClearIcon style={{fontSize:'30px',color:'white'}} />
                }
            </div>
            <nav className={classna}>
                
                <a href='/home'>Home</a>
                <a href='/requests'>Requests</a>
                <a href='/driverdetails'>DriverDetails</a>
                <a href='/signup'>Signup</a>
               <a href='/login'>Login</a>
                {location==='home' && <div className="animation start-home" />}
                {location==='requests' && <div className="animation start-requests" />}
                {location==='driverdetails' && <div className="animation start-driverdetails" />}
                {location==='signup' && <div className="animation start-signup" />}
               {location=== 'login' && <div className="animation start-login" />}
            </nav>
            <div className='clearfix'></div>
        </div>
    )
}

export default Navbar;


