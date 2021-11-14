import styled from 'styled-components';

export const IntroductionDescriptionAbout = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 40px;
    
    @media screen and (max-width: 1200px) {
        padding-top: 20px;
        font-size: 0.92rem;
    }
    @media screen and (max-width: 1050px) {
        padding-top: 10px;
        font-size: 0.80rem;
    }
    @media screen and (max-width: 900px) {
        padding-top: 20px;
        padding-right: 0;
        font-size: 1rem;
        text-align: center;
        margin: auto;
    }
`

export const AboutIntroductionHeader = styled.div`
    width: 90%;
    border-bottom: 3px solid #2dccd3;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    padding-right: 25px;
    
    @media screen and (max-width: 1545px) {
        font-size: 2rem;
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

export const TopAboutContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
`

export const TopAboutElementContainer = styled.div`
    position: relative;
    width: 80%;
    height: 550px;
    margin: auto;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    
    @media screen and (max-width: 900px) {
        text-align: center;
        display: flex;
        flex-flow: wrap;
        height: 100%;
    }
`

export const AboutIntroduction = styled.div`
    width: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    padding: 20px;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        position: relative;
        padding-bottom: 30px;
    }
`

export const AboutImageContainer = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 30px;
    
    @media screen and (max-width: 900px) {
        width: 80%;
        height: 40vw;
        position: relative;
        margin: auto;
        padding-top: 0;
    }
`