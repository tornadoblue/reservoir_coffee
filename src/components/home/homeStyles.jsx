import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Col, Row} from "react-bootstrap";

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
    color: #fff;
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 4px 4px 7px black;
`

export const MenuContainer = styled.div`
    position: relative;
    margin: auto;
    color: #fff;
    width: 80%;
    height: 10%;
    padding: 20px;
    border-radius: 5px;
    background-color:rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    @media screen and (max-width: 594px) {
        width: 95%;
    }
`

export const MenuCol = styled(Row)`
    width: 50%;
    margin: 0 auto;
    height: 100%;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
    
`

export const MenuItem = styled.div`
    display: block;
    width: 100%;
    padding-bottom: 30px;
    text-align: center;
`

export const MenuTable = styled.table`
    width: 100%;
    font-size: 1.3rem;
    table-layout: fixed;
    font-family: "Staatliches";
    
    @media screen and (max-width: 1200px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 900px) {
        font-size: 1.3rem;
        text-align: center;
    }
    @media screen and (max-width: 594px) {
        font-size: 1rem;
        text-align: center;
    }
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
    
    @media screen and (max-width: 900px) {
        text-align: center;
        display: flex;
        flex-flow: wrap;
        height: 100%;
    }
`

export const LowerElementContainer = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    margin: auto;
    padding-top: 5%;
`

export const LowerElementHeader = styled.div`
    position: relative;
    width: 50%;
    margin: auto;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    padding-bottom: 3px;
    border-bottom: 3px solid #2dccd3;
    
    @media screen and (max-width: 1200px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 900px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 575px) {
        font-size: 1.2rem;
        width: 60%;
    }
`

export const PhotosContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    padding-top: 20px;
    flex-flow: wrap;
    width: 100%;
    height: 100%;
`

export const PhotoContainer = styled.div`
    position: relative;
    width: 25vw;
    height: 25vw;
    display: flex;
    overflow: hidden;
    margin: auto;
`

export const Introduction = styled.div`
    width: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        position: relative;
        padding-bottom: 30px;
    }
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
    
    @media screen and (max-width: 900px) {
        width: 80%;
        height: 40vw;
        position: relative;
        margin: auto;
    }
`

export const IntroductionHeader = styled.div`
    width: 90%;
    border-bottom: 3px solid #2dccd3;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    padding-right: 25px;
    
    @media screen and (max-width: 1545px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 1200px) {
        font-size: 2rem;
        padding-right: 0;
    }
    @media screen and (max-width: 900px) {
        font-size: 2rem;
        padding-right: 0;
        margin: auto;
    }
`

export const IntroductionDescription = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding-top: 60px;
    padding-bottom: 30px;
    padding-right: 40px;
    
    @media screen and (max-width: 900px) {
        padding-top: 20px;
        padding-right: 0;
        text-align: center;
        margin: auto;
    }
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
    
    @media screen and (max-width: 900px) {
        position: relative;
        margin: auto
    }
`

export const ImageHome = styled.img`
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
`

export const LocationTitle = styled.div`
    display: none;
    font-size: 2rem;
    width: 95%;
    margin: auto;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    border-bottom: 3px solid #2dccd3;
    
    @media screen and (max-width: 900px) {
        display: inline;
    }
    @media screen and (max-width: 575px) {
        display: inline;
        font-size: 1.2rem;
    }
`

export const LocationContainer = styled.div`
    position: relative;
    height: 500px;
    padding-top: 5%;
    width: 80%;
    margin: auto;
    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-flow: wrap;
        height: 100%;
    }
`

export const LocationHeader = styled.div`
    font-size: 2rem;
    width: 100%;
    padding-top: 10px;
    border-bottom: 3px solid #2dccd3;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 1450px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 900px) {
        text-align: center;
        margin: auto;
        height: 100%;
        width: 90%;
        font-size: 1.3rem;
    }
    @media screen and (max-width: 585px) {
        text-align: center;
        margin: auto;
        height: 100%;
        width: 95%;
        font-size: 1rem;
    }
`

export const LocationDescription = styled.div`
    width: 100%;
    position: absolute;
    padding-top: 60px;
    padding-bottom: 30px;
    padding-right: 40px;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 900px) {
        position: relative;
        height: 100%;
        padding-right: 0;
        font-size: 1rem;
        text-align: center;
    }
`

export const LocationSlogan = styled.div`
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    bottom: 0;
    padding-bottom: 20px;
    font-size: 2rem;
    
    @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 900px) {
        position: relative;
        font-size: 1.1rem;
        text-align: center;
    }
`

export const MapContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
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
    
    @media screen and (max-width: 900px) {
        width: 100%;
        position: relative;
        align-content: center;
    }
`

export const RightLocationContainer = styled.div`
    width: 50%;
    position: absolute;
    padding-left: 20px;
    right: 0;
    bottom: 0;
    height: 100%;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        position: relative;
        padding-left: 0;
    }
`

export const InnerDescriptionParagraph = styled.p`
    position: absolute;
    bottom: 15%;
    font-size: 1.3rem;
    
    @media screen and (max-width: 1200px) {
        font-size: 1.1rem;
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        text-align: center;
        position: relative;
    }
`