import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  top: 0;
  z-index: 10;
  
  box-shadow: 0 2px 4px -1px black;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0;
  height: 100%;
  cursor: pointer;
  color: #fff;
  
  &:hover {
    border-bottom: 2px solid #2dccd3;
    text-decoration: none;
    margin-bottom: 5px;
    color: #fff;
  }
  &.active {
    color: #E8AA14;
    border-bottom: 2px solid #2dccd3;
    text-decoration: none;
    margin-bottom: 5px;
  }
`;

export const NavLinkContainer = styled.div`
    padding: 0 1rem;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10%;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
    text-decoration: none;
    font-size: 1.1rem;
    height: 100%;
    cursor: pointer;
    margin-left: 10%;
    
    @media screen and (max-width: 768px) {
        margin-left: 5%;
    }
`
