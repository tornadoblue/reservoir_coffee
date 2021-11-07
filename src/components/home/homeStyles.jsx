import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MainContainer = styled.div`
    position: relative;
    background-attachment: fixed;
    color: #f2e9e4;
    display: flex;
    width: 100%;
    height: 95vh;
    margin: auto;
    z-index: -1;
    // box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8);
    
`

export const ReviewContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: auto;
    border-radius: 5px;
    background: #212529;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const ReviewBody = styled.div`
    position: relative;
    justify-content: center;
    background: #FFFFEA;
    width: 100%;
    height: -100vw;
    box-shadow: inset 0 0 10px #000000;
    padding-bottom: 50px;
`

export const Header = styled.h1`
    position: fixed;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    top: 50%;
    left: 15%;
    transform: translate(-50%, -50%);
    font-size: 4vw;
    text-shadow: 5px 5px 7px black;
    line-height: 1.2;
    
    // @media screen and (max-width: 1290px) {
    //     font-size: 2.7vw;
    // }
    // @media screen and (max-width: 1290px) {
    //     font-size: 2.5vw;
    // }
    // @media screen and (max-width: 1000px) {
    //     font-size: 2.1vw;
    // }
    @media screen and (max-width: 768px) {
        display: none;
    }
    
`

export const MenuBtn = styled(Link)`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    padding: 0.65em 1.6em;
    border: 1px solid #000;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    // font-family: "Roboto", sans-serif;
    font-weight: 600;
    color: #000;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    &:hover {
        background-color: #00B4DB;
        color: #fff;
        text-decoration: none;
    }
    
    // @media screen and (max-width: 2300px) {
    //     top: 350px;
    // }
    // @media screen and (max-width: 2100px) {
    //     top: 300px;
    // }
    // @media screen and (max-width: 1850px) {
    //     top: 250px;
    // }
`

export const CompanyName = styled.h1`
    position: fixed;
    color: #fff;
    font-family: 'Courgette', sans-serif;
    margin-top: 5%;
    left: 10%;
    font-size: 5vw;
    text-shadow: 7px 5px 5px black;
    
    @media screen and (max-width: 1650px) {
        margin-top: 4.5%
    }
    @media screen and (max-width: 1450px) {
        margin-top: 4%;
    }
    @media screen and (max-width: 1300px) {
        margin-top: 3%;
    }
    @media screen and (max-width: 1160px) {
        font-size: 4vw;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const BodyContainer = styled.div`
    position: relative;
    justify-content: center;
    background: #FFFFEA;
    width: 100%;
    height: 1000px;
    box-shadow: inset 0 0 10px #000000;
`

export const ReviewHeader = styled.div`
    text-align: center;
    color: #212529;
    font-size: 6vw;
    // font-family: 'Montserrat', sans-serif;
    text-shadow: 4px 4px 7px black;
`

export const MenuHeader = styled.div`
    text-align: center;
    color: #FFFFEA;
    font-size: 6vw;
    // font-family: 'Montserrat', sans-serif;
    text-shadow: 4px 4px 7px black;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    margin: auto;
    width: 80%;
    height: 620px;
    padding: 20px;
    align-content: flex-start;
    border-radius: 5px;
    background: #FFFFEA;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const MenuItem = styled.div`
    width: 50%;
    padding-bottom: 30px;
`

export const MenuItemHeader = styled.div`
    
`
