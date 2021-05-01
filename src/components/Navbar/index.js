import React from 'react';
import{Nav,NavLink,Bars,NavMenu} from './NavbarElements';

const Navbar = () => {
    return (
        <>
           <Nav>
              <NavLink to="/">
             <img src={require('../../images/logo.png')} alt = 'logo'/>
               </NavLink>
               <Bars/>
              <NavMenu>
                  <NavLink to="/Home" activestyle>
                      Home
                      </NavLink>
                      <NavLink to="/Requests" activestyle>
                      Requests
                      </NavLink>
                      <NavLink to="/Driver Details" activestyle>
                      Driver Details
                      </NavLink>
                      <NavLink to="/Signup" activestyle>
                      Sign Up
                      </NavLink>
                  </NavMenu>
                 {/* <NavBtn>
                      <NavBtnLink to = "/signin">Sign In</NavBtnLink>
                 </NavBtn> */}
           </Nav> 
        </>
    );
}

export default Navbar;
