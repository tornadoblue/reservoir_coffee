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

export const LogoImg = styled.img`
    position: relative;
    display: block;
    margin: auto;
    width: 50%;
    justify-content: center;
    margin: auto;
    
    @media screen and (max-width: 900px) {
        width: 50%;
    }
    
`

export const MenuBodyContainer = styled.div`
    position: relative;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
`

export const MenuItemHeader = styled.div`
    border-bottom: 3px solid #2dccd3;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    width: 95%;
    margin: auto;
`