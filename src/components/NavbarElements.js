import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  color: #FF6060;
  z-index: 12;
 padding-top: 100px;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #FF6060;
  font-size: 1.5rem;
  
  margin-left: 7vw;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  @media screen and (max-width: 768px) {
   margin-left: 1vw;
   font-size: 1.125rem;
   margin-top: 5%;
   position: relative;
   top: 1%;
  }
`;



export const NavMenu = styled.div`

  display: flex;
  align-items: center;
  /*
  margin-right: -24px;
  Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
`;

export const NavBtn = styled.nav`
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;