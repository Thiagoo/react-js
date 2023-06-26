import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/'>Json1</NavLink>
          <NavLink to='/view2'>Json2</NavLink>
          <NavLink to='/view3'>Json3</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
