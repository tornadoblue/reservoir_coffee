import styled from 'styled-components';

export const TopLocationContainer = styled.div`
    position: relative;
    // border: 2px solid white;
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
`

export const HoursTable = styled.table`
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    // border: 2px solid red;
    text-align: center;
    color: #fff;
`

export const HoursHeader = styled.h1`
    font-size: 2rem;
    color: #E8AA14;
    width: 100%;
    position: absolute;
    top: 20px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`

export const OpenOrClosed = styled.div`
    font-size: 1.5rem;
    color: #fff;
    width: 100%;
    position: absolute;
    bottom: 20px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`

export const LocationInformation = styled.div`
    color: #fff;
    width: 80%;
    margin: 50px auto;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`