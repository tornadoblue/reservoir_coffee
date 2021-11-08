import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu, LogoLink, NavLinkContainer,
} from './navbarElements';
import {Link} from "react-router-dom";

function Navbar({toggle}) {
    return (
        <>
            <Nav style={backgroundImage}>
                <LogoLink to={"/"}>
                    <h1>
                        Logo
                    </h1>
                </LogoLink>
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLinkContainer>
                        <NavLink to={"/menu"} activeStyle>
                            Menu
                        </NavLink>
                    </NavLinkContainer>
                    <NavLinkContainer>
                        <NavLink to={"/gallery"} activeStyle>
                            Gallery
                        </NavLink>
                    </NavLinkContainer>
                    <NavLinkContainer>
                        <NavLink to={"/about"} activeStyle>
                            About Us
                        </NavLink>
                    </NavLinkContainer>
                    <NavLinkContainer>
                        <NavLink to={"/location"} activeStyle>
                            Location
                        </NavLink>
                    </NavLinkContainer>
                </NavMenu>
            </Nav>
        </>
    );
}

const backgroundImage = {
    backgroundImage: 'url(/images/beans4.jpg)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0,0,0,0.50)",
    backgroundBlendMode: "multiply",
}

export default Navbar;