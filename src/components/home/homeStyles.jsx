import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MainContainer = styled.div`
    position: relative;
    color: #f2e9e4;
    width: 100%;
    height: 100%;
    margin: auto;  
`

export const MenuBtn = styled(Link)`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    padding: 0.65em 1.6em;
    border: 1px solid #fff;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #fff;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    &:hover {
        background-color: #0FA3B1;
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

export const BodyContainer = styled.div`
    position: relative;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const MenuHeader = styled.div`
    text-align: center;
    color: #FFFFEA;
    font-size: 6vw;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 4px 4px 7px black;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    margin: auto;
    color: #fff;
    width: 80%;
    height: 620px;
    padding: 20px;
    align-content: flex-start;
    border-radius: 5px;
    background-color:rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const MenuItem = styled.div`
    width: 50%;
    padding-bottom: 30px;
`

export const TopContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: #12130F;
    padding-top: 5%;
    padding-bottom: 5%;
`

export const TopElementContainer = styled.div`
    position: relative;
    width: 80%;
    height: 500px;
    margin: auto;
`

export const LowerElementContainer = styled.div`
    position: relative;
    width: 80%;
    height: 500px;
    margin: auto;
    padding: 5%;
`

export const LowerElementHeader = styled.div`
    position: relative;
    width: 50%;
    margin: auto;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    padding-bottom: 3px;
    border-bottom: 3px solid #0FA3B1;
`

export const PhotosContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    height: 100%;
`

export const PhotoContainer = styled.div`
    position: relative;
    width: 25%;
    height: 100%;
    display: flex;
    overflow: hidden;
`

export const Introduction = styled.div`
    width: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
`

export const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const IntroductionHeader = styled.div`
    width: 90%;
    border-bottom: 3px solid #0FA3B1;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    padding-right: 25px;
`

export const IntroductionDescription = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding-top: 60px;
    padding-bottom: 30px;
    padding-right: 40px;
`

export const AboutBtn = styled(Link)`
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    padding: 0.65em 1.6em;
    border: 1px solid #fff;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #fff;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    &:hover {
        background-color: #0FA3B1;
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

export const ImageHome = styled.img`
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    
`

export const LocationContainer = styled.div`
    position: relative;
    height: 500px;
    padding-top: 5%;
    width: 80%;
    margin: auto;
`

export const LocationHeader = styled.div`
    font-size: 2rem;
    width: 100%;
    padding-top: 10px;
    border-bottom: 3px solid #0FA3B1;
    font-family: 'Montserrat', sans-serif;
`

export const LocationDescription = styled.div`
    width: 100%;
    position: absolute;
    padding-top: 60px;
    padding-bottom: 30px;
    padding-right: 40px;
    font-family: 'Montserrat', sans-serif;
`

export const LocationSlogan = styled.div`
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    bottom: 0;
    padding-bottom: 20px;
    font-size: 2rem;
`

export const MapContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const SpacingContainer = styled.div`
    padding-top: 5%;
    height: 100%;
`

export const LocationWrapper = styled.div`
    position: relative;
    padding-top: 5%;
    padding-bottom: 5%;
    height: 100%;
    width: 100%;
    background: #12130F;
`

export const LeftLocationContainer = styled.div`
    width: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
`

export const RightLocationContainer = styled.div`
    width: 50%;
    position: absolute;
    padding-left: 20px;
    right: 0;
    bottom: 0;
    height: 100%;
`