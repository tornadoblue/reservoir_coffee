import styled from 'styled-components';

export const MainMenuContainer = styled.div`
    color: #fff;
    background: #fff;
    display: flex;
    width: 85%;
    height: 1000px;
    justify-content: center;
    margin: auto;
    border-radius: 3px;
    box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8);    
`

export const MenuInnerHeader = styled.div`
    text-align: center;
    margin: auto;
    width: 80%;
    color: #fff;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 4px 4px 7px black;
    border-bottom: 3px solid #E8AA14;
`

export const LatteImg = styled.img`
    width: 30%;
    margin: auto;
    
     @media screen and (max-width: 900px) {
        display: none;
    }
`