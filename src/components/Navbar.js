import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
import "./styles.css";
  
const Navbar = () => {
  return (
    <>
      <Nav>
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;

