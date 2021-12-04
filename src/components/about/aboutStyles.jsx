import styled from 'styled-components';

export const IntroductionDescriptionAbout = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding-top: 30px;
    
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
    margin: auto;
    
    @media screen and (max-width: 1200px) {
        font-size: 2rem;
    }
`

export const TopAboutContainer = styled.div`
    position: relative;
    height: 100%;
    width: 80%;
    border-radius: 5px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    
    @media screen and (max-width: 900px) {
        width: 95%;
    }
`

export const TopAboutElementContainer = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    padding: 40px;
    display: flex;
    flex-flow: wrap;
    height: 100%;
    
    @media screen and (max-width: 900px) {
        padding: 20px;
    }
`

export const AboutIntroduction = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding-bottom: 30px;
`

export const AboutImageContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 50vw;
    position: relative;
    margin: auto;
    padding: 0;
    width: 100%;
`

export const MainAboutContainer = styled.div`
    position: relative;
    color: #f2e9e4;
    width: 100%;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
`