import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu
} from './NavbarElements';
import "./styles.css";

const Navbar = () => {;
  return (
    <>
      <Nav className="nav">
        <div className="image-icon">
          <img className="k2 kasa" src="VectorK.png" alt="k"></img>
          <img className="kasa" src="Vectorhouse.png" alt="house"></img>
          <img className="kasa" src="Vectors.png" alt="s"></img>
          <img className="kasa"src="Vectora.png" alt="a"></img>
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
