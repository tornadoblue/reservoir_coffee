import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './navbarElements';

function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to={"/"}>
                    <h1>
                        Logo
                    </h1>
                </NavLink>
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to={"/menu"} activeStyle>
                        Menu
                    </NavLink>
                    <NavLink to={"/gallery"} activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to={"/about"} activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to={"/location"} activeStyle>
                        Location
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;