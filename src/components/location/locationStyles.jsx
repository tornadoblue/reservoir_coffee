import styled from 'styled-components';

export const TopLocationContainer = styled.div`
    position: relative;
`

export const LocationHeaderContainer = styled.div`
    width: 60%;
    position: relative;
    text-align: center;
    margin: auto;
    font-size: 3rem;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    border-bottom: 3px solid #2dccd3;
    
    @media screen and (max-width: 900px) {
        font-size: 2rem;
    }
`

export const HoursTable = styled.table`
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    text-align: center;
    color: #fff;
    
    @media screen and (max-width: 900px) {
        position: relative;
        transform: none;
        margin: 8% auto;
        font-size: 1rem;
    }
`

export const HoursHeader = styled.h1`
    font-size: 2rem;
    color: #E8AA14;
    width: 100%;
    position: absolute;
    top: 20px;
    text-align: center;
    left: 0;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 900px) {
        position: relative;
    }
`

export const OpenOrClosed = styled.div`
    font-size: 1.5rem;
    color: #fff;
    width: 100%;
    position: absolute;
    bottom: 20px;
    left: 0;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 900px) {
        position: relative;
    }
`

export const LocationInformation = styled.div`
    color: #fff;
    width: 80%;
    margin: 50px auto;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 900px) {
        width: 95%;
        margin-top: 25px;
        margin-bottom: 25px;
    }
`