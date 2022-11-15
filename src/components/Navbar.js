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
      <Nav className="nav">
      <div className="image-icon">
    <img src="VectorK.png" alt="k"></img>
    <img src="Vectorhouse.png" alt="house"></img>
    <img src="Vectors.png" alt="s"></img>
    <img src="Vectora.png" alt="a"></img>
     </div>
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;

