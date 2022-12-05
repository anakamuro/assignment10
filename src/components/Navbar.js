import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu
} from './NavbarElements';
import "./styles.css";

const Navbar = () => {
  ;
  return (
    <>
      <Nav className="nav">
        <div className="image-icon">
          <div className="kasa k2"></div>
          <div className="kasa house"></div>
          <div className="kasa s"></div>
          <div className="kasa a"></div>
        </div>

        <NavMenu className="nav-main">
          <NavLink to='/home'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
